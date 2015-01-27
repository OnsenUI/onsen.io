// NOTE: This plugin is cutsomized for Onsen UI Website.
// Original Code: http://labs.anthonygarand.com/sticky
(function($) {
  var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
  };

  var sticked;
  var $window = $(window);
  var $document = $(document);

  function update() {
    var scrollTop = $window.scrollTop(),
      windowHeight = $window.height(),
      documentHeight = $document.height(),
      dwh = documentHeight - windowHeight,
      extra = scrollTop > dwh ? dwh - scrollTop : 0
      elementTop = sticked.stickyWrapper.offset().top,
      etse = elementTop - sticked.topSpacing - extra;

    if (scrollTop <= etse) {
      if (sticked.currentTop !== null) {
        sticked.currentTop = null;
        sticked.stickyElement
          .css('position', '')
          .css('top', '')
          .parent()
          .removeClass(sticked.className);

        sticked.stickyElement.css('max-height', windowHeight - s.stickyElement.offset().top);
      }
    } else {
      var newTop = documentHeight - sticked.stickyElement.outerHeight() - sticked.topSpacing - sticked.bottomSpacing - scrollTop - extra;

      if (newTop < 0) {
        newTop = newTop + sticked.topSpacing;
      } else {
        newTop = sticked.topSpacing;
      }

      if (sticked.currentTop != newTop) {
        sticked.stickyElement
          .css('position', 'fixed')
          .css('top', newTop)
          .css('bottom', '0px');

        sticked.stickyElement.parent().addClass(sticked.className);
        sticked.currentTop = newTop;
      }

      sticked.stickyElement.css('max-height', windowHeight);
    }
  };

  var methods = {
    init: function(options) {
      options = $.extend(defaults, options);

      var stickyElement = $(this);
      var wrapper = $('<div></div>')
        .css({width : stickyElement.outerWidth() + "px"})
        .addClass(options.wrapperClassName);

      stickyElement.wrapAll(wrapper);

      var stickyWrapper = stickyElement.parent();

      stickyElement.css('max-height', $window.height() - stickyElement.offset().top);

      sticked = {
        topSpacing: options.topSpacing,
        bottomSpacing: options.bottomSpacing,
        stickyElement: stickyElement,
        currentTop: null,
        stickyWrapper: stickyWrapper,
        className: options.className
      };

      return this;
    }
  };

  $(window).scroll(update).resize(update);

  $.fn.sticky = function(method) {
    return methods.init.apply(this, arguments);
  };

  $(function() {
    setTimeout(update, 0);
  });
})(jQuery);
