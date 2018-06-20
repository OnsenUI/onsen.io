(function() {
  var ONE_DAY = 1000 * 60 * 60 * 24;
  var defaultPopupDelay = 15000;
  var popupName = 'popup-newsletter';

  document.addEventListener('DOMContentLoaded', function(ev) {
    checkPopupEvent(ev);
    document.querySelector('.prompt-button-close').addEventListener('click', hidePopup);
  });

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

    localStorage.setItem(popupName + '.expireDate', expireDate);
    localStorage.setItem('latestUpdate', now);
  }

  function showPopup(popupName, now) {
    var activePopup = document.getElementById(popupName);
    activePopup.classList.remove('prompt-hidden');

    setLocalStorage(popupName, now, 30);

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

    var target = activePopup.getElementsByTagName('form')[0];
    observer.observe(target, {
      attributes : true
    });
  }

  function hidePopup() {
    document.getElementById(popupName).classList.add('prompt-hidden');
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
        return;
      }
    }, delay);
  }
})();
