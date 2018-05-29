var async = require('async');
var globby = require('globby');
var fs = require('fs');
var nodePath = require('path');
var basePath = nodePath.resolve(__dirname + '/../');

function glob(src) {
  return new Promise(function(resolve, reject) {
    globby(src, function(error, paths) {
      return error ? reject(error) : resolve(paths);
    });
  });
}

function getTemplatePath(path, extension) {
  return nodePath.resolve(basePath + '/src/misc/item-reference.html');
}

function getOwnedItems(docsContent, framework) {
  var ownedItems = [];

  if (docsContent && docsContent.length > 0) {
    for (var i = 0; i < docsContent.length; i++) {
      if ((framework === 'angular2' && (docsContent[i].extensionOf && docsContent[i].extensionOf.indexOf(framework) > -1))
        || ([ 'js', framework ].indexOf(docsContent[i].extensionOf || 'js') > -1)) {
        ownedItems.push(docsContent[i]);
      }
    }
  }

  return ownedItems;
}

function generateAPIDocument(metalsmith, docPath, extension) {
  return new Promise(function(resolve, reject) {
    metalsmith.readFile(getTemplatePath(docPath, extension), function(error, file) {
      if (error) {
        return reject(error);
      }

      var doc = JSON.parse(fs.readFileSync(docPath));
      file.doc = doc;
      file.title = doc.name;
      file.name = doc.name;
      file.original = doc.name;
      file.is2 = true;
      file.componentCategory = doc.category;
      file.extension = extension;
      file.framework = extension;
      file.version = 'v2';

      if (extension !== 'js' && doc.tutorial) {
        doc.tutorial = doc.tutorial.replace('vanilla', extension);
      }

      // Docs of different frameworks are mixed in these arrays.
      // This gets the items related to the current framework.
      file.ownedAttributes = getOwnedItems(doc.attributes, extension);
      file.ownedMethods = getOwnedItems(doc.methods, extension);
      file.ownedEvents = getOwnedItems(doc.events, extension);

      // Some fixes for Vue docs
      if (extension === 'vue') {
        if (['ons-if', 'ons-template', 'ons-gesture-detector'].indexOf(doc.name) !== -1) {
          file.extension = 'not vue';
        } else {
          file.title = file.name = doc.name = doc.name.replace(/^ons-/, 'v-ons-').replace(/^(ons)(\.|$)/gm, '$$$&');

          doc.props = file.ownedAttributes
            .reduce(function(result, attr) {
              if (!/(on-infinite-scroll|initial-index|page$|delegate)/.test(attr.name)) {
                if (/^animation/.test(attr.name)) {
                  attr.name = attr.name.replace(/-([a-z])/g, function(m, l) { return l.toUpperCase(); });
                  attr.name = 'options.' + attr.name;
                }
                attr.type = { names: [attr.type || 'Boolean'] };
                result.push(attr);
              }
              return result;
            }, []).sort(function(a, b) {
              return a.name.localeCompare(b.name);
            });

          file.ownedAttributes = [];
          doc.properties = [];
          if (docPath.indexOf("/element/") > -1) {
            file.ownedMethods = {};
          }
        }
      }

      if (extension != "js" && doc.elements) {
        file.extensionDoc = doc.elements.filter(function(v) { return v.extensionOf == extension })[0] || {};

        if (file.extensionDoc.overwrite) {
          file.extensionDoc.overwrite.split(/\s+/)
            .forEach(function(key) {
              file.doc[key] = file.extensionDoc[key];
              delete file.extensionDoc[key];
            });
        }
      }

      if (docPath.indexOf("/element/") > -1) {
        file.icon = "element";
      } else if (docPath.indexOf("/object/") > -1) {
        file.icon = "object";
      } else {
        file.icon = null;
      }

      resolve({doc: doc, file: file});
    });
  });
}

module.exports = function(lang, extension) {

  return function(files, metalsmith, done) {
    glob([
      basePath + '/dist/v2/OnsenUI/build/docs/element/*.json',
      basePath + '/dist/v2/OnsenUI/build/docs/object/*.json'
    ]).then(function(paths) {
      return Promise.all(paths.map(function(path) {
        return generateAPIDocument(metalsmith, path, extension).then(function(result) {
          var targetExtension = result.file.doc.extensionOf || 'js';

          // Only allow to include JavaScript or that target extension version
          if ([ 'js', extension ].indexOf(targetExtension) > -1) {
            files['v2/api/' + extension + '/' + result.doc.name + '.html'] = result.file;
          }
        });
      }));
    }).then(function() {
      done();
    }).catch(function(error) {
      console.error(error);
      done(error);
    });
  }
};
