(function() {
  var searchBar;
  var searchIcon;
  var searchContainer;

  document.addEventListener("DOMContentLoaded", searchInit);

  function searchInit() {
    searchIcon = document.getElementsByClassName("blog-header-search")[0];
    searchIcon.addEventListener("click", enableSearchBar);
  }

  function enableSearchBar() {
    searchContainer = document.getElementsByClassName("blog-header-search-container-hidden")[0];
    searchContainer.className = "blog-header-search-container blog-header-search-container-visible";

    searchBar = document.getElementsByClassName("blog-header-search-bar-hidden")[0];

    setTimeout(function() {
      searchBar.classList.remove("blog-header-search-bar-hidden");
      searchBar.classList.add("blog-header-search-bar-visible");

      document.addEventListener("click", searchClickOnSearch);
      searchIcon.removeEventListener("click", enableSearchBar);
    }, 100);
  }

  function searchClickOnSearch(e) {
    if(e.target != searchBar) {
      searchBar.className = "blog-header-search-bar blog-header-search-bar-hidden";
      searchBar.parentElement.className =  "blog-header-search-container blog-header-search-container-hidden";
      document.removeEventListener("click", searchClickOnSearch);
      searchIcon.addEventListener("click", enableSearchBar);
    }
  }
})();