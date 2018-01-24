var fs = require('fs');
var nodePath = require('path');
var basePath = nodePath.resolve(__dirname + '/../');

module.exports = function() {

  function extract(string, regex) {
    return ((string.match(regex) || [])[1] || '');
  }

  function generateTutorialText(doc) {
    if (doc.tutorial) {
      var tutorialPath = basePath + '/dist/tutorial/tutorial/' + doc.tutorial + '.html';
      tutorialPath = tutorialPath.replace('Reference', 'reference');

      if (fs.existsSync(tutorialPath)) {
        const tutorialHTML = fs.readFileSync(tutorialPath, (html, err) => {
          if (err) console.error(err);
          return html;
        }).toString();
        doc.tutorialText = extract(tutorialHTML, /<\/html>\s*<!--.*\n([\s\S]*)-->/).trim();
      }
    }

    return doc;
  }

  return function(files, metalsmith, done) {
    setImmediate(done);
    Object.keys(files).forEach(key => {
      const file = files[key];
      if (file.doc) {
        file.doc = generateTutorialText(file.doc);
      }
    });
  }
}
