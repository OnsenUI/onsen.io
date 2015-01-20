
(function() {
  var links = $('#content-info a');
  var sections = [];
  var linkMap = {};

  var scrollWrapper = document;
  var offset = 200;

  prepare();
  setTimeout(update, 1000);
  scrollWrapper.addEventListener('scroll', update, true);

  function update() {
    var scrolled = window.scrollY + 50;

    for (var i = sections.length - 1; i >= 0; i--) {
      var section = sections[i];
      if (typeof section.offset() == 'undefined') {

      }
      var position = section.offset().top;
      
      if (scrolled > position) {
        var id = '#' + section.attr('id');
        links.removeClass('current');
        $('.toc-1-item').removeClass('toc-item-open');
        linkMap[id].link.addClass('current');
        $(linkMap[id].link.parents('.toc-1-item')[0]).addClass('toc-item-open');
        return;
      }
    };
  }

  function prepare() {
    for (var i = 0; i < links.length; i++) {
      var link = $(links[i]);
      var id = link.attr('href');
      try {
        var section = $(id);
        if (section) {
          sections.push(section);
          linkMap[id] = {};
          linkMap[id].link = link;
        }
      } catch (e) {
        // ignore
      }
    }
  }

})();
