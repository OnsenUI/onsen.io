### The `ons` object

Onsen UI not only provides custom elements, it also exposes an object called <%- @componentLink('ons') %> with a lot of useful functions attached to it. The `ons` object is part of the core library and can be imported in the bindings.

The following example uses `ons.ready(fn)` which waits until the app is completely loaded before executing a callback function. Inside the callback, it is calling `ons.notification.alert()` to display a alert dialog.

``` javascript
ons.ready(function() {
  // Onsen UI is now initialized
  ons.notification.alert('Welcome to Onsen UI!');
});
```

See also <%- @componentLink('ons.platform') %>, <%- @componentLink('ons.notification') %> and <%- @componentLink('ons.orientation') %> for more utilities.
