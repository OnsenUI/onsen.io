var fs = require('fs');
var validate = require('metalsmith-validate');
var gutil = require('gulp-util');

var projectRoot = '../../';

module.exports = function() {
  // Validate files with layout metadata
  var validateFilesWithlayoutMetadataPath = function(files, metalsmith, done) {
    var layoutsDirectory = './src/layouts/';
    var default_ = 'default.html.eco'; // Note: `default` is a reserved keyword of ECMAScript

    Object.keys(files).forEach(function(filePath) {
      gutil.log(gutil.colors.blue('Validating ' + filePath + '...'));

      // Retrieve `layout` property of the target file
      var layout = files[filePath].layout;

      // Check if `layout` property is set
      if (layout == null) {
        gutil.log(gutil.colors.yellow('  ' + '`layout` is not specified.'));
        gutil.log(gutil.colors.yellow('  ' + 'Skipped.'));
        return;
      } else {
        gutil.log(gutil.colors.green('  ' + 'Layout: ') + gutil.colors.magenta(layout));
      }

      var layoutMetadataName = layout + '.metadata.js';
      var layoutMetadataPath = layoutsDirectory + layout + '.metadata.js';

      // Check if the layout metadata of the specified `layout` exists
      if (fs.existsSync(layoutMetadataPath)) {
        gutil.log(gutil.colors.green('  ' + 'Using ' + layoutMetadataName + '...'));

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
              gutil.log(gutil.colors.red('  ' + err.message));
            } else {
              gutil.log(gutil.colors.green('  This file is valid!'));
            }
            done();
          }
        );
      } else {
        gutil.log(gutil.colors.yellow('  ' + layoutMetadataName + ' does not exist in' + layoutsDirectory + '. Consider creating it.'));
        gutil.log(gutil.colors.yellow('  ' + 'Skipped.'));
        done();
      }
    });
  }

  // Return a Metalsmith plugin which validates files
  return function(files, metalsmith, done) {
    validateFilesWithlayoutMetadataPath(files, metalsmith, done);
  }
}
