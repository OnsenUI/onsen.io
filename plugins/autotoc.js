
var jsdom = require('jsdom');
var async = require('async');

var TocItem = function() {
  TocItem.prototype.init.apply(this, arguments);
};

TocItem.prototype = {
  /**
   * @param {Object} [params]
   * @param {String} [params.id]
   * @param {String} [params.text]
   */
  init: function(params) {
    params = params || {};
    this.id = params.id || '';
    this.text = params.text || '';
    this.children = [];
    this.parent = null;
  },
  /**
   * @param {TocItem} tocItem
   */
  add: function(tocItem) {
    if (tocItem.parent) {
      throw 'tocItem.parent exists';
    }
    tocItem.parent = this;
    this.children.push(tocItem);
  },

  toJSON: function() {
    return {
      id: this.id,
      text: this.text,
      children: this.children
    };
  }
};

module.exports = function() {
  return function(files, metalsmith, done) {
    var fileList = Object.keys(files).map(function(path) {
      return files[path]
    });

    async.each(fileList, function(file, done) {
      if (!file.autotoc) {
        done();
      } else {
        var contents = file.contents.toString('utf8');
        jsdom.env({
          html: '<html><body>' + contents + '</body></html>',
          feature: {QuerySelector: true},
          done: function(error, window) {
            if (error) {
              throw error;
            }

            var headers = window.document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headers = Array.prototype.slice.call(headers);

            var root = new TocItem();
            var toc = root;
            var lastLevel = 0;

            headers.forEach(function(header) {
              var id = header.id;
              var text = header.innerHTML;
              var level = parseInt(header.tagName.match(/^h([123456])$/i)[1], 10);

              while (level != 1 + lastLevel) {
                if (level < 1 + lastLevel) {
                  toc = toc.parent;
                  lastLevel--;
                } else if (level > 1 + lastLevel) {
                  var emptyToc = new TocItem();
                  toc.add(emptyToc);
                  toc = emptyToc;
                  lastLevel++;
                }
              }

              var newToc = new TocItem({
                text: header.innerHTML,
                id: header.id
              });

              toc.add(newToc);
              toc = newToc;
              lastLevel = level;
            });

            file.toc = root.children;
            done();
          }
        });
      }
    }, function() {
      done();
    });
  };
};
