(function () {
  function getParams() {
    var mainId = window.location.pathname;
    var mainLink = $('.content-info a[href="' + mainId + '"]');

    var links = mainLink.parent('li').find('.toc-2-link');
    var linkMap = {};
    var sections = [];
    // main link
    linkMap['#main'] = mainLink;
    sections.push($('#main'));
    // sub links
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
