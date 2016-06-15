
var md5 = require('MD5');

module.exports = function(language, isStaging) {
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
    },
    masa: {
      name: 'Masa Tanaka',
      email: 'masahiro@asial.co.jp',
      url: 'http://www.asial.co.jp/en/',
      gravator: '0b0ed6f4c5962b764d9bdb0ade4aa7ae'
    },
    fran: {
      name: 'Fran Dios',
      email: 'fran@asial.co.jp',
      url: 'http://frandiox.com/en/',
      image: '/blog/content/images/2015/Feb/yo2.jpg'
    },
    andi: {
      name: 'Andi Pavllo',
      email: 'andi@asial.co.jp',
      image: '/blog/content/images/2015/Feb/1423814226357.jpg'
    },
    kruy: {
      name: 'Kruy Vanna',
      email: 'kruy@asial.co.jp'
    },
    onsen: {
      name: 'Onsen UI Team',
      url: 'https://onsen.io',
      gravator: 'e7c2e1cc42c38f0fe0685749d172e8ab'
    },
    moongift: {
      name: 'Atsushi Nakatsugawa',
      gravator: '4cafe6a1c6287d64d7252279eeeffa94'
    },
    takuya: {
      name: 'Takuya Watanabe',
      gravator: '7ff040f6fd196a1dbffaea6572095969'
    },
    hosoi: {
      name: 'Kazuho Hosoi',
      gravatar: 'a963b1289748255706b7d630b5e6514f'
    },
    una: {
      name: 'Una Softic',
      email: 'una.softic@gmail.com'
    },
    patrick: {
      name: 'Patrick Klitzke',
      email: 'patrick@asial.co.jp'
    },
    bryan: {
      name: 'Bryan Ellis',
      gravator: '12e050bf226a74ef0c65fe0a637f6a31'
    },
    konstantin: {
      name: 'Konstantin Dinev',
      gravator: '31893df4323fac99458ed86784e25a77'
    },
    atsushi: {
      name: '中津川篤司',
    },
    ryoichi: {
      name: 'Ryoichi Tsukada',
    },
    keiji: {
      name: 'Keiji Odagawa',
    }
  };

  for (author in authors) {
    if (authors[author].email && (!authors[author].gravator || !authors[author].image)) {
      authors[author].gravator = md5(authors[author].email.toLowerCase());
    }

    authors[author].id = author;
  }

  var categories = {
    en: {
      showcase: {
        name: 'Showcase',
        title: 'Showcase of apps made with Onsen UI and Monaca'
      },
      announcement: {
        name: 'Announcements',
        title: 'Announcements of new features in Monaca and Onsen UI'
      },
      development: {
        name: 'Development',
        title: 'Articles about hybrid app development, HTML5, CSS and more'
      },
      tutorial: {
        name: 'Tutorial',
        title: 'Tutorials on how to create hybrid mobile apps, web apps, HTML5, CSS and JavaScript'
      }
    },

    ja: {
      'ニュース': {
        name: 'ニュース',
        title: 'MonacaとOnsen UIに関するニュース'
      },
      '技術情報': {
        name: '技術情報',
        title: 'ハイブリッドアプリ開発、HTML5、CSSなどに関する技術情報'
      },
      'イベント情報': {
        name: 'イベント情報',
        title: 'MonacaとOnsen UIに関するイベント情報'
      },
      '事例紹介': {
        name: '事例紹介',
        title: 'MonacaとOnsen UIの活用事例紹介'
      }
    }
  };



  var env = {
    authors: authors,
    categories: categories[language],

    en: {
      url: 'https://onsen.io',
      title: 'Onsen UI: Beautiful HTML5 Hybrid Mobile App UI Framework',
      description: 'Make beautiful hybrid mobile apps using HTML5, CSS and JavaScript. Works with React, Angular 1 &amp; 2 and Web Components. Both Material Design and Flat Design.',
      keywords: '',
      twitter: 'Onsen UI is a Custom Elements-Based HTML5 UI Framework for Building Your Mobile Front End.'
    },

    ja: {
      url: 'http://ja.onsen.io',
      title: 'HTML5モバイルアプリをもっと速く、もっと美しく Onsen UI',
      description: 'Develop awesome looking and high performance HTML5 mobile apps with Onsen framework and UI components. Provides AngularJS and jQuery bindings.',
      keywords: '',
      twitter: 'Onsen UIでHTML5モバイルアプリをもっと速く、美しく。'
    }
  };

  return {
    env: env,
    rootUrl: '/',
    lang: language,
    isStaging: isStaging,
    site: env[language],

    framework: {
      displayName: 'Onsen UI',
      codeName: 'ons',
      version: require('./dist/v2/OnsenUI/package').version
    }
  };
};
