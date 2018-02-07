// side menu highlight for API pages
(function() {
  var mainId = window.location.pathname;
  var link = $('a[href="' + mainId + '"]');
  link.addClass('current');
  link.parent('li').addClass('toc-item-open');
})();
