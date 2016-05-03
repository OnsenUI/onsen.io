
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
          var icon = null;

          if (minimatch(path, '**/directive/*.html')) {
            path = 'v1/reference/' + nodePath.basename(path);
            icon = "element";
          } else if (minimatch(path, '**/object/*.html')) {
            path = 'v1/reference/' + nodePath.basename(path);
            icon = "object";
          } else if (minimatch(path, '**/overview/*.html')) {
            path = 'v1/reference/' + nodePath.basename(path);
            icon = "object";
          } else {
            console.log(path);
          }

          files[path] = file;
          files[path].version = "v1";
          files[path].icon = icon;
          if (lang == "en") {
            files[path].title = files[path].title + " Reference - Onsen UI Framework";
            files[path].h1 = files[path].title + " Reference";
          } else {
            files[path].title = files[path].title + " リファレンス - Onsen UIフレームワーク";
            files[path].h1 = files[path].title + " リファレンス";
          }
              
          done();
        });
      }, done);
    });
  }
};
