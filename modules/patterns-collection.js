
var async = require('async');
var globby = require('globby');
var minimatch = require('minimatch');
var fs = require('fs');
var nodePath = require('path');
var clone = require('clone');
var helpers = require('./helpers');

module.exports = function(lang, baseDir) {
  var patternTemplatePath = nodePath.resolve(__dirname + '/../src/misc/pattern-template.html');

  return function(files, metalsmith, done) {

    metalsmith.readFile(patternTemplatePath, function(error, template) {
      if (error) {
        return done(error);
      }

      globby([
        baseDir + '/*.html',
      ], function(error, paths) {

        metalsmith.metadata().patterns = paths.map(function(path) {
          return nodePath.basename(path);
        });

        metalsmith.metadata().patterns.forEach(function(name) {
          var doc = files['patterns/pattern-' + name] = clone(template);
          doc.patternName = name;
          doc.title = 'Pattern: ' + helpers.renderPatternName(name);
          doc.html = fs.readFileSync(baseDir + '/' + name);
          doc.css = fs.readFileSync(baseDir + '/' + nodePath.basename(name, '.html') + '.css');
        });

        done();
      });
    });

  }
};
