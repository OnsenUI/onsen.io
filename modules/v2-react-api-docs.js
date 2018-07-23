
var async = require('async');
var globby = require('globby');
var fs = require('fs');
var nodePath = require('path');
var basePath = nodePath.resolve(__dirname + '/../');
var jsdoc = require('jsdoc-api')
var mkdirp = require('mkdirp');

function glob(src) {
  return new Promise(function(resolve, reject) {
    globby(src, function(error, paths) {
      return error ? reject(error) : resolve(paths);
    });
  });
}

function getTemplatePath(path) {
  return nodePath.resolve(basePath + '/src/misc/item-reference.html');
}

function parseDocComment(componentName, doc) {
  var ret = {};

  for (var key in doc) {
    if (typeof doc[key] === 'object' && doc[key] !== null) {
      ret[key] = parseDocComment(componentName, doc[key]);
    } else if (typeof doc[key] === 'string') {
      switch (key) {
        case 'description':
        case 'docblock':

          if (doc[key].trim().length === 0) break;

          // Create a dummy function and parse
          var src = [
            '/**',
            doc[key].replace(/@tutorial/, '@tut'),
            '*/',
            'function dummy(){}'
          ].join("\n");

          try {
            var docgen = jsdoc.explainSync({ source: src })[0]

            // Parse tags
            if (docgen.tags && docgen.tags.length > 0) {
              for (var i = 0; i < docgen.tags.length; i++) {
                ret[docgen.tags[i].title] = docgen.tags[i].value;
              }
            }

            // Parse others
            if (docgen.name === 'dummy') {
              delete docgen.name;
            }

            var addIfUnset = function (property) {
              if (!ret.hasOwnProperty(property)) {
                ret[property] = docgen[property];
              }
            }
            addIfUnset('description');
            addIfUnset('examples');
            addIfUnset('tutorial');
            addIfUnset('name');
            addIfUnset('type');
            addIfUnset('defaultValue');
            addIfUnset('returns');
            addIfUnset('params');
          } catch (e) {
            console.error("Error parsing " + componentName);
            console.error(e);
            ret[key] = doc[key];
          }

          break;
        default:
          if (typeof ret[key] === "undefined") ret[key] = doc[key];
      }
    } else {
      if (typeof ret[key] === "undefined") ret[key] = doc[key];
    }
  }

  return ret;
}

function generateAPIDocument(metalsmith, docPath, extension) {

  var cacheDir = metalsmith.path('.reactdoc');
  if (!fs.existsSync(cacheDir)) {
    mkdirp.sync(cacheDir);
    console.log("Generating React doc cache at: " + cacheDir);
  }

  return new Promise(function(resolve, reject) {
    metalsmith.readFile(getTemplatePath(docPath), function(error, file) {
      if (error) {
        return reject(error);
      }

      var componentName = nodePath.basename(docPath, nodePath.extname(docPath))
      try {
        var cacheFile = cacheDir + '/' + componentName;
        if (fs.existsSync(cacheFile)) {
          var doc = JSON.parse(fs.readFileSync(cacheFile));
        } else {
          var doc = parseDocComment(componentName, JSON.parse(fs.readFileSync(docPath)));
          fs.writeFileSync(cacheFile, JSON.stringify(doc));
        }
      } catch (e) {
        console.log("Error parsing file: " + docPath);
        console.log(e)
      }

      // Remove unnecessary methods
      if (doc.methods) {
        for (m in doc.methods) {
          if (Array.isArray(doc.methods[m].returns)) {
            doc.methods[m].returns = doc.methods[m].returns[0];
            doc.methods[m].returns.type.name = doc.methods[m].returns.type.names[0];
          }
          if (!doc.methods[m].description) {
            delete doc.methods[m];
          }
        }
      }


      file.doc = doc;
      file.name = componentName;
      file.title = file.name + " React Component - Onsen UI Framework";
      file.h1 = "<strong>" + file.name + "</strong> React Component";
      file.original = doc.original;
      file.componentCategory = doc.category;
      file.is2 = true;
      file.extension = "react";
      file.framework = "react";
      file.version = "v2";

      file.ownedMethods = doc.methods || [];
      file.ownedAttributes = doc.attributes || [];
      file.ownedEvents = doc.events || [];

      resolve({doc: doc, file: file});
    });
  });
}

module.exports = function(lang) {

  return function(files, metalsmith, done) {
    glob([
      basePath + '/dist/v2/OnsenUI/bindings/react/docs/*.json'
    ]).then(function(paths) {
      return Promise.all(paths.map(function(path) {
        return generateAPIDocument(metalsmith, path).then(function(result) {
          files['v2/api/react/' + result.file.name + '.html'] = result.file;
          if (result.doc.original) {
            files['v2/api/react/' + result.file.name + '.html'].originalFile = files['v2/api/js/' + result.doc.original + '.html'];
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
