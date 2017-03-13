### Device Back Button

For Android devices, Cordova fires a `backbutton` event on hardware back button. It is important to understand that this event is **fired by Cordova** so it requires `cordova.js` file or similars (`loader.js` in Monaca) to be included in the app. Since it cannot be tested in browsers without Cordova, you can use [Monaca Debugger](https://monaca.io/debugger.html) for this purpose.

Onsen UI sets handlers with default behavior for Android back button in certain elements:

* Dialogs: Closes the dialog if it's cancelable (except Modals).
* Navigator: Pops a page if the page stack is not empty.
* Splitter: Closes the menu if it's open.

If the conditions are not met, these elements will call the parent element's handler. The final global handler closes the app.

While this is probably the desired behavior for many apps, Onsen UI allows to modify these handlers for better customization. To modify the app global handler (closing the app), the <%- @componentLink('ons') %> object provides few methods:

```javascript
// Disable or enable
ons.disableDeviceBackButtonHandler();
ons.enableDeviceBackButtonHandler();

// Set a new handler
ons.setDefaultDeviceBackButtonListener(function(event) {
  ons.notification.confirm('Do you want to close the app?') // Ask for confirmation
    .then(function(index) {
      if (index === 1) { // OK button
        navigator.app.exitApp(); // Close the app
      }
    });
});
```

Apart from this, the mentioned elements together with `<%- @mapComponentName('page') %>` element expose a way to modify their own handler:

<% if @framework is 'vue': %>
```html
<v-ons-page @deviceBackButton="..."></v-ons-page>
<v-ons-navigator @deviceBackButton="..."></v-ons-page>
<v-ons-dialog @deviceBackButton="..."></v-ons-page>
```

The default behavior of each component can be prevented (and overriden) by running `$event.preventDefault()` or using the `prevent` modifier shorthand for event listeners in Vue:

```html
<v-ons-navigator @deviceBackButton.prevent="resetPageStack()"></v-ons-page>
```
<% else if @framework is 'react': %>
```javascript
<Page onDeviceBackButton={(event) => this.doSomething()}>
  ...
</Page>
```
<% else: %>
```javascript
var myNavigator = document.getElementById('my-navigator');
myNavigator.onDeviceBackButton.disable(); // Disables back button handler
myNavigator.onDeviceBackButton.enable(); // Enables back button handler
myNavigator.onDeviceBackButton.isEnabled(); // Returns true if enabled
myNavigator.onDeviceBackButton.destroy(); // Destroys the current handler

var page = myNavigator.topPage;
page.onDeviceBackButton = function(event) {
  console.log('Hardware back button!');
  event.callParentHandler(); // Calls the parent handler (navigator handler in this case)
};
```
<% end %>

The `event` object provided to this handler also contains a `event.callParentHandler()` method.

