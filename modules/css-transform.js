var postcss = require('postcss');
var fs = require('fs');

var transform = postcss(function(css) {
  css.walkRules(function (rule) {
    if (rule.selector === 'body' || rule.selector === 'html') {
      rule.remove();
    } else {
      if (!(rule.parent.type === 'atrule' && rule.parent.name.match(/^(-o-|-moz-|-webkit-|-ms-)?keyframes$/))) {
        rule.selectors = rule.selectors.map(function(selector) {
          return '.ons-css ' + selector;
        });
      }
    }
  });
});

module.exports = function(lang) {
  return function(files, matalsmith, done) {
    setImmediate(done);

    var css1 = fs.readFileSync(__dirname + '/../v1/OnsenUI/build/css/onsen-css-components.css', 'utf8');
    var css2 = fs.readFileSync(__dirname + '/../v2/OnsenUI/build/css/onsen-css-components.css', 'utf8');

    var header = '/* NOTE: This css file is NOT original onsen-css-components.css. */\n';
    var file1 = {};
    var file2 = {};
    file1.contents = new Buffer(header + transform.process(css1.toString('utf8')).css);
    file2.contents = new Buffer(header + transform.process(css2.toString('utf8')).css);

    files['v1/reference/onsen-css-components.css'] = file1;
    files['v2/reference/onsen-css-components.css'] = file2;
  };
};
