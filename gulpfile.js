var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var del = require('del');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var siteGenerator = require('./modules/metalsmith');
var gettext = require('./modules/gettext');
var parallelize = require('concurrent-transform');
var transifex = require('./modules/gulp-transifex');

//--

var lang = argv.lang === 'en' ? 'en' : 'ja';
var env = argv.production ? 'production' : 'staging';

gutil.log('Language: --lang=' + lang);
gutil.log('Environment: ' + env);
gutil.log('Source: \'./src/documents_' + lang + '\'');
gutil.log('Destination: \'./out_' + lang + '\'');

// Print stack trace on unhandled rejection
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});

//////////////////////////////
// generate
//////////////////////////////
gulp.task('generate', gulp.series(less, metalsmith, blog, authors));

//////////////////////////////
// blog
//////////////////////////////
function blog(done) {
  siteGenerator(lang, env === 'staging').blog(done);
}

//////////////////////////////
// authors
//////////////////////////////
function authors(done) {
  siteGenerator(lang, env === 'staging').authors(done);
}

//////////////////////////////
// metalsmith
//////////////////////////////
function metalsmith(done) {
  siteGenerator(lang, env === 'staging').site(done);
}

//////////////////////////////
// i18n
//////////////////////////////
var createTransifexClient = function() {
  if (!process.env.TRANSIFEX && !config.TRANSIFEX) {
    gutil.log(gutil.colors.bold.red("No TRANSIFEX variable found in env or config.json!"));
    gutil.log(gutil.colors.red("Transifex sync is not available."));
    return null;
  }
  var userpw = process.env.TRANSIFEX || config.TRANSIFEX;
  return transifex.createClient({
      user: userpw.split(":")[0],
      password: userpw.split(":")[1],
      project: "onsen-ui-website",
      local_path: "src/i18n/",
    });
}
gulp.task('i18n-extract', function() {
  return gulp.src('src/documents_en/v2/guide/**/*')
    .pipe(gettext.extract())
    .pipe(gulp.dest('src/i18n/gettext/v2/guide'));
});

gulp.task('i18n-translate', function() {
  return gulp.src('src/i18n/gettext/v2/guide/**/*.po')
    .on('data', (vinylFile) => { gutil.log(`Processing ${gutil.colors.cyan(vinylFile.history[0])}...`); })
    .pipe(gettext.translate())
    .pipe(gulp.dest('src/documents_ja/v2/guide'));
});

//////////////////////////////
// imagemin
//////////////////////////////
gulp.task('imagemin-core', function() {
  return gulp.src('src/files/images/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest('src/files/images/'));
});

gulp.task('imagemin-blog', function() {
  return gulp.src('blog/content/images/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest('blog/content/images/'));
});

gulp.task('imagemin', gulp.series('imagemin-core', 'imagemin-blog'));

//////////////////////////////
// less
//////////////////////////////
function less() {
  return gulp.src(['src/less/main.less', 'src/less/blog.less'])
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe($.cssmin())
    .pipe(gulp.dest('./out_' + lang + '/css/'));
}

//////////////////////////////
// clean
//////////////////////////////
function clean(done) {
  del([
    'out_' + lang + '/*'
  ], done);
}

//////////////////////////////
// serve
//////////////////////////////
function serve(done) {
  browserSync({
    server: {
      baseDir: 'out_' + lang,
      index: 'index.html'
    },
    port: argv.port ? parseInt(argv.port) : 3000,
    notify: false,
    open: false,
    injectChanges: true
  });

  var options = {
    debounceDelay: 400
  };

  gulp.watch([
    'src/documents_' + lang + '/**/*',
    'dist/v1/OnsenUI/build/docs/' + lang + '/partials/*/*.html',
    'dist/v2/OnsenUI/build/docs/' + lang + '/partials/*/*.html',
    'src/layouts/*',
    'src/misc/*',
    'src/partials/*',
    'src/files/**/*',
  ], options,
    gulp.series(metalsmith, blog, authors, () => browserSync.reload())
  );

  gulp.watch([
    'src/less/*'
  ], options,
    gulp.series(less, () => browserSync.reload())
  );

  if (lang === 'en') {
    gulp.watch([
      'blog/*',
      'blog/posts/*',
      'blog/authors/*',
      'blog/content/**/*',
      'src/partials/*',
      'src/layouts/blog.html.eco'
    ], options, 
      gulp.series(blog, () => browserSync.reload())
    );
  } else if (lang === 'ja') {
    gulp.watch([
      'blog_ja/*',
      'blog_ja/posts/*',
      'blog_ja/authors/*',
      'blog_ja/content/**/*',
      'src/partials/*',
      'src/layouts/blog_ja.html.eco'
    ], options,
      gulp.series(blog, () => browserSync.reload())
    );
  } 

  done();
}

exports.serve = gulp.series('generate', serve);

//////////////////////////////
// deploy
//////////////////////////////
exports.deploy = gulp.series(clean, 'generate', deployAws);

function deployAws() {
  var aws,
      aws_config = 'aws_' + lang + (env == 'production' ? '_prod' : '') + '.json';

  if (fs.existsSync(path.join(__dirname, aws_config))) {
    gutil.log("Loading from AWS config file.");
    aws = JSON.parse(fs.readFileSync(path.join(__dirname, aws_config)));
  } else if (process.env.AWS_KEY) {
    gutil.log("Loading from environment variable.");
    aws = {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
      params: {
        Bucket: process.env.AWS_BUCKET
      }
    };
  }
  
  if (!aws) {
    throw new Error('AWS configuration is missing! Please create a config file, or set it in the environment before trying to deploy!');
  }

  var dst = 'out_' + lang;
  var publisher = $.awspublish.create(aws);

  var site = gulp.src([
    dst + '/**',
    '!' + dst + '/dist',
  ]);

  var headers = env == 'production' ? {'Cache-Control': 'max-age=7200, no-transform, public'} : {'Cache-Control': 'no-cache'};

  var stream = merge(site)
    .pipe(parallelize(publisher.publish(headers), 10))
    .pipe(publisher.sync())
    .pipe($.awspublish.reporter());

  return stream;
}
