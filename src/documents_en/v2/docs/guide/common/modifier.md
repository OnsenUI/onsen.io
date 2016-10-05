### Using Modifier

Modifier is a cross-component way to provide customizability for Onsen UI components. When a component is defined with a `modifier`, it will have a separate class namespace so that you can apply custom styles to the component. Also, some components have several preset modifiers to change the appearance.

For example, each of the following buttons have different look. To change modifiers dynamically, please manipulate `modifier` attribute from JavaScript.

<% button = @mapComponentName('button') %>

```html
<<%- button %> modifier="quiet">Quiet</<%- button %>>
<<%- button %> modifier="light">Light</<%- button %>>
<<%- button %> modifier="large">Large</<%- button %>>
<<%- button %> modifier="cta">Call To Action</<%- button %>>
<<%- button %> modifier="material">Material Design</<%- button %>>
```
