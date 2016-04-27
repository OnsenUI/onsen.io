---
title: Navigator
component: js/ons-navigator,angular1/ons-navigator
framework: js,angular1
---

In Onsen UI, a page navigation is done by the [`<ons-navigator>`](/v2/reference/js/ons-navigator.html). `<ons-navigator>` is a navigation controller that does not have displayed content. Therefore, you usually use a [`<ons-toolbar>`](/v2/reference/js/ons-toolbar.html) and add a toolbar on top of the page. Navigator provides screen transitions with smooth animation, and is used to create a parent-child relationship.

[`<ons-navigator>`](/v2/reference/js/ons-navigator.html) is a page stack manager + transition animator. A new page added to the stack will have screen transition with animation. All pages in the stacks are the form of [`<ons-page>`](/v2/reference/js/ons-page.html) elements; therefore only [`<ons-page>`](/v2/reference/js/ons-page.html) components can be placed directly under a [`<ons-navigator>`](/v2/reference/js/ons-navigator.html) element.

A page usually have a toolbar on top of the page. Therefore, [`<ons-toolbar>`](/v2/reference/js/ons-toolbar.html) component is commonly placed under [`<ons-page>`](/v2/reference/js/ons-page.html) element to provide a back button support and the page title.

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
    param1: 'foo',
    param2: 'bar'
  })
  .then(function(page) {
    // You will get something like:
    //  { page: 'page2.html', pagam1: 'foo', patam2: 'bar' }
    console.log("Parameter passed: ", page.options)
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
// Get the passed options
console.log(myNavigator.topPage.options);
```

If you want to get all pages in the page stack, use `pages` property.

#### Insert page at any level

`navigator.insertPage()` adds a page into any level in the stack by specifying the `index` parameter. If specified as `0`, it will add the page to the bottom of the page stack. If specified a negative value, it will be counted from the top level. Therefore, specifying `-1` will result in adding the page to the 2nd level from the top. The `page` and `options` parameters works the same as `pushPage()` API.

#### Back button component (ons-back-button)

If the app is running on an Android device and using Cordova, pressing the back button will trigger a navigator's `popPage()` method.

Another way, especially when using iOS, is to use `<ons-back-button>` component. It can be added to the left side of the toolbar and renders as an arrow. It will automatically find the Navigator element and trigger a popPage() call so there is no need to attach any click handlers to it.

If you additionally want to only show a back button from iOS devices, [`<ons-if>`](/v2/reference/js/ons-if.html) is the way.

```html
<ons-toolbar>
  <div class="left"><ons-if platform="ios"><ons-back-button>Back</ons-back-button></ons-if></div>
  <div class="center">Page Title</div>
</ons-toolbar>
```

#### Navigation events

[`<ons-navigator>`](/v2/reference/js/ons-navigator.html) has several events defined: `prepush`, `postpush`, `prepop`, `postpop`. They are called before or after the `pushPage` or `popPage` action.

Also, event object for `prepush` and `prepop` have `cancel()` function, which you can cancel the operation.

```javascript
myNavigator.addEventListener('prepush', function(event) {
  if (needsCancel) {
    event.cancel(); // Cancel the operation
  }
});
```






### Speed Dial (ons-speed-dial, ons-speed-dial-item)

`<ons-speed-dial>` is another Material Design component to display the selections.

``` html
<ons-speed-dial position="left bottom">
  <ons-icon
    icon="fa-twitter"
    size="26px"
    fixed-width="false"
    style="vertical-align:middle;">
  </ons-icon>
  <ons-speed-dial-item><ons-ripple></ons-ripple>C</ons-speed-dial-item>
  <ons-speed-dial-item><ons-ripple></ons-ripple>B</ons-speed-dial-item>
  <ons-speed-dial-item><ons-ripple></ons-ripple>A</ons-speed-dial-item>
</ons-speed-dial>
```

### Button (ons-button)

[`<ons-button>`](/v2/reference/js/ons-button.html) renders a button with different face types. You can change the appearance by using `modifier`, `should-spin`, `animation` and `disabled` attributes. `modifier` attribute provides several predefined values to change the appearance.

### Switch (ons-switch)

[`<ons-switch>`](/v2/reference/js/ons-switch.html) is used to display a switch. A switch has an "on" and an "off" state. The state can be accessed by the [`isChecked()`](/v2/reference/js/ons-switch.html#method-isChecked) method.

```html
<script>
function changed() {
  alert(document.querySelector('#mySwitch').isChecked() ? 'ON' : 'OFF');
}
</script>
<ons-switch onchange="changed()" id="mySwitch"></ons-switch>
```

Inside the switch is a `<input type="checkbox">` element. You can get the inner input by calling `getCheckboxElement()` method.

### Text input (ons-input)

`<ons-input>` is an alternative to `<input>` tag, with Material Design floating label and animation effect. To enable floating label style, use `placeholder` attribute and `float` attribute together. 

- Text input

  ```html
  <ons-input placeholder="Name" float>
  ```

- Password

  ```html
  <ons-input type="password" placeholder="Name" float>
  ```

- Number

  ```html
  <ons-input type="number" min="0" max="100" placeholder="Age" float>
  ```

### Range (ons-range)

To draw a range, use `<ons-range>` element.

``` html
<ons-range value="20"></ons-range>
<ons-range modifier="material" value="10"></range>
```

### Check box and radio button

Check box and radio button are provided as CSS components. Therefore, use the following HTML snippet to display each component.

```html
<label class="checkbox">
  <input type="checkbox">
  <div class="checkbox__checkmark"></div>
  <span class="ons-checkbox-inner"></span>
</label>
```

```html
<label class="radio-button">
  <input type="radio">
  <div class="radio-button__checkmark"></div>
</label>
```

### Ripple Effect (ons-ripple)

This component adds a Material Design `ripple` effect to an element.

``` html
<div class="my-div">
 <ons-ripple></ons-ripple>
</div>
```

### Layouting (ons-row, ons-col)

Onsen UI provides a grid system to place your elements in the screen. The grid system divides the screen into rows and columns, just like a spreadsheet. The width and height of each grid is adjustable, and you can also condense two or more grids in a row or column, into one grid.

The layout can be performed by combining [`<ons-row>`](/v2/reference/js/ons-row.html) and [`<ons-col>`](/v2/reference/js/ons-col.html) components. The width and height can be adjusted in a flexible way.

By default, all [`<ons-col>`](/v2/reference/js/ons-col.html) inside a [`<ons-row>`](/v2/reference/js/ons-row.html) will have the same width. You can specify any `<ons-col>` elements to have a specific width and let others take the remaining width in a `<ons-row>`.

[`<ons-row>`](/v2/reference/js/ons-row.html) has `align` attribute, and `<ons-col>` has `align`, `size`, and `offset` attributes. For the `size` attribute, you can specify either in `px` or `%`.

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

### Progress Indicator (ons-progress-bar, ons-progress-circular)

`<ons-progress-bar>` and `<ons-progress-circular>` element provide Material Design progress component, in either linear or circular shape. You should specify `value` and optional `secondary-value` to display the progress.

``` html
<ons-progress-bar value="55" secondary-value="87">
</ons-progress-bar>
<ons-progress-circular value="55" secondary-value="87">
</ons-progress-circular>
```

Adding `indeterminate` attribute will tell components to loop forever. In this case, 

``` html
<ons-progress-bar indeterminate>
</ons-progress-bar>
<ons-progress-circular indeterminate>
</ons-progress-circular>
```

### Page (ons-page)

`<ons-page>` should be used for the root component of each page. The content inside page component is scrollable.

[`<ons-page>`](/v2/reference/ons-page.html) provides a set of DOM events that will be fired in different moments of its life cycle. Use these events to alter the behavior on each page.

* `init` event is fired after `<ons-page>` is attached to DOM.
* `destroy` event is fired before `<ons-page>` is destroyed and prior to DOM detachment.
* `show` event is fired every time `<ons-page>` comes into view, i.e. when a new page is created and shown immediately or when an existing page shows up.
* `hide` event is fired every time `<ons-page>` disappear from view, i.e. when a visible page is destroyed or is hidden but still exists in the page stack.

Page lifecycle events will be propagated to the page's descendants so they are correspondingly shown, hidden or destroyed. For example, destroying `<ons-navigator>` will throw `hide` event only for the displayed page (navigator's top page) and `destroy` event for every page in navigator's page stack.

``` html
<script>
document.addEventListener("init", function(event) {
  if (event.target.id == "my-page") {
    document.getElementById("my-content").innerHTML = "I am fine!";
  }
}, false);
</script>

<ons-page id="my-page">
  <div>Hello, how are you?</div>
  <div id="my-content">This content will be replaced.</div>
</ons-page>
```

### Finger Gestures (ons-gesture-detector)

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


### Conditional (ons-if)

[`<ons-if>`](/v2/reference/js/ons-if.html) element can conditionally display content depending on the platform or the screen orientation. Currently, there is `orientation` and `platform` attribute.

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

### Multiple page definitions (ons-template)

Some components require you to specify another HTML page. For instance, a `<ons-splitter-side>` needs to specify a menu page in following format.

```html
<ons-splitter-side page="menu.html">
</ons-sliding-menu>
```

Instead of creating menu.html in a separate file, you can also define the page content in the same page. This can be done by creating a [`<ons-template>`](/v2/reference/js/ons-template.html) tag.

An [`<ons-template>`](/v2/reference/js/ons-template.html) tag represents a template snippet. For example, following code defines a template called `main.html`.

```html
<ons-template id="main.html">
  <!-- Here, we define the HTML content for main.html -->
  <div>
    Hello, this is the content of main.html
  </div>
</ons-template>
```

### Utility Functions (ons object)

Onsen UI has `ons` object, which is a global proprty added to `window`. It includes several functions to help make developing your app easier.

#### ons.ready(func)

`ons.ready()` function is called when Onsen UI initialization is done. If the app is running under Cordova or PhoneGap, it will also wait for its initialization (`ondeviceready` event).

This event is very useful to hide the splash screen to avoid a black screen during the page load. For example, the following code will hide the splash screen once Onsen UI is loaded completely.

```javascript
ons.ready(function() {
  // Hide Cordova splash screen when Onsen UI is loaded completely
  // API reference: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
  navigator.splashscreen.hide()
});
```

#### ons.disableAutoStatusBarFill()

As of iOS 7, a status bar can be rendered above a WebView. Onsen UI automatically detects and adds the necessary margin on the top. However in some occations, it is necessary to disable this feature, when using Cordova [StatusBar plugin](https://github.com/apache/cordova-plugin-statusbar) for instance.

To manage the top margin for iOS devices, Onsen UI provides [`ons.enableAutoStatusBarFill()`](/v2/reference/js/ons.html#method-enableAutoStatusBarFill) function and [`ons.disableAutoStatusBarFill()`](/v2/reference/js/ons.html#method-disableAutoStatusBarFill) function. This feature is enabled by default, and needs to call the function before Onsen UI initialization complete (before `ons.ready()` event).

```javascript
/**
 * Need to call during Onsen UI initialization
 */

// Disable auto margin for the iOS status bar
ons.disableAutoStatusBarFill();

// Enable auto margin for the iOS status bar
ons.enableAutoStatusBarFill();

ons.ready(function() { });
```

#### ons.enableAnimations() and ons.disableAnimations()

`ons.enableAnimations()` and `ons.disableAnimations()` are provided for testing purposes and performance on older devices. All the animations will be completely disabled.

#### ons.platform and ons.platform.select()

`ons.platform` object provides following methods to detect the platform by JavaScript.

- `ons.platform.isWebView()`: Returns `true` if the app is running on the WebView.
- `ons.platform.isIOS()`: Returns `true` if the app is running under an iOS device.
- `ons.platform.isAndroid()`: Returns `true` if the app is running under an Android device.
- `ons.platform.isIPhone()`: Returns `true` if the app is running under an iPhone device.
- `ons.platform.isIPad()`: Returns `true` if the app is running under an iPad device.
- `ons.platform.isBlackBerry()`: Returns `true` if the app is running under a BlackBerry device.
- `ons.platform.isOpera()`: Returns `true` if the app is running under an Opera browser.
- `ons.platform.isFirefox()`: Returns `true` if the app is running under a Firefox browser.
- `ons.platform.isSafari()`: Returns `true` if the app is running under Apple Safari browser.
- `ons.platform.isChrome()`: Returns `true` if the app is running under Google Chrome browser.
- `ons.platform.isIE()`: Returns `true` if the app is running under Internet Explorer browser.
- `ons.platform.isIOS7()`: Returns `true` if the running iOS is version 7.0 or later.

For testing purposes, `ons.platform.select(platform)` provides a way to select a platform. The `platform` parameter specifies the platform used to render the elements. Possible values are: "opera", "firefox", "safari", "chrome", "ie", "android", "blackberry", "ios" or "wp".

### Back Button Support

Android has a hardware back button. To support device back button, use `setDeviceBackButtonHandler` method in [`<ons-page>`](/v2/reference/js/ons-page.html).

```html
<ons-page id="myPage">...</ons-page>
<script>
  ons.ready(function() {
    document.getElementById("myPage").setDeviceBackButtonHandler(function() {
      console.log("Device back button is called.").
    });

    // Get the back button handler and disable it
    var handler = myPage.getDeviceBackButtonHandler();
    handler.disable();
  });
</script>
```

#### Overriding default back button handler

Not only a `ons-page` component, a `ons-navigator` and a `ons-splitter` component also implement the default back button handlers. For instance, the `ons-navigator` handler triggers a `popPage()` when the back button is pressed. If you want to disable it, or change to the other behavior, you can use `getDeviceBackButtonHandler()` API.

```javascript
// To disable a navigator back button handler
navigator.getDeviceBackButtonHandler().disable();

// Or to change the behavior
navigator.getDeviceBackButtonHandler().setListener(function(event) {});

// Or to enable it again
navigator.getDeviceBackButtonHandler().enable();
```

As you see in the code, `getDeviceBackButtonHandler()` API returns an object that has `disable()`, `enable()`, `isEnabled()` and `setListener(fn)` methods.

If you want to call a parent event handler, `callParentHandler()` method will do the delegation. If the component's handler is undefined or set to be disabled, the parent event handler will be called automatically.

```javascript
myPage.getDeviceBackButtonHandler().setListener(function(event) {
  // Call parent handler
  event.callParentHandler();
});
```

The default back button behavior of an Onsen UI app is to close the application. This is the same behavior as other Android applications.

To override the behavior, you can use `ons.setDefaultDeviceBackButtonListener` function. The following code confirms before closing the app (works for Cordova / PhoneGap only).

```javascript
ons.setDefaultDeviceBackButtonListener(function() {
  if (navigator.notification.confirm("Are you sure to close the app?",
    function(index) {
      if (index === 1) { // OK button
        navigator.app.exitApp(); // Close the app
      }
    }
  ));
});
```

#### Completely disable back button handler

If you want to disable Onsen UI back button handlers completely, use `ons.disableDeviceBackButtonHandler()` function. It is useful when you want to use Cordova / PhoneGap back button handler directly.

```javascript
ons.ready(function() {
  ons.disableDeviceBackButtonHandler();

  // Use Cordova handler
  window.document.addEventListener('backbutton', function() {
    // Handle backbutton event
  }, false);
});
```

### Using Modifier

Modifier is a cross-component way to provide customizability for Onsen UI components. When a component is defined with a `modifier`, it will have a separate class namespace so that you can apply custom styles to the component. Also, some components have several preset modifiers to change the appearance.

For example, each of the following buttons have different look. To change modifiers dynamically, please manipulate `modifier` attribute from JavaScript.

```html
<ons-button modifier="quiet">Quiet</ons-button>
<ons-button modifier="light">Light</ons-button>
<ons-button modifier="large">Large</ons-button>
<ons-button modifier="cta">CTA</ons-button>
```

### CSS Definitions

Onsen UI styles are defined in `onsenui.css` and `onsen-css-components.css`. They are written in the [Stylus](http://stylus-lang.com/) format.

`onsenui.css` is a core CSS module that defines styles for the custom elements. The source code exists under `core/css` directory. `onsen-css-components.css` contains CSS definitions for CSS components. The source code exists in `css-components/components-src/stylus`.

You can also use [Onsen CSS Components](http://components.onsen.io/) to customize pre-defined colors. After the customization, you can download and replace to the existing `onsenui-css-components.css` to reflect the changes.

#### Overriding CSS style

If you want to apply a different style to a specific component, you can use `modifier` attribute to override its style definition.

For example, if you want to apply a thick border only to a specific button, you can define like the one below.

```html
<ons-button modifier="thick">Thick Button</ons-button>
```

Then, write the appropriate style code under the style tag or in the css file.

```html
<style>
.button--thick {
  border: 10px;
}
</style>
```

### Under the hood of Custom Elements

If you need to customize the underlying HTML code, you can access to our core Custom Element definitions. The source code for each components are located under `core/src/elements` directory.
