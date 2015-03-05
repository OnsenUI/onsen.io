
var cheerio = require('cheerio');

module.exports = function(html, length) {
  return cheerio.load('' + html).root().text().substr(0, length) + '...';
};
