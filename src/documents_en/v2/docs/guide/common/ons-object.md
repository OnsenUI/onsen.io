### The `ons` object

Onsen UI not only provides custom elements, it also provides an object called [`ons`](/v2/docs/js/ons.html) with a lot of useful functions attached to it. The `ons` object is part of the core library and can be imported in the bindings.

The following example uses `ons.ready(fn)` which waits until the app is completely loaded before executing a callback function. Inside the callback, it is calling `ons.notification.alert()` to display a alert dialog.

``` javascript
ons.ready(function() {
  // Onsen UI is now initialized
  ons.notification.alert('Welcome to Onsen UI!');
});
```

See also [`ons.platform`](/v2/docs/js/ons.platform.html), [`ons.notification`](/v2/docs/js/ons.notification.html) and [`ons.orientation`](/v2/docs/js/ons.orientation.html) for more utilities.
