---
title: Template
component: js/ons-template,angular1/ons-template
framework: js,angular1
---

## Multiple page definitions (ons-template)

Some components require you to specify another HTML page. For instance, a `<ons-splitter-side>` needs to specify a menu page in following format.

```html
<ons-splitter-side page="menu.html">
</ons-sliding-menu>
```

Instead of creating menu.html in a separate file, you can also define the page content in the same page. This can be done by creating a [`<ons-template>`](/v2/docs/js/ons-template.html) tag.

An [`<ons-template>`](/v2/docs/js/ons-template.html) tag represents a template snippet. For example, following code defines a template called `main.html`.

```html
<ons-template id="main.html">
  <!-- Here, we define the HTML content for main.html -->
  <div>
    Hello, this is the content of main.html
  </div>
</ons-template>
```
