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

function getTemplatePath(path) {
  if (path.match(/element\/[-._a-zA-Z0-9]+?.json$/)) {
    return nodePath.resolve(basePath + '/src/misc/element-reference.html');
  } else if (path.match(/object\/[-._a-zA-Z0-9]+?.json$/)) {
    return nodePath.resolve(basePath + '/src/misc/object-reference.html');
  } else {
    throw new Error('Invalid path: ' + path);
  }
}

function getExtensionPath(path) {
  var name = nodePath.basename(path, '.json');

  if (path.match(/element\/[-._a-zA-Z0-9]+?.json$/)) {
  } else if (path.match(/object\/[-._a-zA-Z0-9]+?.json$/)) {
    return basePath + '/2/OnsenUI/build/docs/angular1-binding/' + name + '.json';
  } else {
    throw new Error('Invalid path: ' + path);
  }
}

function generateAPIDocument(metalsmith, docPath) {
  return new Promise(function(resolve, reject) {
    metalsmith.readFile(getTemplatePath(docPath), function(error, file) {
      if (error) {
        return reject(error);
      }

      var doc = JSON.parse(fs.readFileSync(docPath));

      file.doc = doc;
      file.title = doc.name;
      file.name = doc.name;
      file.is2 = true;
      file.componentCategory = doc.category;

      resolve({doc: doc, file: file});
    });
  });
}

module.exports = function(lang) {

  return function(files, metalsmith, done) {
    glob([
      basePath + '/2/OnsenUI/build/docs/element/*.json',
      basePath + '/2/OnsenUI/build/docs/object/*.json'
    ]).then(function(paths) {
      return Promise.all(paths.map(function(path) {
        return generateAPIDocument(metalsmith, path).then(function(result) {
          files['2/reference/' + result.doc.name + '.html'] = result.file;
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
