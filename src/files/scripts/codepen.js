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

    var showEmbeds = function() {
      if (CodePenEmbed.showCodePenEmbeds) {
        CodePenEmbed.showCodePenEmbeds();
      }
      else {
        CodePenEmbed._showCodePenEmbeds();
      }
    };

    if (window.CodePenEmbed) {
      showEmbeds();
    } else {
      var dom = document.createElement('script');
      $(dom)
        .attr('src', '//assets.codepen.io/assets/embed/ei.js')
        .on('load', function() {
          showEmbeds();
        });
      document.body.appendChild(dom);
      dom = null;
    }

    return false;
  });

  $(".resize-btn").on("click", function(elm) {
    var hash = $(elm.target).data("slug-hash");
    $(".codepen-content-" + hash).toggleClass("expanded");
    return false;
  });
});
