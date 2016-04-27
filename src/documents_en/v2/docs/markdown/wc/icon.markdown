---
title: Icon
component: js/ons-icon,angular1/ons-icon
framework: js,angular1
---

### Icons (ons-icon)

Onsen UI offers over 400 icons provided by [Font Awesome](http://fontawesome.github.io/) and over 500 icons by [Ionicons](http://ionicons.com/).

When displaying an icon, a [`<ons-icon>`](/v2/reference/js/ons-icon.html) component can be used. You can specify which icon to display by specifying to the `icon` attribute.


#### Using Font Awesome

If the value of `icon` attribute starts with `fa-`, appropriate Font Awesome icon is used. The list of available icons can be found on the [Font Awesome Website](http://fortawesome.github.io/Font-Awesome/icons/). If `icon` attribute has no prefix, Font Awesome collection will be used.

#### Using Ionicons

If the value of `icon` attribute starts with `ion-`, appropriate Ionicons icon is used. The list of available icons can be found on the [Ionicons Website](http://ionicons.com/).

```html
<ons-icon icon="fa-angle-left"></ons-icon>
<ons-icon icon="fa-angle-left" size="40px"></ons-icon>
<ons-icon icon="fa-angle-left" size="40px" rotate="90"></ons-icon>
<ons-icon icon="fa-angle-left" spin="true"></ons-icon>
```

Also, you can specify the icon size to display by using size attribute.

```html
<ons-icon icon="fa-angle-left" size="40px">
```

Furthermore, you can rotate the icon.

```html
<ons-icon icon="fa-angle-left" size="40px" rotate="90deg">
```

Icon can have an animation effect. This is useful for displaying spinners.

```html
<ons-icon icon="fa-angle-left" spin="yes">
```
