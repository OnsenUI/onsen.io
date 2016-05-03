---
title: Splitter
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/splitter
---

## Splitter Side Menu (ons-splitter)

A menu can be added using the `<ons-splitter>`. For small devices it can be used to create a swipeable menu, but for larger screens it can automatically display a column layout.

You need to add `<ons-splitter-content>` and `<ons-splitter-side>` elements as children. The `<ons-splitter-content>` contains the main content and the `<ons-splitter-side>` is used for the menu.

The following example has a side page and a content page. It is using `page` attribute to specify a external HTML file. Instead, you can write the content inside `<ons-splitter-side>` and `<ons-splitter-content>` tags.

``` html
<ons-template id="side.html">
  <ons-page>Side menu</ons-page>
</ons-template>
<ons-template id="page.html">
  <ons-page>Main contents</ons-page>
</ons-template>
<ons-splitter>
  <ons-splitter-side swipeable page="side.html" />
  <ons-splitter-content page="page.html" />
</ons-splitter>
```

#### Changing content page

To change the content of the `<ons-splitter-content>`, you can use the `load(page, options)` method. Normally this method will be called when the user clicks on one of the items in the menu.

``` javascript
var content = document.querySelector('ons-splitter-content');

// Switch to the Settings page.
content.load('settings.html');
```

#### Configuring side menu

The `<ons-splitter-side>` supports several attributes that control the behavior of the menu.

For instance, when setting `swipeable` attribute, Splitter enables opening and closing the menu by swiping. 

`collapse` attribute specifies the collapse behavior. The menu supports two modes: `collapse` and `split` mode. When the menu is collapsed, it will be hidden from view and only visible if the user swipes or the `open()` method is called. In `split` mode the menu is displayed as a column on the side of the `<ons-splitter-content>` element.

The value of the collapse attribute defines when it should be in either mode conditionally. If you set the value to `portrait` it will be collapsed when the device is in portrait mode. It also supports a media query.

The `side` attribute defines which side the menu is attached to. It supports the values `left` and `right`. Therefore, It’s possible to define one menu on each side of the screen.

##### Always collapse

``` html
<ons-splitter-side side="left" width="30%" swipable collapse>
  Side content
</ons-splitter-side>
```

##### Collapse if the screen is in landscape

``` html
<ons-splitter-side side="left" width="30%" collapse='landscape'>
  Side content
</ons-splitter-side>
```

#### Splitter events

`<ons-splitter-side>` has 5 events: `modechange`, `preopen`, `postopen`, `preclose` and `postclose`. The following example listens to the event and it will always cancel opening side menu.

```html
<script>
ons.ready(function() {
  document.querySelector("ons-splitter-side")
    .addEventListener('preopen', function(e) {
      e.cancel(); // Calling cancel() function will cancel opening menu
    })
});
</script>
```

