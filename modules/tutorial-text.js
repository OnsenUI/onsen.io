var fs = require('fs');
var nodePath = require('path');
var basePath = nodePath.resolve(__dirname + '/../');

module.exports = function(lang) {

  function extract(string, regex) {
    return ((string.match(regex) || [])[1] || '');
  }

  function generateTutorialText(doc) {
    if (doc.tutorial) {
      var tutorialPath = basePath + '/dist/playground/tutorial/' + doc.tutorial + '.html';
      tutorialPath = tutorialPath.replace('Reference', 'reference');

      if (fs.existsSync(tutorialPath)) {
        const tutorialHTML = fs.readFileSync(tutorialPath);
        if (tutorialHTML === undefined) {
          throw("Couldn't read tutorial text of " + tutorialPath);
        }

        var getDocs = function(lang) {
          var re = new RegExp(`</html>[.\\s\\S]*?<!--.*?${lang ? `lang=${lang}` : ''}.*?\\s*?\\n([\\s\\S]*?)-->`);
          return extract(tutorialHTML.toString(), re).trim();
        };

        var docs = getDocs(lang);
        if (!docs) {
          docs = getDocs();
        }

        doc.tutorialText = docs;
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
