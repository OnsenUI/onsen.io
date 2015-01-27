
var md5 = require('MD5');

module.exports = function(language) {
  var authors = {
    andreas: {
      name: 'Andreas Argelius',
      email: 'andreas@asial.co.jp',
      url: 'http://argeli.us'
    },
    anatoo: {
      name: 'Mitsunori Kubota',
      email: 'anatoo.jp@gmail.com',
      url: 'http://anatoo.jp'
    }
  };

  for (author in authors) {
    authors[author].gravator = md5(authors[author].email.toLowerCase());
  }

  var env = {
    authors: authors,

    en: {
      url: 'http://onsen.io',
      title: 'The Answer to PhoneGap UI Development | Onsen UI',
      description: 'Onsen UI from Monaca is a Custom Elements-Based HTML5 UI Framework for Building PhoneGap/Cordova Hybrid apps',
      keywords: 'phonegap, cordova, custom-elements, onsen, ui, html5, monaca, framework, mobile, app, hybrid, simple, powerful, fast',
      twitter: 'Onsen UI is a Custom Elements-Based HTML5 UI Framework for Building Your Mobile Front End.'
    },

    ja: {
      url: 'http://ja.onsen.io',
      title: 'HTML5モバイルアプリをもっと速く、もっと美しく Onsen UI',
      description: 'Onsen UI from Monaca is a Custom Elements-Based HTML5 UI Framework for Building PhoneGap/Cordova Hybrid apps',
      keywords: 'phonegap, cordova, custom-elements, onsen, ui, html5, monaca, framework, mobile, app, hybrid, simple, powerful, fast',
      twitter: 'Onsen UIでHTML5モバイルアプリをもっと速く、美しく。'
    }
  };

  return {
    env: env,
    rootUrl: '/',
    lang: language,
    site: env[language],

    framework: {
      displayName: 'Onsen UI',
      codeName: 'ons'
    },

  };
};
