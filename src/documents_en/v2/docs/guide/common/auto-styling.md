### Cross platform styling

Onsen UI components are automatically styled depending on the platform where the app runs. You can easily test this feature with your browser Dev Tools by switching between iOS and Android views.

Automatic styling simply applies `modifier="material"` to the components when `ons.platform.isAndroid()` is true. You can disable this feature by running `ons.disableAutoStyling()` right after including `onsenui.js` (i.e. before the app is initialized). If you disable it you may need to manually specify `modifier="material"` in every component you want to display with Material Design. You can also specify `disable-auto-styling` attribute in specific components that you don't want to auto style.

Some tools are provided to give a more accurate customization.

#### Platform utilities

<%- @componentLink('ons.platform')%> object is available with methods such as `ons.platform.isIOS()`, `ons.platform.isWebView()`, etc.

You can set a platform with `ons.platform.select('android')`, for example, in order to display Material Design on every platform. This must be called before the app is initialized (right after including `onsenui.js`).

<% if @framework not in ['react', 'vue']: %>
#### Conditional element

A conditional element called <%- @componentLink('if') %> is available to filter content depending on the platform or orientation.

```html
  <ons-if platform="android">
    This is Android
  </ons-if>
  <ons-if platform="ios other">
    This is NOT Android
  </ons-if>
```
<% end %>

With this, for example, you can display <%- @componentLink('fab') %> for Material Design and other type of button for iOS flat design.

<% if @framework is 'angular1': %>
AngularJS bindings also provide <%- @componentLink('if-platform') %> directive for this purpose:

```
<div ons-if-platform="android">
  This is Android
</div>
```
<% end %>

#### Icons shortcut

<%- @componentLink('icon') %> component provides a shortcut to make auto styling easier:

```
<<%- @mapComponentName('icon') %> icon="ion-navicon, material:md-menu" size="24px, material:20px"<%- if @framework is 'react' then ' /' else '></ons-icon' %>>
```

The second icon will be displayed when `material` modifier is present (other modifiers can be used).
