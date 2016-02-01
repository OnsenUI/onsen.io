const ONE_DAY = 1000 * 60 * 60 * 24;
var el, container;

function setLocalStorage(popupName, now, days) {
  var expireDate =  now + (ONE_DAY * days);

  localStorage.setItem(popupName, expireDate);
  localStorage.setItem("latestUpdate", now);
}

function hidePopup(e) {
  if (e.target === container || e.target.classList.contains("button-close")) {
    setTimeout(function() {
      el.classList.add("hidden");
      container.classList.add("hidden");
      document.body.style.position = "";
      document.body.style.overflow = "scroll";
      document.removeEventListener("click", hidePopup);
    }, 500);
  }
}

function checkPopup(storage, now) {
  return (!localStorage.latestUpdate || (storage - now <= 0) && ((localStorage.lastestUpdate + ONE_DAY) - now <= 0));
}

function showPopup(popupName, now) {
  el = document.getElementById(popupName);
  container = document.getElementById("container-popup");

  setLocalStorage(name, now, 30);

  el.classList.remove("hidden");
  container.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (isMobile()) {
    el.classList.add("popup-mobile");
    document.body.style.position = "fixed";
    if (popupName === "popup-newsletter") {
      var emailInput = document.getElementById("input-email");
      emailInput.style.width = "200px";
    }
  } else {
    el.classList.add("popup-desktop");
  }
}

function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof(Storage) !== "undefined") {
    var popup = ["popup-newsletter", "popup2", "popup3"];

    setTimeout(function() {
      var now = new Date().getTime();
      for (var i in popup) {
        var popupName = popup[i];
        var storage = "localStorage." + popupName;
        if (checkPopup(storage, now)) {
          showPopup(popupName, now);
          document.addEventListener("click", hidePopup);
          return;
        }
      }
    }, 10000)
  }
});