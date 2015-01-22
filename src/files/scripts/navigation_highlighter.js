
(function() {
  var links = $('#content-info a');
  var sections = [];
  var linkMap = {};
  var toc1Items = $('.toc-1-item');

  var scrollWrapper = document;
  var offset = 200;

  if (links.length > 0) {
    prepare();
    setTimeout(update, 400);
    scrollWrapper.addEventListener('scroll', queueUpdate, true);
  }

  var queued = false;
  function queueUpdate() {
    console.log("a");
    if (!queued) {
      queued = true;
      setTimeout(function() {
        update();
        queued = false;
      }, 80);
    }
  }

  function update() {
    console.log("b");
    var scrolled = window.scrollY + 50;

    for (var i = sections.length - 1; i >= 0; i--) {
      var section = sections[i];
      if (typeof section.offset() == 'undefined') {

      }
      var position = section.offset().top;
      
      if (scrolled > position) {
        var id = '#' + section.attr('id');
        links.removeClass('current');
        toc1Items.removeClass('toc-item-open');
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
