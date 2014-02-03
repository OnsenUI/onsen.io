// theme switcher
$(function() {
    var themes = {
      onsen : 'lib/onsen/css/topcoat-mobile-onsen-blue.css',
      ios : 'lib/onsen/css/topcoat-mobile-onsen-ios7.css',
      android : 'lib/onsen/css/topcoat-mobile-onsen-android4_4.css'
    };

    var iframeSelector = $('ul.theme-switch-control.segment-control').data('demo-iframe-selector');
    iframeSelector = iframeSelector || 'div.fit-iphone-frame > iframe';

    $('ul.theme-switch-control.segment-control > li').click(function() {
      $('ul.theme-switch-control.segment-control > li').removeClass('current');
      $(this).addClass('current');

      var themeName = $(this).data('theme-name');
      setTimeout(function() {
        changeTheme(themeName);
      }, 200);
    });

    function changeTheme(themeName) {
      $(iframeSelector).each(function() {
        $('link[rel=stylesheet]', this.contentDocument).filter(function() {
          console.log(this.href);
          return isThemeCSSLink(this);
        }).each(function() {
          this.href = themes[themeName];
        })
      });
    }

    function isThemeCSSLink(linkElement) {
      var href = linkElement.href;
      for (var key in themes) {
        if (href.indexOf(themes[key], href.length - themes[key].length) !== -1) {
          return true;
        }
      }
      return false;
    }
});
