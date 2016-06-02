(function() {
  document.addEventListener("DOMContentLoaded", searchInit);

  function searchInit() {
    var searchIcon = document.getElementsByClassName("blog-header-search")[0];

    searchIcon.addEventListener("click", enableSearchBar);
  }

  function enableSearchBar() {

    var searchBar = document.getElementsByClassName("blog-header-search-bar-hidden")[0];
    searchBar.className = "blog-header-search-bar-visible";

    searchBar.addEventListener("click", enlargeBar);
  }

  function enlargeBar(e) {
  }
})();