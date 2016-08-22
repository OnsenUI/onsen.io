---
title: Progress
component: js/ons-progress-bar,js/ons-progress-circular,angular1/ons-progress-bar,angular1/ons-progress-circular
framework: js,angular1
tutorial: vanilla/Reference/progress
---

## Progress (ons-progress)

Onsen UI provide two different progress element: `<ons-progress-bar>` and `<ons-progress-circular>`. As the names imply they are used to display a linear progress bar or a circular progress indicator.

These elements takes two different values in `value` and `secondary-value` attributes. They accept a value between 0 and 100. The secondary value can be used in case there are two different operations going on at the same time. One example could be a streaming video player where the primary value is the current elapsed time while the secondary value is used to show how much has been already buffered.

There is also an `indeterminate` attribute that is used to show an animating that is looping indefinitely which is useful in situations where the current progress is unknown.

```html
<ons-page>
  <ons-toolbar>
    <div class="center">Progress</div>
  </ons-toolbar>

  <ons-progress-bar value="10"></ons-progress-bar>

  <div style="margin: 20px auto; width: 320px;">
    <p>Loading stuff...</p>
    <ons-progress-bar value="20" secondary-value="50"></ons-progress-bar>
  </div>

  <ons-progress-bar indeterminate></ons-progress-bar>
  <ons-progress-circular value="10"></ons-progress-circular>
  <ons-progress-circular value="20" secondary-value="50"></ons-progress-circular>
  <ons-progress-circular indeterminate></ons-progress-circular>
</ons-page>
```
