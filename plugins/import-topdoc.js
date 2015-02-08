
var fs = require('fs');
var cssParse = require('css').parse;
var yaml = require('js-yaml');
var extend = require('extend');

module.exports = function(lang) {
  var cssPath = __dirname + '/../OnsenUI/build/css/onsen-css-components.css';

  return function(files, metalsmith, done) {
    var css = fs.readFile(cssPath, {encoding: 'utf8'}, function(error, data) {
      if (error) {
        throw error;
      }

      metalsmith.metadata().cssDocs = parse(data.toString('utf8'));
      done();
    });
  }
};

function parse(css) {
  var lines = css.replace(/\r/mg, '').split(/\n/g);
  var parseResult = cssParse(css);

  return parseResult.stylesheet.rules.filter(function(rule) {
    return rule.type === 'comment' && identify(rule.comment.split(/\n/)[0] || '');
  }).map(function(rule, index, rules) {
    var nextRule = rules[index + 1];
    var css = nextRule
      ? lines.slice(rule.position.end.line, nextRule.position.start.line - 1).join('\n')
      : lines.slice(rule.position.end.line).join('\n');

    var text = normalizeText(rule.comment.split(/\n/g).slice(1).join('\n'));

    return {
      text: text,
      yaml: yaml.safeLoad(text),
      css: css,
      markup: parseMarkup(text),
      position: rule.position
    };
  });
};

function normalizeText(str) {
  return str.replace(/\n *\*/g, '\n');
}

function identify(firstLine) {
  return firstLine.match(/^ *topdoc *$/);
}

function parseMarkup(comment) {
  var markup = comment;
  markup = markup.substring(markup.search(/markup:/) + 7);

  var commentEnd = markup.search(/\s\w+:/);
  commentEnd = commentEnd >= 0 ? commentEnd : markup.length;
  markup = markup.substring(1, commentEnd);

  var indent = markup.substring(0, markup.search(/\S/));
  markup = markup.split('\n' + indent).join('\n').trim();

  return markup;
}
