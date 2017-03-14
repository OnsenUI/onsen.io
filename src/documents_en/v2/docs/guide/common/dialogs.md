### Dialogs

There are multiple types of dialog components available in Onsen UI: <%- @componentLink('dialog') %> for displaying a page inside a centered dialog; <%- @componentLink('alert-dialog') %> for displaying a simple message inside an alert style dialog; <%- @componentLink('popover') %> for showing some content next to a specified element or a context menu; and <%- @componentLink('modal') %> for displaying a fullscreen dialog that forbids user interaction.

Apart from that, <%- @componentLink('ons.notification') %> object offers a more handy solution for simple dialogs:

```javascript
ons.notification.alert('Hello world!'); // Basic alert
ons.notification.confirm('Are you ready?'); // OK - Cancel buttons
ons.notification.prompt('What is your name?'); // Text input

```
