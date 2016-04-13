
var async = require('async');
var globby = require('globby');
var minimatch = require('minimatch');
var fs = require('fs');
var nodePath = require('path');

module.exports = function(lang) {
  var baseDir = __dirname + '/../dist/v1/OnsenUI/build/docs/' + lang + '/';

  return function(files, metalsmith, done) {

    // OnsenUI/build/docs/{lang}/partials/directive/*.html
    // OnsenUI/build/docs/{lang}/partials/object/*.html
    // OnsenUI/build/docs/{lang}/overview/*.html
    globby([
      baseDir + 'partials/directive/*.html',
      baseDir + 'partials/object/*.html',
      baseDir + 'overview/*.html'
    ], function(error, paths) {

      if (error) {
        done(error);
        return;
      }

      async.each(paths, function(path, done) {

        metalsmith.readFile(path, function(error, file) {
          if (error) {
            throw error;
          }

          if (minimatch(path, '**/directive/*.html')) {
            path = 'v1/reference/' + nodePath.basename(path);
          } else if (minimatch(path, '**/object/*.html')) {
            path = 'v1/reference/' + nodePath.basename(path);
          } else if (minimatch(path, '**/overview/*.html')) {
            path = 'v1/reference/' + nodePath.basename(path);
          } else {
            console.log(path);
          }

          files[path] = file;
          done();
        });
      }, done);
    });
  }
};
