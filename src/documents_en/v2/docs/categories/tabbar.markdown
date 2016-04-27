---
title: Tab Bar
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
---

### Tab Bar (ons-tabbar, ons-tab)

A tab bar is composed of a [`<ons-tabbar>`](/v2/reference/js/ons-tabbar.html) component and [`<ons-tab>`](/v2/reference/js/ons-tab.html) components. Usually a tab bar has three to five items, and they are displayed with icons and labels. Each tab bar item is assigned to the different page.

To place a tab bar into your app, place a [`<ons-tabbar>`](/v2/reference/js/ons-tabbar.html) element. A [`<ons-tabbar>`](/v2/reference/js/ons-tabbar.html) element only accepts [`<ons-tab>`](/v2/reference/js/ons-tab.html) under the element. Setting `active` attribute to will activate the tab.

`<ons-tab>` can have an `icon` attribute and a `label` attribute. See [`<ons-icon>`](/v2/reference/js/ons-icon.html) reference for the list of Font-Awesome and Ionicons icons.

``` html
<ons-tabbar>
  <ons-tab page="page1.html" label="Page 1" icon="square" active="true"></ons-tab>
  <ons-tab page="page2.html" label="Page 2" icon="square"></ons-tab>
  <ons-tab page="page3.html" label="Page 3" icon="square"></ons-tab>
  <ons-tab page="page4.html" label="Page 4" icon="square"></ons-tab>
  <ons-tab page="page5.html" label="Page 5" icon="square"></ons-tab>
</ons-tabbar>
```

You can also define a label or an icon as a child of the `<ons-tab>`.

``` html
<ons-tab>
  <div class="tab-bar__label">
    Tab 1
  </div>
</ons-tab>
<ons-tab>
  <div class="tab-bar__icon">
    <ons-icon icon="md-face"></ons-icon>
  </div>
</ons-tab>
```

Specifying a page is just like `<ons-navigator>`, and you can create a external HTML file, or define by using `<ons-template>`.

You can change the animation with the `animation` attribute on the `<ons-tabbar>`. Available values are `fade`, `slide` and `none`.

#### Placing tab bar on the top

Tab bar is placed on the bottom of the screen by default. For typical Android applications, a tab bar is commonly placed on the top. To position the tab bar, the `position` attribute is used. Please note that this attribute is only valid when initializing the component, and will be ignored when setting the value during runtime.

```html
<ons-tabbar position="top">
  <ons-tab page="page1.html" label="Page 1" icon="fa-square" active="true"></ons-tab>
  <ons-tab page="page2.html" label="Page 2" icon="fa-square"></ons-tab>
  <ons-tab page="page3.html" label="Page 3" icon="fa-square"></ons-tab>
</ons-tabbar>
```

If the page already contains a toolbar, the tab bar will be placed below the toolbar.

```html
<ons-page>
  <ons-toolbar>
    <div class="center">Page Title</div>
  </ons-toolbar>
  <ons-tabbar position="top">
    <ons-tab page="page1.html" icon="fa-square"></ons-tab>
    <ons-tab page="page2.html" icon="fa-square"></ons-tab>
    <ons-tab page="page3.html" icon="fa-square"></ons-tab>
  </ons-tabbar>
</ons-page>
```

#### Tab with state

A tab can change its content by its active state. To do so, define the underlying element with `ons-tab-active` and `ons-tab-inactive` attribute.

```html
<ons-tab page="page.html">
  <div ons-tab-active>
    <!-- This content will be displayed when the tab is active -->
  </div>
  <div ons-tab-inactive>
    <!-- This content will be displayed when the tab is inactive -->
  </div>
</ons-tab>
```

#### Tab bar events

There are `prechange`, `postchange` and `reactive` events in `<ons-tabbar>`. 

If you want to cancel changing the tab, call `cancel()` function that exists in `prechange` event object.

``` javascript
ons.ready(function() {
  var myTabbar = document.querySelector("ons-tabbar")
  myTabbar.addEventListener("prechange", function(e) {
    if (e.index == 1) {
      e.cancel();
    }
  })
})
```

##### Set and get active tab

[`setActiveTab(index, options)`](/v2/reference/js/ons-tabbar.html#method-setActiveTab) method can be used to display a specific tab page. The `index` parameter is used to specify the tab page index, which starts from `0`. If `options.keepPage` is specified to `true`, it will not refresh content and display a new page.

[`getActiveTabIndex()`](/v2/reference/js/ons-tabbar.html#method-getActiveTabIndex) method returns the index of the active tab in the number. If there is no active tab, it returns `-1`.

##### Load page without changing the active tab

If you want to only load a page but not to change the active tab index, the [`loadPage()`](/v2/reference/js/ons-tabbar.html#method-loadPage) method can be used.

```javascript
tabbar.loadPage('newpage.html');
```

Please note that `prechange` and `postchange` event will not occur in this case.
