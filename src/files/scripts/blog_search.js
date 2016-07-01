(function() {
  var searchBar;
  var searchIcon;
  var searchContainer;

  document.addEventListener("DOMContentLoaded", searchInit);

  function searchInit() {
    searchIcon = document.getElementsByClassName("blog-header-search")[0];
    searchIcon.addEventListener("click", showSearchBar);
  }

  function showSearchBar() {
    searchContainer = document.getElementsByClassName("blog-header-search-container-hidden")[0];
    searchContainer.className = "blog-header-search-container blog-header-search-container-visible";

    searchBar = document.getElementsByClassName("blog-header-search-bar-hidden")[0];

    searchBar.classList.remove("blog-header-search-bar-hidden");
    searchBar.classList.add("blog-header-search-bar-visible");

    searchBar.addEventListener("keypress", performSearch);
    searchIcon.removeEventListener("click", showSearchBar);
    searchIcon.addEventListener("click", performSearch);

    setTimeout(function() {
      document.addEventListener("click", checkOuterClick);
    }, 0);
  }

  function checkOuterClick(e) {
    if (e.target !== searchBar) {
      hideSearchBar();
    }
  }

  function performSearch(e) {
    if (searchBar.value !== "" && (e.keyCode === 13 || e.target === searchIcon)) {
        hideSearchBar();

        if (document.documentElement.classList.contains("lang-en")) {
          var baseSearchURL = "https://www.google.com/search?q=site%3Aonsen.io%2Fblog";
        } else {
          var baseSearchURL = "https://www.google.com/search?q=site%3Aja.onsen.io%2Fblog";
        }

        var searchTab = window.open(baseSearchURL + " " + searchBar.value, "_blank");
        searchBar.value = "";
        searchTab.focus();
    }
  }

  function hideSearchBar(e) {
    searchBar.classList.remove("blog-header-search-bar-visible");
    searchBar.classList.add("blog-header-search-bar-hidden");

    searchContainer.classList.remove("blog-header-search-container-visible");
    searchContainer.classList.add("blog-header-search-container-hidden");

    document.removeEventListener("click", checkOuterClick);
    searchIcon.removeEventListener("click", performSearch);
    searchIcon.addEventListener("click", showSearchBar);
  }
})();
