(function() {
  var activePopup, container;
  var ONE_DAY = 1000 * 60 * 60 * 24;
  var defaultPopupDelay = 15000;
  var scrollPopupDelay = 1000;
  var popup = ["popup-newsletter","popup-google-maps", "popup-material-design"];

  document.addEventListener("DOMContentLoaded", checkPopupEvent);
  document.addEventListener("scroll", onScroll);

  function canUpdateStorage(popupName, now) {
    var latestStorageUpdate = parseInt(localStorage.getItem("latestUpdate"));
    var popupExpireDate = parseInt(localStorage.getItem(popupName + ".expireDate"));

    return (!latestStorageUpdate || ((popupExpireDate - now <= 0) && (latestStorageUpdate + ONE_DAY - now <= 0)));
  }

  function setLocalStorage(popupName, now, days) {
    var expireDate =  now + (ONE_DAY * days);

    localStorage.setItem(popupName + ".expireDate", expireDate);
    localStorage.setItem("latestUpdate", now);
  }

  function showPopup(popupName, now) {
    activePopup = document.getElementById(popupName);
    container = document.getElementById("popup-container");

    setLocalStorage(popupName, now, 30);

    activePopup.classList.remove("pop-hidden");
    container.classList.remove("pop-container-hidden");
    container.classList.add("pop-container-visible");

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (window.getComputedStyle(target).getPropertyValue('display') === 'none') {
          setTimeout(function() {
            hidePopup();
          }, 500);
          observer.disconnect();
        }
      });
    });

    var target = activePopup.getElementsByTagName("form")[0];
    observer.observe(target, {
      attributes : true
    });
  }

  function hidePopup() {
    container.classList.add("pop-container-hidden");
    container.classList.remove("pop-container-visible");
    activePopup.classList.add("pop-hidden");
  }

  function checkPopupEvent(e) {
    checkPopupDisplay(defaultPopupDelay);
    document.removeEventListener(e.type, checkPopupEvent);
  }

  function checkPopupDisplay(delay) {
    if (typeof(Storage) !== "undefined") {
      setTimeout(function() {
        var now = new Date().getTime();

        for (var i in popup) {
          var popupName = popup[i];
          if (canUpdateStorage(popupName, now)) {
            showPopup(popupName, now);
            document.addEventListener("touchstart", checkClickOnPopup);
            document.addEventListener("click", checkClickOnPopup);
            return;
          }
        }
      }, delay);
    }
  }

  function checkClickOnPopup(e) {
    var target = e.target;

    if (target === container || target.classList.contains("pop-button-close")) {
      hidePopup();
      document.removeEventListener("touchstart", checkClickOnPopup);
      document.removeEventListener("click", checkClickOnPopup);
    }
  }

  function onScroll(e) {
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    if (window.scrollY > height/2) {
      checkPopupDisplay(scrollPopupDelay);
      document.removeEventListener("scroll", onScroll);
    }
  }
})();
