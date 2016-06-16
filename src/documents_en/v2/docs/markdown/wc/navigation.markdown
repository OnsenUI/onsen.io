---
title: Navigator
component: js/ons-navigator,angular1/ons-navigator
framework: js,angular1
tutorial: vanilla/Reference/navigator
---

## Navigation

In Onsen UI, a page navigation is done by the [`<ons-navigator>`](/v2/docs/js/ons-navigator.html). `<ons-navigator>` is a navigation controller that does not have displayed content. Therefore, you usually use a [`<ons-toolbar>`](/v2/docs/js/ons-toolbar.html) and add a toolbar on top of the page. Navigator provides screen transitions with smooth animation, and is used to create a parent-child relationship.

[`<ons-navigator>`](/v2/docs/js/ons-navigator.html) is a page stack manager + transition animator. A new page added to the stack will have screen transition with animation. All pages in the stacks are the form of [`<ons-page>`](/v2/docs/js/ons-page.html) elements; therefore only [`<ons-page>`](/v2/docs/js/ons-page.html) components can be placed directly under a [`<ons-navigator>`](/v2/docs/js/ons-navigator.html) element.

A page usually have a toolbar on top of the page. Therefore, [`<ons-toolbar>`](/v2/docs/js/ons-toolbar.html) component is commonly placed under [`<ons-page>`](/v2/docs/js/ons-page.html) element to provide a back button support and the page title.

#### Display a new page (pushPage)

To add a new page to the stack, use `pushPage()` method in the navigator object. Additional pages can be defined using `<ons-template>` element using `id` attribute.

```html
<ons-navigator id="myNavigator"></ons-navigator>
<ons-template id="page2.html">
  <ons-page>Second page</ons-page>
</ons-template>
<script>
var options = {
  animation: 'slide', // What animation to use
};
var myNavigator = document.querySelector("#myNavigator");
myNavigator
  .pushPage("page2.html", options)
  .then(function() {
    ons.notification.alert('A new page is shown.');
  })
</script>
```

When calling `pushPage()` method, you can specify additional parameters so that they can be taken from the new page.

``` javascript
myNavigator
  .pushPage("page2.html", {
    data: {
      param1: 'foo',
      param2: 'bar'
    }
  })
  .then(function(page) {
    console.log("Parameter passed: ", page.data)
  })
```

#### Returning from a page (popPage)

Similarly, use `popPage()` method to remove the current foreground page from the stack.

``` javascript
myNavigator
  .popPage()
  .then(function() {
    ons.notification.alert('New page is popped.');
  })
```

#### Transition animation

`pushPage()` and `popPage()` method can specify the following animation patterns: `slide`, `lift`, `fade` and `none`. The animation effect changes by the device platform, so for fixed animations, add "-ios" or "-md" suffix to the animation name.

```javascript
// Always apply iOS style lift animation
myNavigator.pushPage("page2.html", { animation: "lift-ios" }):
```

Transition animation can be customized by creating a new animation object to the `animation` parameter. For more details, please see `NavigatorTransitionAnimator` class located in `core/src/elements/ons-navigator/animator.js`.

#### Getting pages

You can get the current page by `topPage` property.

```javascript
// Get the passed parameters
console.log(myNavigator.topPage.data);
```

If you want to get all pages in the page stack, use `pages` property.

#### Insert page at any level

`navigator.insertPage()` adds a page into any level in the stack by specifying the `index` parameter. If specified as `0`, it will add the page to the bottom of the page stack. If specified a negative value, it will be counted from the top level. Therefore, specifying `-1` will result in adding the page to the 2nd level from the top. The `page` and `options` parameters works the same as `pushPage()` API.

#### Back button component (ons-back-button)

If the app is running on an Android device and using Cordova, pressing the back button will trigger a navigator's `popPage()` method.

Another way, especially when using iOS, is to use `<ons-back-button>` component. It can be added to the left side of the toolbar and renders as an arrow. It will automatically find the Navigator element and trigger a popPage() call so there is no need to attach any click handlers to it.

If you additionally want to only show a back button from iOS devices, [`<ons-if>`](/v2/docs/js/ons-if.html) is the way.

```html
<ons-toolbar>
  <div class="left"><ons-if platform="ios"><ons-back-button>Back</ons-back-button></ons-if></div>
  <div class="center">Page Title</div>
</ons-toolbar>
```

#### Navigation events

[`<ons-navigator>`](/v2/docs/js/ons-navigator.html) has several events defined: `prepush`, `postpush`, `prepop`, `postpop`. They are called before or after the `pushPage` or `popPage` action.

Also, event object for `prepush` and `prepop` have `cancel()` function, which you can cancel the operation.

```javascript
myNavigator.addEventListener('prepush', function(event) {
  if (needsCancel) {
    event.cancel(); // Cancel the operation
  }
});
```
