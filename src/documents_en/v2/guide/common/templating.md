### Templates

Pages can be created in separate files and can be addressed by their path string. For example, `myNavigator.pushPage('path/to/my/page.html')`; will load `page.html` in `path/to/my/` folder. The content of that file must contain a single `<ons-page>` component with some inner elements. 

However, having multiple pages declared in the same file is sometimes more convenient. [`ons-template`](/v2/docs/js/ons-template.html) component is the solution for this. You can create as many pages as you need in your `index.html` (there and only there) by using this component. 
In this case, the template's `id` attribute replaces the path string of the page:

```html
<body>
  <ons-navigator page="page1.html"></ons-navigator>

  <ons-template id="page1.html">
    <ons-page>First page</ons-page>
  </ons-template>

  <ons-template id="page2.html">
    <ons-page>Second page</ons-page>
  </ons-template>
</body>
```

Notice that including `<script></script>` tags inside `<ons-template>` or separate files does not work. If you want to initialize a page, please check the `init` event in ["Creating a page" section](/v2/guide/js/#creating-a-page).
