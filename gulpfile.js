var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var del = require('del');
var runSequence = require('run-sequence');

//--

var lang = argv.lang === 'en' ? 'en' : 'ja';

//////////////////////////////
// generate
//////////////////////////////
gulp.task('generate', ['less', 'metalsmith']);

//////////////////////////////
// metalsmith
//////////////////////////////
gulp.task('metalsmith', ['components'], function(done) {

  var metalsmith = require('metalsmith');
  var templates = require('metalsmith-templates');
  var ignore = require('metalsmith-ignore');
  var layouts = require('metalsmith-layouts');
  var assets = require('metalsmith-assets');
  var collections = require('metalsmith-collections');

  metalsmith(__dirname)
    .clean(false)
    .source('./src/documents_' + lang)
    .metadata(require('./config.js')(lang))
    .use(collections({
      components: {
        sortBy: 'name'
      }
    }))
    .use(require('./plugins/helpers')())
    .use(templates({engine: 'eco', inPlace: true}))
    .use(require('./plugins/autotoc')())
    .use(layouts({engine: 'eco', directory: './src/layouts/', default: 'default.html.eco'}))
    .use(assets({source: './src/files'}))
    .destination('./out_' + lang)
    .build(function(error) {
      if (error) {
        gutil.log('ERROR: ' + error);
        if (error.stack) {
          gutil.log(error.stack);
        }
      }

      browserSync.reload();
      done();
      gutil.log('Generated into \'./out_' + lang + '\'');
    });
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
// components
//////////////////////////////
gulp.task('components', function() {
  return gulp.src('OnsenUI/build/docs/' + lang + '/partials/directive/*.html')
    .pipe(gulp.dest('src/documents_' + lang + '/components/'));
});

//////////////////////////////
// clean
//////////////////////////////
gulp.task('clean', function(done) {
  del([
    'out_' + lang + '/*',
    '!out_' + lang + '/OnsenUI',
    'src/documents_' + lang + '/components/*.html'
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
    open: false
  });

  var options = {
    debounceDelay: 400
  };

  gulp.watch([
    'src/documents_' + lang + '/**/*',
    'src/layouts/*',
    'src/partials/*',
    'src/files/**/*',
  ], options, function() {
    runSequence('metalsmith', function() {
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
});

gutil.log('Language: --lang=' + lang);
gutil.log('Source: \'./src/documents_' + lang + '\'');
gutil.log('Destination: \'./out_' + lang + '\'');
