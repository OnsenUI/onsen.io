
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
    metalsmith.metadata({
      rootUrl: '/',
      lang: 'ja',
      site: {
        twitter: 'hoge'
      },
      framework: {directives: []},

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
          console.log(e);
          return e.toString();
        }
      },

      getPreparedTitle: function() {
        return this.title + ' | Onsen UI';
      },

      getPreparedDescription: function() {
        return '???';
      },

      getPreparedKeywords: function() {
        return '???';
      },

      getBlock: function() {
        return {
          toHTML: function() { 
            return '???';
          }
        };
      }

    });
    done();
  };
};
