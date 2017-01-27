const ancss = require('ancss');
const fs = require('fs');

module.exports = function() {
  return function(files, metalsmith, done) {
    const css = fs.readFileSync(__dirname + '/../dist/v2/OnsenUI/build/css/onsen-css-components.css', 'utf-8');
    const components = ancss.parse(css, {detect: line => line.match(/^!/)});
    metalsmith.metadata().cssReference = ancss.parse(css, {detect: line => line.match(/^!/)});
    done();
  };
};
