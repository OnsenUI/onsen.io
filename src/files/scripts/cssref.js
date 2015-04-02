
$(function() {
  var showcases = $('.css-component-showcase');
  var showcaseFrame = $('.css-component-showcase-frame-wrapper');

  function adjust() {
    showcases.css({
      transform: 
        'translateY(-' +
        (Math.round(showcases.height() / 2) + 1) +
        'px)'
    });
    showcaseFrame.css({
      transform:
        'translateY(-' +
        Math.round(showcaseFrame.height() / 2) +
        'px)'
    });
  }

  adjust();

  var timeoutId = null;
  $(window).on('resize', function() {
    if (!timeoutId) {
      timeoutId = setTimeout(function() {
        adjust();
        timeoutId = null;
      }, 80);
    }
  });
});

$(function() {
  var sections = $('.css-component').toArray();
  var showcases = $('.css-component-showcase');
  var padding = 30;

  var timeoutId = null;
  $(window).scroll(function() {
    if (!timeoutId) {
      timeoutId = setTimeout(function() {
        update();
        timeoutId = null;
      }, 80);
    }
  });
  update();
  
  function update() {
    var scrolled = window.scrollY + Math.round($(window).height() / 3);

    var currentSections = sections.filter(function(section) {
      section = $(section);

      if (typeof section.offset() == 'undefined') {
        return false;
      }

      var offset = section.offset();
      offset.bottom = offset.top + section.height();

      if (scrolled + padding >= offset.top && scrolled - padding <= offset.bottom) {
        var showcase = $(' > .css-component-showcase', section[0]);
        return showcase.length > 0;
      }

      return false;
    });

    currentSections.sort(function(section) {
      return Math.abs($(section).offset().top - scrolled);
    });

    showcases.hide();

    if (currentSections.length == 0) {
      return;
    }

    $('> .css-component-showcase', currentSections[0]).first().show();
  }
});
