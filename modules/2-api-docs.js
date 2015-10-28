
var async = require('async');
var globby = require('globby');
var minimatch = require('minimatch');
var fs = require('fs');
var nodePath = require('path');

module.exports = function(lang) {
  var baseDir = __dirname + '/../2/OnsenUI/build/docs/json/';

  return function(files, metalsmith, done) {

    // 2/OnsenUI/build/docs/json/directive/*.json
    // 2/OnsenUI/build/docs/json/object/*.json
    globby([
      baseDir + 'directive/*.json',
      baseDir + 'object/*.json'
    ], function(error, paths) {

      if (error) {
        done(error);
        return;
      }

      async.each(paths, function(path, done) {
        var json = JSON.parse(fs.readFileSync(path));

        var templatePath;

        if (path.match(/directive\/[-._a-zA-Z0-9]+?.json$/)) {
          templatePath = 'src/misc/element-reference.html';
        } else if (path.match(/object\/[-._a-zA-Z0-9]+?.json$/)) {
          templatePath = 'src/misc/object-reference.html';
        } else {
          throw new Error('Invalid path: ' + path);
        }

        metalsmith.readFile(__dirname + '/../' + templatePath, function(error, file) {
          if (error) {
            throw error;
          }

          file.doc = json;
          file.title = json.name;
          file.name = json.name;
          file.is2 = true;
          file.componentCategory = json.categories.join(', ');

          var name = '2/reference/' + json.name + '.html';
          files[name] = file;

          done();
        });

      }, done);

    });
  }
};
