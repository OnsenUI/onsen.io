var metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var ignore = require('metalsmith-ignore');
var layouts = require('metalsmith-layouts');
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var branch = require('metalsmith-branch');
var permalinks = require('metalsmith-permalinks');
var metalsmithDebug = require('metalsmith-debug');
var paginate = require('metalsmith-paginate');
var feed = require('metalsmith-feed');
var redirect = require('metalsmith-redirect');
var draft = require('metalsmith-drafts');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var sortObject = require('sort-object');

module.exports = function(lang) {
  return {
    site: function(done) {
      metalsmith(__dirname + '/../')
        .clean(false)
        .source('./src/documents_' + lang)
        .metadata(require('../config.js')(lang))
        .use(draft())
        .use(require('./helpers')())
        .use(require('./import-api-docs')(lang))
        .use(require('./patterns-collection')(lang))
        .use(collections({
          components: {
            sortBy: 'name'
          },
          objects: {
            soryBy: 'name'
          },
          guides: {
            soryBy: 'name'
          }
        }))
        .use(function(files, metalsmith, done) {
          var dict = {};
          for (var path in files) {
            var file = files[path];
            if (file.componentCategory) {
              file.componentCategory.split(/, */).forEach(function(category) {
                if (!dict[category]) {
                  dict[category] = [];
                }
                dict[category].push(file);
              });
            }
          }
          metalsmith.metadata().componentCategoryDict = sortObject(dict);

          done();
        })
        .use(templates({engine: 'eco', inPlace: true}))
        .use(require('./autotoc')())
        .use(function(files, metalsmith, done) {
          var cssFile = files['reference/css.html'];
          var cssToc = cssFile.toc;
          delete cssFile.toc;
          metalsmith.metadata().cssToc = cssToc;
          done();
        })
        .use(layouts({engine: 'eco', directory: './src/layouts/', default: 'default.html.eco'}))
        .use(assets({source: './src/files'}))
        .use(require('./css-transform')(lang))
        .use(redirect({
          '/components.html' : '/reference/javascript.html',
          '/guide/components.html' : '/reference/javascript.html'
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

    },

    blog: function(done) {

      if (lang === 'ja') {
        done();
        return;
      }

      metalsmith(__dirname + '/../')
        .clean(false)
        .source('./blog/posts/')
        .destination('./out_en/blog/')
        .metadata(require('../config.js')('en'))
        .use(draft())
        .use(require('./helpers')())
        .use(collections({
          articles: {
            pattern: '*.markdown',
            soryBy: 'date',
            reverse: true
          }
        }))
        .use(branch('*.markdown')
          // articles 
          .use(markdown({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: true
          }))
          .use(permalinks({
            pattern: ':id'
          }))
          .use(function(files, metalsmith, done) {
            var authors = metalsmith.metadata().env.authors;

            for (var path in files) {
              var doc = files[path];
              var authorName = doc.author;

              if (!doc.author) {
                throw new Error('@author is undefined: ' + path);
              }

              doc.isArticle = true;
              doc.author = authors[doc.author];

              if (!doc.author) {
                throw new Error('no such author: ' + authorName);
              }
            }

            done();
          })
          .use(function(files, metalsmith, done) {
            for (var path in files) {
              files[path].isBlogArticle = true;
            }
            done();
          })
        )
        .use(branch('*.html')
          // index page
          .use(paginate({
            perPage: 10,
            path: 'blog'
          }))
          .use(function(files, metalsmith, done) {
            metalsmith.metadata().getPath = function(file) {
              file = file || this;
              for (var path in files) {
                if (file === files[path]) {
                  return path;
                }
              }
              return '???';
            };
            done();
          })
          .use(templates({inPlace: true, engine: 'eco'}))
        )
        .use(metalsmithDebug())
        .use(feed({
          collection: 'articles',
          limit: 10,
          destination: 'rss.xml',
          feedOptions: {
            title: 'Onsen UI Blog',
            url: 'http://onsen.io/blog'
          }
        }))
        .use(branch('!rss.xml')
          .use(layouts({
            engine: 'eco',
            directory: './src/layouts/',
            default: 'blog.html.eco'
          }))
        )
        .use(assets({
          source: './blog/content',
          destination: './content'
        }))
        .build(function(error) {
          if (error) {
            gutil.log('ERROR: ' + error);
          }
          done();
        });

    }
  };
};
