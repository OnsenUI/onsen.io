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
      var po = fs.readFileSync(file.path, 'utf-8');
      gettext.po2md(file.path, po).then(function(contents) {
        var data = contents[0].data.trim();
        data = data.replace('title:', '---\ntitle:');
        data = data.replace(/\n\n## (layout:.+)/, '\n$1\n---');
        console.log(data);
        file.contents = new Buffer(data);
        file.path = file.path.replace('.po', '.html');
        self.push(file);
        cb();
      }, function(error) {
          console.log(error);
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
