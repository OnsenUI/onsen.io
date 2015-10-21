
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

        if (minimatch(path, '**/directive/*.json')) {
          templatePath = 'src/misc/element-reference.html';
        } else if (minimatch(path, '**/object/*.json')) {
          templatePath = 'src/misc/object-reference.html';
        } else {
          throw new Error();
        }

        metalsmith.readFile(__dirname + '/../' + templatePath, function(error, file) {
          if (error) {
            throw error;
          }

          file.api = json;
          file.title = json.name;
          file.name = json.name;
          file.componentCategory = json.categories

          var name = '2/reference/' + json.name + '.html';
          files[name] = file;

          done();
        });

      }, done);

    });
  }
};
