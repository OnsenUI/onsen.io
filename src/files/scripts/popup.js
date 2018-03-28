(function() {
  var activePopup, container;
  var ONE_DAY = 1000 * 60 * 60 * 24;
  var defaultPopupDelay = 15000;
  var scrollPopupDelay = 1000;
  var popupName = 'popup-newsletter';

  document.addEventListener("DOMContentLoaded", checkPopupEvent);
  document.addEventListener("scroll", onScroll);

  function shouldShowPopup(popupName, now) {
    var latestStorageUpdate = parseInt(localStorage.getItem('latestUpdate'));

    if(!latestStorageUpdate) {
      // First init - set the pop up to happen in 3 days
      setLocalStorage(popupName, now, 3);
      return false;
    }

    var popupExpireDate = parseInt(localStorage.getItem(popupName + '.expireDate'));

    return (popupExpireDate - now <= 0) && (latestStorageUpdate + ONE_DAY - now <= 0);
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
    setTimeout(function() {
      var now = new Date().getTime();

      if (shouldShowPopup(popupName, now)) {
        showPopup(popupName, now);
        document.addEventListener("touchstart", checkClickOnPopup);
        document.addEventListener("click", checkClickOnPopup);
        return;
      }
    }, delay);
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
