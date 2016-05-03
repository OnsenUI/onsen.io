---
title: Utility Functions
component: js/ons
framework: js,angular1
---

## Utility Functions (ons object)

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

To manage the top margin for iOS devices, Onsen UI provides [`ons.enableAutoStatusBarFill()`](/v2/docs/js/ons.html#method-enableAutoStatusBarFill) function and [`ons.disableAutoStatusBarFill()`](/v2/docs/js/ons.html#method-disableAutoStatusBarFill) function. This feature is enabled by default, and needs to call the function before Onsen UI initialization complete (before `ons.ready()` event).

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
