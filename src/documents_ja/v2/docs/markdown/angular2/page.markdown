---
title: Page
component: angular2/ons-page
framework: angular2
tutorial: vanilla/Reference/page
---

## Page (ons-page)

`<ons-page>` should be used for the root component of each page. The content inside page component is scrollable.

Please use the following scaffolding for defining a page, including two `div` tags with `page__background` and `page__content` class.

```
@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Input</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <div style="padding: 10px">
        Page content
      </div>
    </div>
  </ons-page>
  `
})
```