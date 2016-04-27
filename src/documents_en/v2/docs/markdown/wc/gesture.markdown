---
title: Gesture Detection
component: js/ons-gesture-detector,js/ons.GestureDetector,angular1/ons-gesture-detector,angular1/ons.GestureDetector
framework: js,angular1
---

## Finger Gestures (ons-gesture-detector)

Onsen UI utilizes [Hammer.js](http://hammerjs.github.io/) for gesture detection. To detect a finger gesture, you must wrap the target DOM element using [`<ons-gesture-detector>`](/v2/reference/js/ons-gesture-detector.html) component. The following code does a swipe-left detection for a specific element.

```html
<ons-gesture-detector>
  <div id="detect-area" style="width: 100px; height: 100px;">
    Swipe Here
  </div>
</ons-gesture-detector>
<script>
  document.getElementById("detect-area").addEventListener("swipeleft", function(e) {
    console.log('Swipe left is detected.');
  });
</script>
```

#### Supported gestures

Following gestures are supported.

  - Drag gestures: `drag`, `dragleft`, `dragright`, `dragup`, `dragdown`
  - Hold gestures: `hold`, `release`
  - Swipe gestures: `swipe`, `swipeleft`, `swiperight`, `swipeup`, `swipedown`
  - Tap gestures: `tap`, `doubletap`
  - Pinch gestures: `pinch`, `pinchin`, `pinchout`
  - Other gestures: `touch`, `transform`, `rotate`

