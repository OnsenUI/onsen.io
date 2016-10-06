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
