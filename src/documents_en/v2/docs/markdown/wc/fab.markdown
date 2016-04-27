---
title: Floating Action Button
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
---


### Floating Action Button (ons-fab)

Floating action button is the design spec in Material Design, which provides a call-to-action button usually placed on right-bottom corner of the screen. [`<ons-fab>`](/v2/reference/js/ons-fab.html) tag will render a fab button, and you can combine with [`<ons-speed-dial>`](/v2/reference/js/ons-speed-dial.html) component that shows Speed Dial.

To place a `<ons-fab>` element, simply insert a tag with position attribute. Add `ripple` attribute if you need ripple effect.

``` html
<ons-fab position="bottom right" ripple></ons-fab>
```

[`<ons-fab>`](/v2/reference/js/ons-fab.html) triggers `click` event when the button is clicked or tapped, as figured below:

```javascript
document.querySelector('ons-fab').addEventListener('click', function(event) {
  // Button is clicked!
});
```
