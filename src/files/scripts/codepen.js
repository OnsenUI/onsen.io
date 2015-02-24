$(function() {
  $('.codepen-resize-label').click(function(event) {
    $(event.target).parents('.codepen-wrapper').toggleClass('expanded');

    return false;
  });

  $('.codepen-loader').click(function(event) {
    $(this)
      .hide()
      .parents('.codepen-content')
      .removeClass('codepen-content-unloaded')
      .find('.codepen-unloaded')
      .addClass('codepen')
      .removeClass('codepen-unloaded');

    var dom = document.createElement('script');
    $(dom).attr('src', '//assets.codepen.io/assets/embed/ei.js');

    document.body.appendChild(dom);
    dom = null;

    return false;
  });
});
