var cheerio = require('cheerio');

module.exports = function(html) {
  var html = '' + html;

  if (html.match(/<!-- *more *-->/i)) {
    return html.split(/<!-- *more *-->/i)[0];
  }

  $ = cheerio.load(html);

  var removeFlag = false;
  $.root().children().each(function() {
    if (removeFlag) {
      $(this).remove();
    } else {
      if (this.name.match(/^h[1-9]$/)) {
        removeFlag = true;
        $(this).remove();
      }
    }
  });

  return $.html();
};
