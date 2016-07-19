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
var redirect = require('metalsmith-redirect');
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
        .use(draft())
        .use(require('./helpers')())
        .use(require('./v1-api-docs')(lang))
        .use(require('./v2-wc-api-docs')(lang, 'js'))
        .use(require('./v2-wc-api-docs')(lang, 'angular1'))
        .use(require('./v2-wc-api-docs')(lang, 'angular2'))
        .use(require('./v2-react-api-docs')(lang))
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
        .use(assets({source: './dist/v2/OnsenUI/build', destination: 'v2/OnsenUI'}))
        .use(assets({source: './dist/tutorial', destination: 'tutorial'}))
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
        .use(redirect(require("./redirect_rule.json")[lang]))
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

    authors: function(done) {
      metalsmith(__dirname + '/../')
        .clean(false)
        .source(lang === 'ja' ? './blog_ja/authors/' : './blog/authors/')
        .metadata(require('../config.js')(lang, isStaging))
        .destination(lang === 'ja' ? './out_ja/blog/' : './out_en/blog/')
        .use(require('./helpers')())
        .use(branch('*.markdown')
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
        )
        .use(function(files, metalsmith, done) {
          for (var path in files) {
            files[path].title = files[path].name;
          }
          done();
        })
        .use(layouts({
          engine: 'eco',
          directory: './src/layouts/',
          default: 'author.html.eco'
        }))
        .build(function(error) {
          if (error) {
            gutil.log('ERROR: ' + error);
          }
          done();
        });

   },

    blog: function(done) {
      metalsmith(__dirname + '/../')
        .clean(false)
        .source(lang === 'ja' ? './blog_ja/posts/' : './blog/posts/')
        .destination(lang === 'ja' ? './out_ja/blog/' : './out_en/blog/')
        .metadata(require('../config.js')(lang))
        .use(function(files, metalsmith, done) {
          setImmediate(done);
          metalsmith.metadata().isBlog = true;
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
          .use(function(files, metalsmith, done) {
            for (var path in files) {
              var doc = files[path];
              doc.markdownContents = doc.contents.toString('utf8');
              doc.numericId = crypto.createHash('md5').update(doc.id).digest('hex');
              var cids = {
                announcement: 5,
                showcase: 13,
                default: 7
              };
              doc.cid = cids[doc.category] || cids.default;
            }

            done();
          })
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
              doc.origContents = doc.contents;

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
          .use(tags({
            handle: 'tags',
            path: 'tags/:tag.html',
            sortBy: 'date',
            reverse: true
          }))
          .use(wordcloud({
            category: 'tags',
            path: '/blog/tags'
          }))
          .use(categories({
            handle: 'category',
            path: 'categories/:category.html'
          }))
          .use(function(files, metalsmith, done) {
            for (var path in files) {
              var file = files[path];

              if (file.tag) {
                file.title = 'Articles about "' + file.tag + '"';
              }

              file.categories = metalsmith.metadata().env.categories;

              if (file.isCategory) {
                var c = file.categories[file.category];

                file.title = c.title || c.name || file.category;
              }
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
            title: 'The Official Onsen UI Framework Blog',
            url: 'http://onsen.io/'
          }
        }))
        .use(branch('!rss.xml')
          .use(currentPath())
          .use(layouts({
            engine: 'eco',
            directory: './src/layouts/',
            default: lang === 'ja' ? 'blog_ja.html.eco' : 'blog.html.eco'
          }))
        )
        .use(assets({
          source: lang === 'ja' ? './blog_ja/content/' : './blog/content/',
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
