---
title: Page
component: react/Page
framework: react
---
### Page (<Page />)

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

#### Back Button Support

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
