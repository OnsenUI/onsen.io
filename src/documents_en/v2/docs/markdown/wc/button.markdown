---
title: Button
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/button
---

## Button (ons-button)

[`<ons-button>`](/v2/docs/js/ons-button.html) renders a button. You can change the appearance by using `modifier` to change the appearance of the button.

The button will automatically change its appearance based on the platform. On Android it will be displayed as a Material Design button.

There are several modifiers available:

* `outline` - Button with outline and transparent background
* `light` - Button that doesn’t stand out
* `quiet` - Button with no outline and no background
* `cta` - A call to action button that really stands out
* `large` - Button that extends the whole width of the screen or container
* `large--quiet` - Large quiet button
* `large--cta` - Large call to action button.

To create a large button the following code can be used:

```html
<ons-button modifier="large">
  Tap me!
</ons-button>
```

Just like a normal `<button>` element it supports the `disabled` attribute which will make the button unclickable:

```html
<ons-button disabled>
  Disabled button.
</ons-button>
```
