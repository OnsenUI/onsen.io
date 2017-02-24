var fs = require('fs');
var validate = require('metalsmith-validate');
var gutil = require('gulp-util');
var argv = require('yargs').argv;

var projectRoot = '../../';

var logAlways = function(...args) {
  gutil.log(...args);
}
var logIfVerbose = function(...args) {
  if (argv.verbose) { gutil.log(...args); }
}
var logIfNotVerbose = function(...args) {
  if (!argv.verbose) { gutil.log(...args); }
}

module.exports = function() {
  // Validate files with layout metadata
  var validateFilesWithlayoutMetadataPath = function(files, metalsmith, done) {
    var layoutsDirectory = './src/layouts/';
    var default_ = 'default.html.eco'; // Note: `default` is a reserved keyword of ECMAScript

    logIfNotVerbose(gutil.colors.blue('If you want more detailed log of validation, specify --verbose option.'));
    Object.keys(files).forEach(function(filePath) {
      logIfVerbose(gutil.colors.blue('Validating ' + filePath + '...'));

      // Retrieve `layout` property of the target file
      var layout = files[filePath].layout;

      // Check if `layout` property is set
      if (layout == null) {
        logIfVerbose(gutil.colors.yellow('  ' + '`layout` is not specified.'));
        logIfVerbose(gutil.colors.yellow('  ' + 'Skipped.'));
        return;
      } else {
        logIfVerbose(gutil.colors.green('  ' + 'Layout: ') + gutil.colors.magenta(layout));
      }

      var layoutMetadataName = layout + '.metadata.js';
      var layoutMetadataPath = layoutsDirectory + layout + '.metadata.js';

      // Check if the layout metadata of the specified `layout` exists
      if (fs.existsSync(layoutMetadataPath)) {
        logIfVerbose(gutil.colors.green('  ' + 'Using ' + layoutMetadataName + '...'));

        // Validate the target file with the layout metadata of the specified layout
        validate( require(projectRoot + layoutMetadataPath) )(
          (function(){ // Filter properties of `files`
            var paramFiles = {};
            paramFiles[filePath] = files[filePath];
            return paramFiles;
          })(),
          metalsmith,
          function(err) { // called when validation is finished or aborted
            if (err != null) { // Catch errors which metalsmith-validate throws
              logAlways(gutil.colors.red('  ' + err.message));
            } else {
              logIfVerbose(gutil.colors.green('  This file is valid!'));
            }
            done();
          }
        );
      } else {
        logAlways(gutil.colors.yellow('  ' + layoutMetadataName + ' does not exist in ' + layoutsDirectory + '. Consider creating it.'));
        logIfVerbose(gutil.colors.yellow('  ' + 'Skipped.'));
        done();
      }
    });
  }

  // Return a Metalsmith plugin which validates files
  return function(files, metalsmith, done) {
    validateFilesWithlayoutMetadataPath(files, metalsmith, done);
  }
}
