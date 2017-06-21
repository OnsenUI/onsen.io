var nodePath = require('path');
var marked = require('marked');
var eco = require('eco');
var extend = require('extend');
var fs = require('fs');
var moment = require('moment');
var slug = require('slug');
var escape = require('escape-html');
var stripIndent = require('strip-indent');
var htmlIntro = require('./html-intro');
var htmlExcerpts = require('./html-excerpt');

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});

var guideRenderer = new marked.Renderer();
guideRenderer.heading = function (text, level) {
  var id = slug(text.toLowerCase());
  return '<a class="header-link" href="#' +
    id + '">' +
    '<h' + level + ' id="' +
    id + '">' +
    '<span>' +
    text +
    '</span>' +
    '</h' + level + '>' +
    '</a>';
};

guideRenderer.blockquote = function(text) {
  return text.replace(/^<p/, '<p class="blockquote"');
};

var renderPatternName = function(name) {
  name = name.replace(/\.html$/, '');
  name = name.replace(/_/g, ' ');
  name = name.replace(/ (\w)/g, function(str, head) {
    return ' ' + head.toUpperCase();
  });
  name = name.substr(0, 1).toUpperCase() + name.substr(1, name.length);
  return name;
};

var renderFileContent = function(path, params) {
  try {
    var partialContents = require('fs').readFileSync(path);
    var context = params ? extend({}, params, this) : extend({}, this);
    return eco.render(partialContents.toString('utf8'), context);
  } catch (e) {
    return e.toString();
  }
};

