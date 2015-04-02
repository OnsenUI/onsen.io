var metalsmith = require('metalsmith');
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
var redirect = require('metalsmith-redirect');
var draft = require('metalsmith-drafts');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var sortObject = require('sort-object');
var currentPath = require('./current-path');

module.exports = function(lang, isStaging) {
  return {
    site: function(done) {
      metalsmith(__dirname + '/../')
        .clean(false)
        .source('./src/documents_' + lang)
        .metadata(require('../config.js')(lang, isStaging))
        .use(draft())
        .use(require('./helpers')())
        .use(require('./import-api-docs')(lang))
        .use(require('./patterns-collection')(lang))
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
        .use(function(files, metalsmith, done) {
          setImmediate(done);

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
        })
        .use(templates({engine: 'eco', inPlace: true}))
        .use(require('./autotoc')())
        .use(function(files, metalsmith, done) {
          setImmediate(done);

          var cssFile = files['reference/css.html'];
          var cssToc = cssFile.toc;
          delete cssFile.toc;

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
        .use(require('./css-transform')(lang))
        .use(redirect({
          '/components.html' : '/reference/javascript.html',
          '/guide/components.html' : '/reference/javascript.html'
        }))
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
        .use(function(files, metalsmith, done) {
          setImmediate(done);
          metalsmith.metadata().isBlog = true;
          var site = metalsmith.metadata().site;
          site.url = site.url + '/blog/';
        })
        .use(draft())
        .use(require('./helpers')())
        .use(collections({
          articles: {
            pattern: '*.markdown',
            sortBy: 'date',
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
            perPage: 4,
            path: 'blog'
          }))
          .use(currentPath())
          .use(templates({inPlace: true, engine: 'eco'}))
        )
        .use(metalsmithDebug())
        .use(feed({
          collection: 'articles',
          limit: 10,
          destination: 'rss.xml',
          feedOptions: {
            title: 'Onsen UI Blog',
            url: 'http://onsen.io/'
          }
        }))
        .use(branch('!rss.xml')
          .use(currentPath())
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
        .use(sitemap({
          output: 'sitemap.xml',
          hostname: 'http://' + (isStaging ? 's.' : '') + (lang === 'ja' ? 'ja.' : '') + 'onsen.io/blog/',
          defaults: {
            priority: 0.5
          }
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
