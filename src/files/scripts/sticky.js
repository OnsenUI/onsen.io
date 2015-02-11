$(function() {
  var sticked = $('.content-info');
  var elementTop = sticked.offset().top;
  var footerHeight = $('.footer-container').height();

  $(window).scroll(update);
  
  function update() {
    var scrollTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      documentHeight = $(window.document).height();

    if (scrollTop > elementTop) {
      if (scrollTop > documentHeight - windowHeight - footerHeight) {
        sticked.removeClass('content-info-fixed');
        sticked.addClass('content-info-bottom');
        sticked.css({
          top: (documentHeight - windowHeight - footerHeight) + 'px'
        });
      } else {
        sticked.removeClass('content-info-bottom');
        sticked.addClass('content-info-fixed');
        sticked.attr('style', '');
      } 
    } else {
      sticked.removeClass('content-info-bottom content-info-fixed');
      sticked.attr('style', '');
    }
  }
});

