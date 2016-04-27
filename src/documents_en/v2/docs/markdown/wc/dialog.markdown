---
title: Dialog
component: js/ons-dialog,js/ons-alert-dialog,angular1/ons-dialog,angular1/ons-alert-dialog
framework: js,angular1
---


### Dialogs (ons-dialog, ons-alert-dialog)

Normal dialogs are defined using the `<ons-dialog>` tag. There is also an `<ons-alert-dialog>` tag that is used to display alert dialogs.

``` html
<ons-dialog id="dialog-1">
  This is a dialog!
</ons-dialog>
```
To display a dialog, you need to get a reference to the element and execute the `show()` method.

``` javascript
document.getElementById('dialog-1').show();
```

To hide the dialog, call `hide()` method.

``` javascript
document.getElementById('dialog-1').hide();
```

#### Loading from a template

Another way to use dialogs is with the `ons.createDialog(template)` utility function. The dialog needs to be defined as a template and the function returns a `Promise` that resolves to the dialog element.

``` html
<ons-template id="dialog.html">
  <ons-dialog>
    This dialog is defined as a template.
  </ons-dialog>
</ons-template>
<script>
  ons.createDialog('dialog.html')
    .then(function(dialog) {
      dialog.show();
    });
</script>
```

#### Alert dialog

Alert dialogs work exactly like normal dialogs but they require some additional markup. With this element you can create a beautifully styled dialog without any additional CSS.

``` html
<ons-alert-dialog>
  <div class="alert-dialog-title">Warning!</div>
  <div class="alert-dialog-content">
    An error has occurred!
  </div>
  <div class="alert-dialog-footer">
    <button class="alert-dialog-button">Cancel</button>
    <button class="alert-dialog-button">OK</button>
  </div>
</ons-alert-dialog>
```

#### Show quickly with utility functions

Another way to display dialogs is with the ons.notification methods:

``` javascript
ons.notification.alert(options)
ons.notification.confirm(options)
ons.notification.prompt(options)
```

These methods all return a `Promise`. You can get the result as follows.

```
ons.notification.prompt({message: 'What is your name?'})
  .then(function(name) {
    ons.notification.alert('Hello ' + name);
  });
```
