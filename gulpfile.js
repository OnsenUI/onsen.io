var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var gutil = require('gulp-util');

//////////////////////////////
// generate
//////////////////////////////
gulp.task('generate', ['sass'], function(done) {

  var metalsmith = require('metalsmith');
  var templates = require('metalsmith-templates');
  var ignore = require('metalsmith-ignore');
  var layouts = require('metalsmith-layouts');
  var assets = require('metalsmith-assets');

  metalsmith(__dirname)
    .clean(false)
    .source('./src/documents_' + lang)
    .metadata(require('./config.js')(lang))
    .use(ignore('*.eco'))
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

gulp.task('sass', function() {
  return gulp.src('src/sass/style.scss')
    .pipe($.compass({
      css: 'src/files/css',
      sass: 'src/sass'
    }))
    .pipe(gulp.dest('src/files/css/'));
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

  gulp.watch([
    'src/documents_' + lang + '/**/*',
    'src/layouts/*',
    'src/partials/*',
    'src/sass/*'
  ], ['generate']);
});

var lang = argv.lang === 'en' ? 'en' : 'ja';

gutil.log('Language: --lang=' + lang);
gutil.log('Documents: \'./src/documents_' + lang + '\'');
