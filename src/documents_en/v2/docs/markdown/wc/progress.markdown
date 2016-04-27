---
title: Progress
component: js/ons-progress-bar,js/ons-progress-circular,angular1/ons-progress-bar,angular1/ons-progress-circular
framework: js,angular1
---
### Page (ons-page)

`<ons-page>` should be used for the root component of each page. The content inside page component is scrollable.

[`<ons-page>`](/v2/reference/ons-page.html) provides a set of DOM events that will be fired in different moments of its life cycle. Use these events to alter the behavior on each page.

* `init` event is fired after `<ons-page>` is attached to DOM.
* `destroy` event is fired before `<ons-page>` is destroyed and prior to DOM detachment.
* `show` event is fired every time `<ons-page>` comes into view, i.e. when a new page is created and shown immediately or when an existing page shows up.
* `hide` event is fired every time `<ons-page>` disappear from view, i.e. when a visible page is destroyed or is hidden but still exists in the page stack.

Page lifecycle events will be propagated to the page's descendants so they are correspondingly shown, hidden or destroyed. For example, destroying `<ons-navigator>` will throw `hide` event only for the displayed page (navigator's top page) and `destroy` event for every page in navigator's page stack.

``` html
<script>
document.addEventListener("init", function(event) {
  if (event.target.id == "my-page") {
    document.getElementById("my-content").innerHTML = "I am fine!";
  }
}, false);
</script>

<ons-page id="my-page">
  <div>Hello, how are you?</div>
  <div id="my-content">This content will be replaced.</div>
</ons-page>
```
