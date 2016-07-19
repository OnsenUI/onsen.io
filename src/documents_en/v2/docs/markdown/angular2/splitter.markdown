---
title: Splitter
component: angular2/ons-splitter-content,angular2/ons-splitter-side
framework: angular2
tutorial: vanilla/Reference/splitter
---

## Splitter Side Menu (ons-splitter)

A menu can be added using the `<ons-splitter>`. For small devices it can be used to create a swipeable menu, but for larger screens it can automatically display a column layout.

You need to add `<ons-splitter-content>` and `<ons-splitter-side>` elements as children. The `<ons-splitter-content>` contains the main content and the `<ons-splitter-side>` is used for the menu.

```
@Component({
  selector: 'ons-page',
  directives: [ONS_DIRECTIVES],
  template: `
    <ons-toolbar>
      <div class="center">Content Page</div> 
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      contents
    </div>
  `
})
class ContentPageComponent {
}

@Component({
  selector: 'ons-page',
  directives: [ONS_DIRECTIVES],
  template: `
    <ons-toolbar>
      <div class="center">Left Page</div> 
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      Left
    </div>
  `
})
class SidePageComponent {
}

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-splitter>
    <ons-splitter-side [page]="sidePage" side="left" width="200px" style="border-right: 1px solid #ccc">
    </ons-splitter-side>
    <ons-splitter-content [page]="contentPage">
    </ons-splitter-content>
  </ons-splitter>
  `
})
export class AppComponent {
  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;
}
```