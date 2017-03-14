### CSS Definitions

Onsen UI styles are defined in `onsenui.css` and `onsen-css-components.css`. They are written in pure CSS using some extra features provided by [cssnext](http://cssnext.io/).

`onsenui.css` is a core CSS module that defines styles for the custom elements. The source code exists under [`core/css` directory](https://github.com/OnsenUI/OnsenUI/tree/master/core/css). `onsen-css-components.css` contains CSS definitions for CSS components. The source code exists in [`css-components/src`](https://github.com/OnsenUI/OnsenUI/tree/master/css-components/src).

A local tool is included in Onsen UI core (`onsenui`) for previewing changes in Onsen CSS Component. This tool, located under [onsenui/css-components-src/](https://github.com/OnsenUI/OnsenUI-dist/tree/2.2.0/css-components-src) directory in a local instalation, is also able to generate a new `onsenui-css-components.css` file that must be imported in the project.

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
