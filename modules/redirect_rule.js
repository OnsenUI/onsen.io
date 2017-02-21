var redirectRules = [

  // Old Onsen UI 1 docs URLs (Used in ~2016/04)
  // / -> /v1/
  { langs: ['en', 'ja'], from: '/download.html', to: '/' },
  { langs: ['en', 'ja'], from: '/monaca.html', to: '/' },
  { langs: ['en', 'ja'], from: '/docs.html', to: '/v1/guide.html' },
  { langs: ['en', 'ja'], from: '/patterns.html', to: '/v1/guide.html' },
  { langs: ['en', 'ja'], from: '/guide/overview.html', to: '/v1/guide.html' },
  { langs: ['en', 'ja'], from: '/guide/getting_started.html', to: '/getting-started/' },
  { langs: ['en', 'ja'], from: '/reference/css.html', to: '/v1/reference/javascript.html' },
  { langs: ['en', 'ja'], from: '/reference/javascript.html', to: '/v1/reference/javascript.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-alert-dialog.html', to: '/v1/reference/ons-alert-dialog.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-back-button.html', to: '/v1/reference/ons-back-button.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-bottom-toolbar.html', to: '/v1/reference/ons-bottom-toolbar.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-button.html', to: '/v1/reference/ons-button.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-carousel.html', to: '/v1/reference/ons-carousel.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-col.html', to: '/v1/reference/ons-col.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-dialog.html', to: '/v1/reference/ons-dialog.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-gesture-detector.html', to: '/v1/reference/ons-gesture-detector.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-icon.html', to: '/v1/reference/ons-icon.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-if-orientation.html', to: '/v1/reference/ons-if-orientation.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-if-platform.html', to: '/v1/reference/ons-if-platform.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-keyboard-active.html', to: '/v1/reference/ons-keyboard-active.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-lazy-repeat.html', to: '/v1/reference/ons-lazy-repeat.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-list-header.html', to: '/v1/reference/ons-list-header.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-list-item.html', to: '/v1/reference/ons-list-item.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-list.html', to: '/v1/reference/ons-list.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-loading-placeholder.html', to: '/v1/reference/ons-loading-placeholder.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-modal.html', to: '/v1/reference/ons-modal.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-navigator.html', to: '/v1/reference/ons-navigator.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-notification.html', to: '/v1/reference/ons-notification.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-page.html', to: '/v1/reference/ons-page.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-popover.html', to: '/v1/reference/ons-popover.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-pull-hook.html', to: '/v1/reference/ons-pull-hook.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-row.html', to: '/v1/reference/ons-row.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-scroller.html', to: '/v1/reference/ons-scroller.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-sliding-menu.html', to: '/v1/reference/ons-sliding-menu.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-split-view.html', to: '/v1/reference/ons-split-view.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-switch.html', to: '/v1/reference/ons-switch.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-tab.html', to: '/v1/reference/ons-tab.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-tabbar.html', to: '/v1/reference/ons-tabbar.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-template.html', to: '/v1/reference/ons-template.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-toolbar-button.html', to: '/v1/reference/ons-toolbar-button.html' },
  { langs: ['en', 'ja'], from: '/reference/ons-toolbar.html', to: '/v1/reference/ons-toolbar.html' },
  { langs: ['en', 'ja'], from: '/reference/ons.html', to: '/v1/reference/ons.html' },
  { langs: ['en', 'ja'], from: '/reference/ons.orientation.html', to: '/v1/reference/ons.orientation.html' },
  { langs: ['en', 'ja'], from: '/reference/ons.platform.html', to: '/v1/reference/ons.platform.html' },

  // Old Onsen UI 2 docs URLs (Used in ~2016/04)
  // /2/ -> /v2/
  { langs: ['en'], from: '/2/', to: '/' },
  { langs: ['en'], from: '/2/reference/css.html', to: '/v2/docs/js.html' },
  { langs: ['en'], from: '/2/reference/javascript.html', to: '/v2/docs/js.html' },
  { langs: ['en'], from: '/2/reference/ons-alert-dialog.html', to: '/v2/docs/js/ons-alert-dialog.html' },
  { langs: ['en'], from: '/2/reference/ons-back-button.html', to: '/v2/docs/js/ons-back-button.html' },
  { langs: ['en'], from: '/2/reference/ons-bottom-toolbar.html', to: '/v2/docs/js/ons-bottom-toolbar.html' },
  { langs: ['en'], from: '/2/reference/ons-button.html', to: '/v2/docs/js/ons-button.html' },
  { langs: ['en'], from: '/2/reference/ons-carousel.html', to: '/v2/docs/js/ons-carousel.html' },
  { langs: ['en'], from: '/2/reference/ons-col.html', to: '/v2/docs/js/ons-col.html' },
  { langs: ['en'], from: '/2/reference/ons-dialog.html', to: '/v2/docs/js/ons-dialog.html' },
  { langs: ['en'], from: '/2/reference/ons-gesture-detector.html', to: '/v2/docs/js/ons-gesture-detector.html' },
  { langs: ['en'], from: '/2/reference/ons-icon.html', to: '/v2/docs/js/ons-icon.html' },
  { langs: ['en'], from: '/2/reference/ons-if-orientation.html', to: '/v2/docs/js/ons-if-orientation.html' },
  { langs: ['en'], from: '/2/reference/ons-if-platform.html', to: '/v2/docs/js/ons-if-platform.html' },
  { langs: ['en'], from: '/2/reference/ons-keyboard-active.html', to: '/v2/docs/js/ons-keyboard-active.html' },
  { langs: ['en'], from: '/2/reference/ons-lazy-repeat.html', to: '/v2/docs/js/ons-lazy-repeat.html' },
  { langs: ['en'], from: '/2/reference/ons-list-header.html', to: '/v2/docs/js/ons-list-header.html' },
  { langs: ['en'], from: '/2/reference/ons-list-item.html', to: '/v2/docs/js/ons-list-item.html' },
  { langs: ['en'], from: '/2/reference/ons-list.html', to: '/v2/docs/js/ons-list.html' },
  { langs: ['en'], from: '/2/reference/ons-loading-placeholder.html', to: '/v2/docs/js/ons-loading-placeholder.html' },
  { langs: ['en'], from: '/2/reference/ons-modal.html', to: '/v2/docs/js/ons-modal.html' },
  { langs: ['en'], from: '/2/reference/ons-navigator.html', to: '/v2/docs/js/ons-navigator.html' },
  { langs: ['en'], from: '/2/reference/ons-notification.html', to: '/v2/docs/js/ons-notification.html' },
  { langs: ['en'], from: '/2/reference/ons-page.html', to: '/v2/docs/js/ons-page.html' },
  { langs: ['en'], from: '/2/reference/ons-popover.html', to: '/v2/docs/js/ons-popover.html' },
  { langs: ['en'], from: '/2/reference/ons-progress-bar.html', to: '/v2/docs/js/ons-progress-bar.html' },
  { langs: ['en'], from: '/2/reference/ons-progress-circular.html', to: '/v2/docs/js/ons-progress-circular.html' },
  { langs: ['en'], from: '/2/reference/ons-pull-hook.html', to: '/v2/docs/js/ons-pull-hook.html' },
  { langs: ['en'], from: '/2/reference/ons-row.html', to: '/v2/docs/js/ons-row.html' },
  { langs: ['en'], from: '/2/reference/ons-scroller.html', to: '/v2/docs/js/ons-scroller.html' },
  { langs: ['en'], from: '/2/reference/ons-sliding-menu.html', to: '/v2/docs/js/ons-sliding-menu.html' },
  { langs: ['en'], from: '/2/reference/ons-split-view.html', to: '/v2/docs/js/ons-split-view.html' },
  { langs: ['en'], from: '/2/reference/ons-switch.html', to: '/v2/docs/js/ons-switch.html' },
  { langs: ['en'], from: '/2/reference/ons-tab.html', to: '/v2/docs/js/ons-tab.html' },
  { langs: ['en'], from: '/2/reference/ons-tabbar.html', to: '/v2/docs/js/ons-tabbar.html' },
  { langs: ['en'], from: '/2/reference/ons-template.html', to: '/v2/docs/js/ons-template.html' },
  { langs: ['en'], from: '/2/reference/ons-toolbar-button.html', to: '/v2/docs/js/ons-toolbar-button.html' },
  { langs: ['en'], from: '/2/reference/ons-toolbar.html', to: '/v2/docs/js/ons-toolbar.html' },
  { langs: ['en'], from: '/2/reference/ons.html', to: '/v2/docs/js/ons.html' },
  { langs: ['en'], from: '/2/reference/ons.orientation.html', to: '/v2/docs/js/ons.orientation.html' },
  { langs: ['en'], from: '/2/reference/ons.platform.html', to: '/v2/docs/js/ons.platform.html' },

  // Old Onsen UI docs URLs (Used in ~2016/09)
  { langs: ['en', 'ja'], from: '/getting-started.html', to: '/getting-started/' },
  { langs: ['en', 'ja'], from: '/docs/guide/angular1/', to: '/v2/docs/guide/angular1/' },
  { langs: ['en', 'ja'], from: '/docs/guide/angular2/', to: '/v2/docs/guide/angular2/' },
  { langs: ['en', 'ja'], from: '/docs/guide/js/', to: '/v2/docs/guide/js/' },
  { langs: ['en', 'ja'], from: '/docs/guide/react/', to: '/v2/docs/guide/react/' },
  { langs: ['ja'], from: '/docs/guide/vue/', to: '/v2/docs/guide/vue/' },
  { langs: ['en', 'ja'], from: '/docs/angular1.html', to: '/v2/docs/angular1.html' },
  { langs: ['en', 'ja'], from: '/docs/angular2.html', to: '/v2/docs/angular2.html' },
  { langs: ['en', 'ja'], from: '/docs/js.html', to: '/v2/docs/js.html' },
  { langs: ['en', 'ja'], from: '/docs/react.html', to: '/v2/docs/react.html' },
  { langs: ['ja'], from: '/docs/vue.html', to: '/v2/docs/vue.html' },

  // Old Onsen UI docs URLs (Used in ~2017/02)
  { langs: ['en', 'ja'], from: '/v1/guide.html', to: '/v1/guide/' },
  { langs: ['en', 'ja'], from: '/v2/docs/guide/angular1/', to: '/v2/guide/angular1/' },
  { langs: ['en', 'ja'], from: '/v2/docs/guide/angular1/from-v1-to-v2.html', to: '/v2/guide/angular1/from-v1-to-v2.html' },
  { langs: ['en', 'ja'], from: '/v2/docs/guide/angular2/', to: '/v2/guide/angular2/' },
  { langs: ['en', 'ja'], from: '/v2/docs/guide/js/', to: '/v2/guide/js/' },
  { langs: ['en', 'ja'], from: '/v2/docs/guide/react/', to: '/v2/guide/react/' },
  { langs: ['en', 'ja'], from: '/v2/docs/guide/vue/', to: '/v2/guide/vue/' },

  // Old landing page URLs
  { langs: ['en', 'ja'], from: '/angularjs', to: '/angular2' }, // ~2016/09
  { langs: ['en', 'ja'], from: '/v2/angular2.html', to: '/angular2' }, // ~2016/09
  { langs: ['en'], from: '/v2/react.html', to: '/react' }, // ~2016/10

  // Old campaign page URLs
  { langs: ['en', 'ja'], from: '/ReactEurope', to: '/react' }, // ~2016/05

  // Old subdirectories
  { langs: ['en', 'ja'], from: '/community', to: 'https://community.onsen.io/' }, // ~2016/05
  { langs: ['en', 'ja'], from: '/forum', to: 'https://community.onsen.io/' }, // ~2016/05
  { langs: ['en'], from: '/tutorial', to: 'https://tutorial.onsen.io/' }, // ~2016/10
  { langs: ['en', 'ja'], from: '/getting-started', to: '/v2/guide/' }, // ~2017/02
  { langs: ['en', 'ja'], from: '/samples', to: '/v2/guide/features.html' }, // ~2017/02

  // Invalid paths
  { langs: ['en'], from: '/v2/', to: '/' },

];

// Convert `redirectRules` to the following format:
//
// {
//   "en": {
//     "/path/to/source": "/path/to/destination",
//     "/path/to/source": "/path/to/destination",
//     // ...
//   },
//   "ja": {
//     "/path/to/source": "/path/to/destination",
//     "/path/to/source": "/path/to/destination",
//     // ...
//   },
// }
var formattedRedirectRules = {};
redirectRules.forEach(function(rule){
  rule.langs.forEach(function(lang){
    if (!formattedRedirectRules.hasOwnProperty(lang)) { formattedRedirectRules[lang] = {}; }

    formattedRedirectRules[lang][rule.from] = rule.to;
  });
});
// console.log(JSON.stringify(formattedRedirectRules));

module.exports = formattedRedirectRules;
