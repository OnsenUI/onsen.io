
(function() {
  var links = $('#content-info a');
  var sections = [];
  var iframes = [];
  var linkMap = {};
  var currentParent;

  var scrollWrapper = document;
  var offset = 200;

  prepare();
  setTimeout(update, 1000);
  scrollWrapper.addEventListener('scroll', update, true);

  function update() {
    var scrolled = window.scrollY + 100;

    for (var i = sections.length - 1; i >= 0; i--) {
      var section = sections[i];
      if (typeof section.offset() == "undefined") {

      }
      var position = section.offset().top;
      
      if (scrolled > position) {
        var id = '#' + section.attr('id');
        links.removeClass('selected');
        linkMap[id].link.addClass('selected');
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
