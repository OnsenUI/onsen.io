(function(){
  // Redirect rules (the higher, the more prioritized)
  var redirectRules = [
    // Old Onsen UI docs URLs (Used in ~2017/06/23)
    { langs: ['en', 'ja'],  from: /^\/v2\/docs\/guide\/js(\/(index\.html)?)?$/,
                            to: '/v2/guide/' },
    { langs: ['en', 'ja'],  from: /^\/v2\/docs\/guide\/(react|angular1|angular2|vue)(\/(index\.html)?)?$/,
                            to: '/v2/guide/$1/' },
    { langs: ['en', 'ja'],  from: /^\/v2\/docs\/(js|react|angular1|angular2|vue)\/(.*)$/,
                            to: '/v2/api/$1/$2' },
    { langs: ['en', 'ja'],  from: /^\/v2\/docs\/css\.html$/,
                            to: '/v2/api/css.html' },
    { langs: ['en', 'ja'],  from: /^\/v2\/docs\/(js|react|angular1|angular2|vue)\.html$/,
                            to: '/v2/api/$1/' },
    { langs: ['en', 'ja'],  from: /^\/v2\/docs\/.*$/,
                            to: '/v2/guide/' },
    { langs: ['en', 'ja'],  from: /^\/v2\/$/,
                            to: '/v2/guide/' },
    { langs: ['en', 'ja'],  from: /^\/v2\/api\/$/,
                            to: '/v2/api/js/' },
    { langs: ['en', 'ja'],  from: /^\/v1\/$/,
                            to: '/v1/guide.html' },
    { langs: ['en', 'ja'],  from: /^\/v1\/reference\/$/,
                            to: '/v1/reference/javascript.html' },
    { langs: ['en', 'ja'],  from: /^\/getting-started(\/(index\.html)?)?$/,
                            to: '/v2/guide/' },

    // Other old URLs
    { langs: ['en', 'ja'],  from: /^\/v2\/guide\/customizing-css-components\.html$/,
                            to: '/v2/guide/theming.html' },
  ];

  // Convert `redirectRules` to the following format (metalsmith-redirect format):
  //
  // {
  //   "en": [
  //     { from: /regex/, to: '/path/to/destination' },
  //     { from: /regex/, to: '/path/to/destination' },
  //     // ...
  //   ],
  //   "ja": [
  //     { from: /regex/, to: '/path/to/destination' },
  //     { from: /regex/, to: '/path/to/destination' },
  //     // ...
  //   ],
  // }
  var formattedRedirectRules = {};
  redirectRules.forEach(function(rule){
    rule.langs.forEach(function(lang){
      if (!formattedRedirectRules.hasOwnProperty(lang)) { formattedRedirectRules[lang] = []; }

      formattedRedirectRules[lang].push(
        { from: rule.from, to: rule.to }
      );
    });
  });
  
  var BreakException = {}; // dirty hack to perform `break;` in Array#forEach
  try {
    var lang = window.SITE_ENV.lang;

    // Redirect based on the rules
    formattedRedirectRules[lang].forEach(function(rule){
      if (window.location.pathname.match(rule.from)) {
        var destinationPathname = window.location.pathname.replace(rule.from, rule.to);

        window.location.replace(
          window.location.protocol
          + '//'
          + window.location.host
          + destinationPathname
          + window.location.hash
        );
        throw BreakException;
      }
    });
  } catch (e) {
    if (e !== BreakException) throw e;
  }
})();
