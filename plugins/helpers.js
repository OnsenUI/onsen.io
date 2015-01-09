
var marked = require('marked');
var eco = require('eco');
var extend = require('extend');
var fs = require('fs');

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});

module.exports = function() {
  return function(files, metalsmith, done) {

    for (var path in files) {
      files[path].origPath = path;
    }

    var helpers = {
      partial: function(name, params) {
        try {
          var path = metalsmith.path('src/partials', name);
          var partialContents = require('fs').readFileSync(path);
          var context = params ? extend({}, params, this) : extend({}, this);
          return eco.render(partialContents.toString('utf8'), context);
        } catch (e) {
          return e.toString();
        }
      },

      markdown: function(capture) {
        try {
          return marked(capture().toString());
        } catch(e) {
          return e.toString();
        }
      },

      getPreparedTitle: function() {
        return this.title ? this.title + ' | Onsen UI' : this.site.title;
      },

      getPreparedDescription: function() {
        return this.description || this.site.description;
      },

      getPreparedKeywords: function() {
        return this.site.keywords;
      },

      fileExist: function(path) {
        return fs.existsSync(path);
      },

      hasAlternateLangPage: function() {
        var alternateLang = this.lang === 'en' ? 'ja' : 'en';
        var alternatePath = metalsmith.source().replace(/_(en|ja)$/, '_' + alternateLang) + '/' + this.origPath;
        console.log(alternatePath);

        return fs.existsSync(alternatePath);
      },

      getAlternateLangPage: function() {
        var url = this.lang === 'en' ? 'http://ja.onsen.io' : 'http://onsen.io';
        return url + '/' + this.origPath;
      },

      getAlternateLang: function() {
        return this.lang === 'en' ? 'ja' : 'en';
      }
    };
    extend(metalsmith.metadata(), helpers);
    done();
  };
};
