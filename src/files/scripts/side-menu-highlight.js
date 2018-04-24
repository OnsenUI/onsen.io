(function () {
  function getParams() {
    var mainId = $('.container-content h3:first-of-type')[0].id;
    var mainLink =  $('.content-info a[href$="#' + mainId + '"].toc-1-link');

    var links = mainLink.parent('li').find('a');
    var linkMap = {};
    var sections = [];

    for (var i = 0; i < links.length; i++) {
      var link = $(links[i]);
      var sectionId = '#' + link.attr('href').split('#').pop();
      var section = $(sectionId);
      sections.push(section);
      linkMap[sectionId] = link;
    }

    return { mainLink: mainLink
           , linkMap: linkMap
           , sections: sections
           };
  };

  sideMenuHighlight(getParams);
})();
