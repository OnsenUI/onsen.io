var metalsmith = require('metalsmith');
var path = require('path');
var templates = require('metalsmith-templates');
var ignore = require('metalsmith-ignore');
var layouts = require('metalsmith-layouts');
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var sitemap = require('metalsmith-sitemap');
var branch = require('metalsmith-branch');
var permalinks = require('metalsmith-permalinks');
var metalsmithDebug = require('metalsmith-debug');
var paginate = require('metalsmith-paginate');
var feed = require('metalsmith-feed');
var draft = require('metalsmith-drafts');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var tags = require('metalsmith-tags');
var wordcloud = require('metalsmith-wordcloud');
var currentPath = require('./current-path');
var nodePath = require('path');
var crypto = require('crypto');
var categories = require(path.join(__dirname, 'categories'));

module.exports = function(lang, isStaging) {
  return {

    site: function(done) {
      metalsmith(__dirname + '/../')
        .clean(false)
        .source('./src/documents_' + lang)
        .metadata(require('../config.js')(lang, isStaging))
        .use(ignore(['**/.DS_Store']))
        .use(ignore(['**/.*']))
        .use(draft())
        .use(require('./helpers')())
        .use(require('./v1-api-docs')(lang))
        .use(require('./v2-wc-api-docs')(lang, 'js'))
        .use(require('./v2-wc-api-docs')(lang, 'vue'))
        .use(require('./v2-wc-api-docs')(lang, 'vue3'))
        .use(require('./v2-wc-api-docs')(lang, 'angular1'))
        .use(require('./v2-wc-api-docs')(lang, 'angular2'))
        .use(require('./v2-react-api-docs')(lang))
        .use(require('./tutorial-text')(lang))
        .use(require('./v2-css-docs')())
        .use(require('./patterns-collection')(lang, __dirname + '/../dist/v2/OnsenUI/css-components/www/patterns'))
        .use(collections({
          components: {
            sortBy: 'name'
          },
          objects: {
            sortBy: 'name'
          },
          guides: {
            sortBy: 'name'
          }
        }))
        .use(require('./docs-categories.js')(lang))
        .use(templates({engine: 'eco', inPlace: true}))
        .use(require('./autotoc')())
        .use(function(files, metalsmith, done) {
          setImmediate(done);
          var cssFile = files['v2' + nodePath.sep + 'docs' + nodePath.sep + 'css.html'];
          if (cssFile && cssFile.toc) {
            var cssToc = cssFile.toc;
            delete cssFile.toc;
          }

          metalsmith.metadata().cssToc = cssToc;
        })
        .use(currentPath())
        .use(branch('!robots.txt')
          .use(layouts({
            engine: 'eco',
            directory: './src/layouts/',
            default: 'default.html.eco'
          }))
        )
        .use(assets({source: './src/files'}))
        .use(assets({source: './dist/v1/OnsenUI/build', destination: 'v1/OnsenUI'}))
        .use(assets({source: './dist/v2/OnsenUI/onsenui/css', destination: 'v2/OnsenUI/css'}))
        .use(assets({source: './dist/v2/OnsenUI/onsenui/esm', destination: 'v2/OnsenUI/esm'}))
        .use(assets({source: './dist/v2/OnsenUI/onsenui/js', destination: 'v2/OnsenUI/js'}))
        .use(assets({source: './dist/playground', destination: 'playground'}))
        .use(assets({source: './dist/themeroller', destination: 'themeroller'}))
        .use(require('./css-transform')(lang))
        .use(branch('*.html').use(currentPath()))
        .use(function(files, metalsmith, done) {
          setImmediate(done);

          for (var file in files) {
            if (file.match(/\.html$/)) {
              files[file].path = file;
            }
          }
        })
        .use(branch('robots.txt').use(templates({
          inPlace: true, engine: 'eco'
        })))
        .use(sitemap({
          ignoreFiles: [/\.gitignore/],
          output: 'sitemap.xml',
          hostname: 'http://' + (isStaging ? 's.' : '') + (lang === 'ja' ? 'ja.' : '') + 'onsen.io',
          defaults: {
            priority: 0.5
          }
        }))
        .destination('./out_' + lang)
        .build(function(error) {
          if (error) {
            gutil.log('ERROR: ' + error);
            if (error.stack) {
              gutil.log(error.stack);
            }
          }

          browserSync.reload();
          gutil.log('Generated into \'./out_' + lang + '\'');
          done();
        });

    }
  };
};
