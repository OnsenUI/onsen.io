var el, container;

function setLocalStorage(name, now, days) {
  var expireDate =  now + (1000 * 60 * 60 * 24 * days);
  localStorage.setItem(name, expireDate);
  localStorage.setItem("latestUpdate", now);
}

function hidePopup(e) {
  if (e.target === container) {
    setTimeout(function() {
      el.classList.add("hidden");
      container.classList.add("hidden");
      document.removeEventListener("click", hidePopup);
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof(Storage) !== "undefined") {
    var popup = ["popup1", "popup2", "popup3"];
    var now = new Date().getTime();
    var oneDay = 1000 * 60 * 60 * 24;

    for (var i in popup) {
      var name = popup[i];
      var storage = eval("localStorage." + name);

      if (!localStorage.latestUpdate || (storage - now <= 0) && ((localStorage.lastestUpdate + oneDay) - now <= 0)) {
        el = document.getElementById(name);
        container = document.getElementById("container-popup");

        setLocalStorage(name, now, 30);
        el.classList.remove("hidden");
        container.classList.remove("hidden");

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          el.classList.add("popup-mobile");
          if (name == "popup1") {
            var emailInput = document.getElementById("input-email");
            emailInput.style.width = "200px";
          }
        } else {
          el.classList.add("popup-desktop");
        }

        document.addEventListener("click", hidePopup);
        return;
      }
    }
  }
});