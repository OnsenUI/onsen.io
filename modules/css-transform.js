var postcss = require('postcss');
var fs = require('fs');

var cssPath = __dirname + '/../OnsenUI/build/css/onsen-css-components.css';

var transform = postcss(function(css) {
  css.eachRule(function (rule) {
    if (rule.selector === 'body' || rule.selector === 'html') {
      rule.removeSelf();
    } else {
      rule.selector = '.ons-css ' + rule.selector;
    }
  });
});


module.exports = function(lang) {
  return function(files, matalsmith, done) {
    fs.readFile(cssPath, function(error, css) {
      if (error) {
        throw error;
      }

      var header = '/* NOTE: This css file is NOT original onsen-css-components.css */\n';
      var file = {};
      file.contents = new Buffer(header + transform.process(css.toString('utf8')).css);
      files['reference/onsen-css-components.css'] = file;

      done();
    });
  };
};
