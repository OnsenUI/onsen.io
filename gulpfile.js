var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

//////////////////////////////
// generate-ja
//////////////////////////////
gulp.task('generate-ja', ['sass'], function(done) {

  var metalsmith = require('metalsmith');
  var templates = require('metalsmith-templates');
  var ignore = require('metalsmith-ignore');
  var layouts = require('metalsmith-layouts');
  var assets = require('metalsmith-assets');

  metalsmith(__dirname)
    .clean(false)
    .source('./src/documents_ja')
    .metadata(require('./config.js'))
    .use(ignore('*.eco'))
    .use(require('./plugins/helpers')())
    .use(templates({engine: 'eco', inPlace: true}))
    .use(require('./plugins/autotoc')())
    .use(layouts({engine: 'eco', directory: './src/layouts/', default: 'default.html.eco'}))
    .use(assets({source: './src/files'}))
    .destination('./gen_ja')
    .build(function(error) {
      if (error) {
        console.log(error);
        throw error;
      }

      browserSync.reload();
      done();
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
// serve-ja
//////////////////////////////
gulp.task('serve-ja', ['generate-ja'], function() {
  browserSync({
    server: {
      baseDir: 'gen_ja',
      index: 'index.html'
    },
    notify: false,
    open: false
  });

  gulp.watch([
    'src/documents_ja/**/*',
    'src/layouts/*',
    'src/partials/*',
    'src/sass/*'
  ], ['generate-ja']);
});


