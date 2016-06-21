---
title: Tab Bar
component: angular2/ons-tabbar,angular2/ons-tab
framework: angular2
tutorial: vanilla/Reference/tabbar
---

## Tab Bar (ons-tabbar, ons-tab)

A tab bar is composed of a [`<ons-tabbar>`](/v2/docs/angular2/ons-tabbar.html) component and [`<ons-tab>`](/v2/docs/angular2/ons-tab.html) components. Usually a tab bar has three to five items, and they are displayed with icons and labels. Each tab bar item is assigned to the different page.

```
@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Page</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <div style="text-align: center; margin: 10px">
        <ons-button (click)="push()">push</ons-button>
        <ons-button (click)="pop()">pop</ons-button>
        <p>page2</p>
      </div>
    </div>
  `
})
export class PageComponent {
  constructor() {
  }
}

@Component({
  selector: 'app',
  directives: [OnsTabbar, OnsTab],
  template: `
  <ons-tabbar>
    <ons-tab label="Page1" icon="ion-home"></ons-tab>
    <ons-tab label="Page2" icon="ion-help"></ons-tab>
    <ons-tab label="Page3" icon="ion-stop"></ons-tab>
  </ons-tabbar>
  `
})
export class AppComponent {
  @ViewChild(OnsTabbar) _tabbar: OnsTabbar; 

  constructor() { }
}
```