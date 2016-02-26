const ONE_DAY = 1000 * 60 * 60 * 24;
var el, container, transitionEvent;

function testScroll(ev){
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  if (window.scrollY > height/2) {
    window.onscroll = "";
    if (typeof(Storage) !== "undefined") {
      setTimeout(function() {
        checkPopup();
      }, 1000)
    }
  }
}
window.onscroll=testScroll;

function whichTransitionEvent() {
  var fakeEl = document.createElement('fakeElement');
  var transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  }

  for (var t in transitions) {
    if (fakeEl.style[t] !== undefined) {
        return transitions[t];
    }
  }
}

function onPopupClose(event) {
  container.classList.add("hidden");
  document.body.style.position = "";
  document.body.style.overflow = "scroll";

  el.removeEventListener(transitionEvent, onPopupClose);
  document.removeEventListener("click", hidePopup);
}


function setLocalStorage(popupName, now, days) {
  var expireDate =  now + (ONE_DAY * days);

  localStorage.setItem(popupName, expireDate);
  localStorage.setItem("latestUpdate", now);
}

function hidePopup(e) {
  transitionEvent = whichTransitionEvent();
  var target = e.target;
  var email = document.getElementsByClassName("input-email-popup")[0].value;
  var delay = 1000;

  if (target === container || target.classList.contains("button-close") || (target.id === "button-submit" && email)) {
    if (e.target.id === "button-submit") {
      delay = delay + 500;
    }

    setTimeout(function() {
      el.addEventListener(transitionEvent, onPopupClose);
      el.classList.add("hidden");
    }, delay);
  }
}

function canUpdateStorage(storage, now) {
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

function checkPopup() {
  //localStorage.clear();
  var popup = ["popup-newsletter", "popup2", "popup3"];
  var now = new Date().getTime();

  for (var i in popup) {
    popupName = popup[i];
    var storage = "localStorage." + popupName;
    if (canUpdateStorage(storage, now)) {
      showPopup(popupName, now);
      document.addEventListener("click", hidePopup, false);
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof(Storage) !== "undefined") {
    setTimeout(function() {
      checkPopup();
    }, 15000)
  }
});