module.exports = function() {
  return function(files, metalsmith, done) {

    for (var path in files) {
      files[path].origPath = path;
      files[path].isGuide = path.indexOf(nodePath.sep + 'guide' + nodePath.sep) >= 0;
      files[path].isAPI = path.indexOf(nodePath.sep + 'api' + nodePath.sep) >= 0;
      files[path].docName = path.split(nodePath.sep).pop().split('.').shift();
    }

    var helpers = {
      partial: function(name, params) {
        var path = metalsmith.path('src/partials', name);
        return renderFileContent.call(this, path, params);
      },

      includeGuideSection: function(name, params) {
        var path = metalsmith.path('src/documents_' + this.lang + '/v2/docs/guide/common', name);
        return renderFileContent.call(this, path, params);
      },

      renderPatternName: renderPatternName,

      slug: function(name) {
        return slug(name);
      },

      dump: function(param) {
        return JSON.stringify(param, null, '  ');
      },

      dumpKeys: function(param) {
        return JSON.stringify(Object.keys(param), null, '  ');
      },

      titlize: function(str) {
        str = '' + str;
        if (str.length <= 1) {
          return str.toUpperCase();
        }

        return str.substr(0, 1).toUpperCase() + str.substr(1, str.length);
      },

      renderBlogDate: function(date) {
        var date = moment(date);
        var result = date.format('dddd, MMMM Do, YYYY').toUpperCase();
        return result;
      },

      renderBlogDateShort: function(date) {
        var date = moment(date);
        var result = date.format('YYYY-MM-DD');
        return result;
      },

      renderCurrentYear: function() {
        return new Date().getFullYear();
      },

      getTutorialUrl: function(page, string, docs) {
        //"vanilla/Reference/carousel"
        var tutorial_url = function(match, p1, p2, p3) {
          return 'https://tutorial.onsen.io/' + page + '.html?framework=' + p1 + '&category=' + p2 + '&module=' + p3 + '&docs=' + (docs != null ? docs.toString() : 'true');
        };
        return string.replace(/(.+)\/(.+)\/(.+)/, tutorial_url);
      },

      markd: function(string) {
        try {
          string = string.toString().trim();
          if (string.indexOf("\n") == -1) {
            // Inline
            var str = marked(string);
            return str.replace(new RegExp("^<p>"), '').replace(new RegExp("</p>\n$"), '');
          } else {
            return marked(string);
          }
        } catch(e) {
          return e.toString();
        }
      },

      markdown: function(capture) {
        try {
          return marked(capture().toString(), { renderer: guideRenderer});
        } catch(e) {
          return e.toString();
        }
      },

      /**
       * highlighter
       */
      highlight: function(capture, language) {
        var code = stripIndent(capture().toString()).trim();
        var extra = language ? ' class="' + language + '"' : '';
        try {
          return '<pre class="css-component-highlight"><code' + extra + '>' +
            escape(code) + '</code></pre>';
        } catch(e) {
          return e.toString();
        }
      },

      cssShowcase: function(capture) {
        try {
          return '<div class="css-component-showcase ons-css">' +
            '<div class="page css-component-showcase-inner" style="position: static; height: 568px;">' +
            capture().toString() + '</div></div>';
        } catch(e) {
          return e.toString();
        }
      },

      /**
       * @param {Object} [options]
       * @param {String} [options.minHeight]
       * @param {Boolean} [options.wrapPage]
       * @param {Function} capture
       */
      cssExample: function(options, capture) {
        if (arguments.length <= 1) {
          capture = options;
          options = {};
        }

        var extraAttributes = '';
        if (options.minHeight) {
          extraAttributes += ' style="min-height: ' + options.minHeight + 'px"';
        }

        var wrapStart = '';
        var wrapEnd = '';
        if (options.wrapPage) {
          wrapStart = '<div class="page"><div class="page__content">';
          wrapEnd = '</div></div>';
        }

        try {
          return '<div class="css-component-example" ' +
            extraAttributes + '><div class="ons-css">' +
            wrapStart + capture().toString() + wrapEnd +
           '</div></div>\n' + this.highlight(capture, 'html');
        } catch(e) {
          return e.toString();
        }
      },

      getPreparedTitle: function() {
        var title = this.pageTitle || this.title || this.site.title;
        title = title.replace(/<(?:.|\n)*?>/gm, '');
        return title + ' - Onsen UI';
      },

      getPreparedBlogTitle: function() {
        var title = this.pageTitle || this.title || this.site.title;
        if (this.lang === 'ja') {
          var category = this.category ? this.category : "Monaca x Onsenブログ";
        } else {
          var category = this.category ? (this.category[0].toUpperCase() + this.category.slice(1)) : "Monaca x Onsen Blog";
        }

        return category + ': ' + title;
      },

      getPreparedDescription: function() {
        return this.description || this.site.description;
      },

      getPreparedKeywords: function() {
        return this.site.keywords;
      },

      /**
       * Prepare Open Graph metadata.
       */
      getPreparedOg: function() {
        var og = {
          type: this.category ? 'article' : 'website',
          site_name: this.lang === 'en' ? 'Monaca x Onsen Blog' : 'Monaca x Onsenブログ',
          image: (this.og && this.og.image) || (this.site.url + '..' + '/images/logo/onsen_with_text.png'),
          twitter: {
            card: (this.og && this.og.twitter && this.og.twitter.card) || 'summary_large_image',
            site: (this.og && this.og.twitter && this.og.twitter.site) || (this.lang === 'en' ? '@Onsen_UI' : '@Onsen_UI_ja'),
            creator: (this.og && this.og.twitter && this.og.twitter.creator) || (this.lang === 'en' ? '@Onsen_UI' : '@Onsen_UI_ja'),
          },
        };

        return og;
      },

      getShortenedTitle: function(title, len) {
        if (title.length > len) {
          return title.substr(0, len - 3).trim() + '...';
        }
        else {
          return title;
        }
      },

      fileExist: function(path) {
        return fs.existsSync(path);
      },

      renderArticleIntroAsHTML: function(html) {
        return htmlIntro(html);
      },

      renderArticleIntroAsText: function(html) {
        return htmlExcerpts(html, 200);
      },

      calculateTagFontSize: function(cloud, tag) {
        var min = 15,
          max = 28,
          items = tag.wght;

        var largest = cloud
          .map(function(tag) {
            return tag.wght;
          })
          .reduce(function(a, b) {
            return Math.max(a, b);
          });

         return (Math.log(items) / Math.log(largest) * (max - min) + min) + 'px';
      },

      hasAlternateLangPage: function() {
        if (metalsmith.metadata().isBlog) {
          return false;
        }

        var alternateLang = this.lang === 'en' ? 'ja' : 'en';
        var alternatePath = metalsmith.source().replace(/_(en|ja)$/, '_' + alternateLang) + '/' + this.origPath;

        return fs.existsSync(alternatePath);
      },

      getAlternateLangPage: function() {
        var url = this.lang === 'en' ? 'https://ja.onsen.io' : 'https://onsen.io';
        return url + '/' + this.origPath;
      },

      getAlternateLang: function() {
        return this.lang === 'en' ? 'ja' : 'en';
      },

      frameworkName: function(framework) {
        switch (framework) {
          case "js": return "JavaScript";
          case "angular1": return "AngularJS 1";
          case "angular2": return "Angular 2+";
          case "vue": return "Vue 2";
          case "react": return "React";
        }
      },

      frameworkTag: function(framework) {
        switch (framework) {
          case "js": return "js core";
          case "angular1": return "angular 1";
          case "angular2": return "angular 2";
          case "vue": return "vue";
          case "react": return "react";
        }
      },

      getExtensionDoc: function(file, framework) {
        if (!file.doc.elements) return null;
        return file.doc.elements.filter(function(v) { return v.extensionOf == framework })[0];
      },

      mapKeywords: function(message) {
        if (this.framework === 'vue') {
          return message
            .replace(/(^|<\/?|\/)(ons-)/gm, '$1v-$2')
            .replace(/(^|`|\s|\/)(ons(\.|$|`|\s))/gm, '$1$$$2')
            .replace(/ element/img, ' component')
          ;
        }

        return message;
      },

      translate: function(message, lang) {

        if (!lang){
          lang = this.lang;
        }

        if (typeof message !== 'string') {
          return message;
        }

        // Parse string
        if (message.indexOf('[' + lang + ']') == -1) {

          if (lang === 'ja') {
            // Change to English if the specified locale is not found
            lang = 'en';
          } else {
            return '';
          }
        }

        // Pull out part of string
        var regex = lang === 'en' ?  /\[en]((.|\r|\n)*)\[\/en]/m : /\[ja]((.|\r|\n)*)\[\/ja]/m;
        var match;
        if (match = regex.exec(message)) {
          return match[1];
        }

        return message;
      },

      nl2ws: function(str) {
        if (typeof str !== 'string') {
          return str;
        }

        return str.trim().split(/[\r\n]+/).join(' ');
      },

      escape: function(str) {
        if (typeof str !== 'string') {
          return str;
        }

        return escape(str);
      },

      removeOnsPrefix: function(component) {
        return component.indexOf('ons-') >= 0 ? component.slice(4) : component;
      },

      mapComponentName: function(component, framework) {
        component = this.removeOnsPrefix(component);
        framework = framework || this.framework;
        if (framework === 'react') {
          return component.charAt(0).toUpperCase() + component.slice(1).replace(/-\w/g, function($1) { return $1.charAt(1).toUpperCase(); });
        }
        if (framework === 'vue') {
          return (/^ons($|\.)/.test(component) ? '$' : 'v-ons-') + component;
        }

        return (/^ons($|\.)/.test(component) ? '' : 'ons-') + component;
      },

      componentLink: function(component) {
        var linkName = this.mapComponentName(component);
        var componentName = (/^ons($|\.)/.test(component) ? linkName : ('`<' + linkName + '>`'));
        return '[' + componentName + '](/v2/docs/' + this.framework + '/' + linkName + '.html)';
      },

      findSectionLinks: function(toc, order) {
        var index = toc.findIndex(function(item) {
          return item.order === order;
        });

        return {
          prev: index > 0 ? toc[index - 1] : null,
          next: index < toc.length - 1 ? toc[index + 1] : null
        };
      }
    };

    extend(metalsmith.metadata(), helpers);
    done();
  };
};

module.exports.renderPatternName = renderPatternName;
