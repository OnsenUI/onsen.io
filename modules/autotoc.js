
var jsdom = require('jsdom');
var async = require('async');
var slug = require('limax');
var kuroshiro = require('kuroshiro');

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
    this.order = params.order || 0;
    this.link = params.link || '';
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
  function generateId(header) {
    return slug(('' + kuroshiro.convert(header.textContent)).toLowerCase());
  }

  function buildTocItems(headers, origPath, order) {
    var root = new TocItem();
    var toc = root;
    var lastLevel = 2;

    headers.forEach(function(header) {
      var id = header.id;
      var text = header.innerHTML;
      var level = parseInt(header.tagName.match(/^h([123456])$/i)[1], 10);
      var link = '/' + origPath;

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
        text: header.textContent,
        id: header.id,
        link: link,
        order: order
      });

      toc.add(newToc);
      toc = newToc;
      lastLevel = level;
    });

    return root.children;
  }

  return function(files, metalsmith, done) {
    var tocGroups = {};
    var fileList = Object.keys(files).reduce(function(result, path) {
      // Filter files that needs ToC
      if (files[path].autotoc || files[path].tocGroup) {
        result.push(files[path]);

        // Group ToCs
        if (files[path].tocGroup) {
          if (!tocGroups[files[path].tocGroup]) {
            tocGroups[files[path].tocGroup] = [];
          }
          tocGroups[files[path].tocGroup.trim()].push(files[path]);
        }
      }
      return result;
    }, []);

    kuroshiro.init(function(err) {
      if (err) {
        throw 'Kuroshiro initialize failed! ' + err;
      }
      async.each(fileList, function(file, done) {
        var contents = file.contents.toString('utf8');
        jsdom.env({
          html: '<html><body>' + contents + '</body></html>',
          feature: {QuerySelector: true},
          done: function(error, window) {
            if (error) {
              throw error;
            }

            var headers = Array.prototype.slice.call(
              window.document.querySelectorAll(file.autotocSelector || 'h3, h4')
            ).map(function(header) {
              header.id = generateId(header);
              return header;
            });

            file.contents = new Buffer(window.document.body.innerHTML);
            file.toc = buildTocItems(headers, file.origPath, file.order);

            if (file.tocTitle) {
              file.toc[0].sectionTitle = file.tocTitle.trim();
            }

            done();
          }
        });
      }, function() {
        // Merge ToC depending on tocGroup
        Object.keys(tocGroups).forEach(function(group) {
          var fullToc = tocGroups[group]
            .sort(function(a, b) {
              return Number(a.order || 0) - Number(b.order || 0);
            })
            .reduce(function(result, file) {
              return result.concat(file.toc || []);
            }, []);

          tocGroups[group].forEach(function(file) {
            file.toc = fullToc;
          });
        });

        done();
      });
    });
  };
};
