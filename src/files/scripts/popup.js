var el, container, transitionEvent;
var oneDay = 1000 * 60 * 60 * 24;
var basicPopupDelay = 15000;
var scrollPopupDelay = 1000;

function testScroll() {
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  if (window.scrollY > height/2) {
    window.onscroll = "";
    checkPopup(scrollPopupDelay);
  }
}

function whichTransitionEvent() {
  var transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  }

  for (var t in transitions) {
    if (el.style[t] !== undefined) {
        return transitions[t];
    }
  }
}

function onPopupClose(e) {
  container.classList.add("hidden");
  document.body.style.position = "";
  document.body.style.overflow = "scroll";

  el.removeEventListener(transitionEvent, onPopupClose);
  document.removeEventListener("click", hidePopup);
}


function setLocalStorage(popupName, now, days) {
  var expireDate =  now + (oneDay * days);

  localStorage.setItem(popupName + ".latestUpdate", expireDate);
  localStorage.setItem("latestUpdate", now);
}

function hidePopup(e) {
  var target = e.target;
  var email = el.getElementsByTagName("input")[0].value;
  var delay = 0;

  transitionEvent = whichTransitionEvent();

  if (target === container || target.classList.contains("button-close") || (target.id === "button-submit" && email)) {
    if (e.target.id === "button-submit") {
      delay = delay + 1000;
    }

    setTimeout(function() {
      el.addEventListener(transitionEvent, onPopupClose);
      el.classList.add("hidden");
    }, delay);
  }
}

function canUpdateStorage(popupName, now) {
  var latestStorageUpdate = parseInt(localStorage.getItem("latestUpdate"));
  var latestPopupUpdate = parseInt(localStorage.getItem(popupName + ".latestUpdate"));

  return (!latestStorageUpdate || ((latestPopupUpdate - now <= 0) && (latestStorageUpdate + oneDay - now <= 0)));
}

function showPopup(popupName, now) {
  el = document.getElementById(popupName);
  container = document.getElementById("container-popup");

  setLocalStorage(popupName, now, 30);
  el.classList.remove("hidden");
  container.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (isMobile()) {
    el.classList.add("popup-mobile");
    document.body.style.position = "fixed";
    var emailInput = el.getElementsByTagName("input")[0];
    emailInput.style.width = "200px";
  } else {
    el.classList.add("popup-desktop");
  }
}

function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function checkPopup(delay) {
  if (typeof(Storage) !== "undefined") {
    setTimeout(function() {
      var popup = ["popup-newsletter", "popup-google-maps", "popup-material-design"];
      var now = new Date().getTime();

      for (var i in popup) {
        popupName = popup[i];
        if (canUpdateStorage(popupName, now)) {
          showPopup(popupName, now);
          document.addEventListener("click", hidePopup, false);
          return;
        }
      }
    }, delay);
  }
}

function checkPopupEvent(e) {
  if (e.type === "scroll") {
    window.onscroll = testScroll;
  } else {
    checkPopup(basicPopupDelay);
  }
  document.removeEventListener(e.type, checkPopupEvent);
}

document.addEventListener("DOMContentLoaded", checkPopupEvent);

document.addEventListener("scroll", checkPopupEvent);