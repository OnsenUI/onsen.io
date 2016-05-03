---
title: Progress
component: js/ons-progress-bar,js/ons-progress-circular,angular1/ons-progress-bar,angular1/ons-progress-circular
framework: js,angular1
tutorial: vanilla/Reference/progress
---

## Progress (ons-progress)

Onsen UI provide two different progress element: `<ons-progress-bar>` and `<ons-progress-circular>`.

These elements takes two different values in value and secondary-value attributes. indeterminate attribute is also available.

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
