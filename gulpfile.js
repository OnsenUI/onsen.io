var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var del = require('del');
var runSequence = require('run-sequence');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var siteGenerator = require('./modules/metalsmith');

//--

var lang = argv.lang === 'en' ? 'en' : 'ja';

gutil.log('Language: --lang=' + lang);
gutil.log('Source: \'./src/documents_' + lang + '\'');
gutil.log('Destination: \'./out_' + lang + '\'');

//////////////////////////////
// generate
//////////////////////////////
gulp.task('generate', ['less', 'metalsmith', 'blog']);

gulp.task('blog', function(done) {
  siteGenerator(lang).blog(done);
});

//////////////////////////////
// metalsmith
//////////////////////////////
gulp.task('metalsmith', function(done) {
  siteGenerator(lang).site(done);
});

//////////////////////////////
// less
//////////////////////////////
gulp.task('less', function() {
  return gulp.src('src/less/style.less')
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./out_' + lang + '/css/'));
});

//////////////////////////////
// clean
//////////////////////////////
gulp.task('clean', function(done) {
  del([
    'out_' + lang + '/*',
    '!out_' + lang + '/OnsenUI',
  ], done);
});

//////////////////////////////
// serve
//////////////////////////////
gulp.task('serve', ['generate'], function() {
  browserSync({
    server: {
      baseDir: 'out_' + lang,
      index: 'index.html'
    },
    notify: false,
    open: false,
    injectChanges: true
  });

  var options = {
    debounceDelay: 400
  };

  gulp.watch([
    'src/documents_' + lang + '/**/*',
    'OnsenUI/build/docs/' + lang + '/partials/*/*.html',
    'src/layouts/*',
    'src/partials/*',
    'src/files/**/*',
  ], options, function() {
    runSequence(['metalsmith', 'blog'], function() {
      browserSync.reload();
    });
  });

  gulp.watch([
    'src/less/*'
  ], options, function() {
    runSequence('less', function() {
      browserSync.reload();
    });
  });

  if (lang === 'en') {
    gulp.watch([
      'blog/*',
      'blog/posts/*',
      'blog/content/**/*',
      'src/layouts/blog.html.eco'
    ], options, function() {
      runSequence('blog', function() {
        browserSync.reload();
      });
    });
  }
});

//////////////////////////////
// deploy
//////////////////////////////
gulp.task('deploy', ['clean', 'generate'], function() {
  var aws,
    fn = 'aws_' + lang + (argv.production ? '_prod' : '') + '.json';

  try {
    aws = JSON.parse(fs.readFileSync(path.join(__dirname, fn)));
  } catch(e) {
  }

  if (!aws) {
    throw new Error(fn + ' is missing! Please create it before trying to deploy!');
  }

  var dst = 'out_' + lang;
  var publisher = $.awspublish.create(aws);

  var site = gulp.src([dst + '/**', '!' + dst + '/OnsenUI']);

  var templates = gulp.src('OnsenUI/project_templates/**')
    .pipe($.rename(function(path) {
      path.dirname = 'OnsenUI/project_templates/' + path.dirname;
    }));

  var build = gulp.src('OnsenUI/build/**')
    .pipe($.rename(function(path) {
      path.dirname = 'OnsenUI/build/' + path.dirname;
    }));

  var stream = merge(site, templates, build)
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe($.awspublish.reporter());

  // Invalidate Cloudfront cache.
  if (aws.distributionId) {
    stream = stream.pipe($.cloudfront(aws));
  }

  return stream;
});
