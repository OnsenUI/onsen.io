
var marked = require('marked');
var eco = require('eco');
var extend = require('extend');

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
    var helpers = {
      partial: function(name, params) {
        console.log(Object.keys(this));
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
          console.log(e);
          return e.toString();
        }
      },

      getPreparedTitle: function() {
        return this.title + ' | Onsen UI';
      },

      getPreparedDescription: function() {
        return this.description || this.site.description;
      },

      getPreparedKeywords: function() {
        return (this.site.keywords || []).join(', ');
      },

      fileExist: function(path) {
        return fs.existsSync(path);
      },

      hasAlternateLangPage: function() {
        var path = this.filename;
        var alternateLang = this.lang === 'en' ? 'ja' : 'en';
        return false;
      },

      getAlternateSiteURL: function() {
        return this.lang === 'en' ? 'http://onsen.io' : 'http://ja.onsen.io';
      },

      getAlternateLang: function() {
        return this.lang === 'en' ? 'ja' : 'en';
      }
    };
    extend(metalsmith.metadata(), helpers);
    done();
  };
};
