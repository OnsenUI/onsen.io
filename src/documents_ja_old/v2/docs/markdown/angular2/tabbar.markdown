---
title: Tab Bar
component: angular2/ons-tabbar,angular2/ons-tab
framework: angular2
tutorial: vanilla/Reference/tabbar
---

## タブバー ( ons-tabbar、ons-tab )

タブバーは、[`<ons-tabbar>`](/v2/docs/angular2/ons-tabbar.html) コンポーネントと [`<ons-tab>`](/v2/docs/angular2/ons-tab.html) コンポーネントから構築されています。通常、タブバー上には、3 ～ 5 つのアイテム ( アイコン、ラベルなど ) が置かれます。また、各タブには、異なるページが設定してあります。

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