var gettext = require('gettext-markdown');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var fs = require('fs');

const PLUGIN_NAME = 'gettext-markdown';

function extract() {
  var stream = through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return cb();
    }
    if (file.isBuffer()) {
      const contents = gettext.md2pot(file.path);
      file.contents = contents;
      file.path = file.path.replace('.html', '.pot');
    }
    this.push(file);
    cb();
  });
  return stream;
};

function translate() {
  var stream = through.obj(function(file, enc, cb) {
    var self = this;
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return cb();
    }
    if (file.isBuffer()) {
      var po = fs.readFileSync(file.path, 'utf-8')
      .split('\n')
      .map((line, i, lines) => {
        if (/^msgid/.test(line)) { // Check each msg
          if (i === 0 || !(/^#/.test(lines[i-1]))) { // If no comments are provided before msg
            return '# dummy comment\n' + line; // Insert dummy comment to avoid gettext-markdown bug
          }
        }
        return line;
      })
      .join('\n');
      
      gettext.po2md(file.path, po).then(function(contents) {
        var data = contents[0].data.trim();
        // Restore YAML front matter for Metalsmith by modifying output of po2md
        data = data.replace(/^title:/, '---\ntitle:'); // 
        data = data.replace(/\n\n## (layout:.+)/, '\n$1\n---');
        data = data.replace(/\n\n## (description:.+)/, '\n$1\n---');
        file.contents = new Buffer(data);
        file.path = file.path.replace('.po', '.html');
        self.push(file);
        cb();
      }, function(error) {
        // console.error(error); // Show stack trace
        console.error(error.message);
        cb();
      });
    } else {
      self.push(file);
      cb();
    }
  });
  return stream;
}

module.exports = {
    extract: extract,
    translate: translate
};
