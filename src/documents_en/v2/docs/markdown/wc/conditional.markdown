---
title: Conditional
component: js/ons-if,angular1/ons-if
framework: js,angular1
tutorial: vanilla/Reference/if
---

## Conditional (ons-if)

[`<ons-if>`](/v2/docs/js/ons-if.html) element can conditionally display content depending on the platform or the screen orientation. Currently, there is `orientation` and `platform` attribute.

```html
<ons-if orientation="landscape">
  Landscape view!
</ons-if>
<ons-if platform="android">
  This is Android.
</ons-if>
<ons-if platform="ios other">
  This is not Android.
</ons-if>
```
