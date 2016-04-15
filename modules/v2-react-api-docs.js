var async = require('async');
var globby = require('globby');
var fs = require('fs');
var nodePath = require('path');
var basePath = nodePath.resolve(__dirname + '/../');
var jsdoc = require('jsdoc-api')

function glob(src) {
  return new Promise(function(resolve, reject) {
    globby(src, function(error, paths) {
      return error ? reject(error) : resolve(paths);
    });
  });
}

function getTemplatePath(path) {
  return nodePath.resolve(basePath + '/src/misc/react-reference.html');
}

function parseDocComment(doc) {
  var ret = {};
  for (var key in doc) {
    if (typeof doc[key] === 'object' && doc[key] !== null) {
      ret[key] = parseDocComment(doc[key]);
    } else if (typeof doc[key] === 'string') {
      switch (key) {
        case 'description':
        case 'docblock':

var src = [
'/**',
doc[key],
'*/',
'function dummy(){}'
].join("\n");
var r = jsdoc.explainSync({ source: src })
//console.log(JSON.stringify(r, null, "  "));


          /*
          var value = doc[key], match;
          doc[key] = {};
          while ((match = /@(\S+)[\s\n]+([^@]+)/m.exec(value)) !== null) {
            ret[match[1]] = match[2].trim();
            value = value.replace(match[0], '')
          }
          if (value.trim().length > 0) {
            ret[key] = value;
          }
          */
          break;
        default:
          ret[key] = doc[key];
      }
    } else {
      ret[key] = doc[key];
    }
  }
  return ret;
}

function generateAPIDocument(metalsmith, docPath, extension) {
  return new Promise(function(resolve, reject) {
    metalsmith.readFile(getTemplatePath(docPath), function(error, file) {
      if (error) {
        return reject(error);
      }

      var doc = parseDocComment(JSON.parse(fs.readFileSync(docPath)));

      file.doc = doc;
      file.name = nodePath.basename(docPath, nodePath.extname(docPath));
      file.title = file.name;
      file.name = file.name;
      file.original = doc.original;
      file.componentCategory = doc.category;
      file.is2 = true;
      file.extension = "react";

      resolve({doc: doc, file: file});
    });
  });
}

module.exports = function(lang) {

  return function(files, metalsmith, done) {
    glob([
      basePath + '/dist/v2/react-onsenui/docs/*.json'
    ]).then(function(paths) {
      return Promise.all(paths.map(function(path) {
        return generateAPIDocument(metalsmith, path).then(function(result) {
          files['v2/reference/react/' + result.file.name + '.html'] = result.file;
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
