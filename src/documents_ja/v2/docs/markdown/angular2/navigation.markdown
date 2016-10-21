---
title: Navigator
component: angular2/ons-navigator
framework: angular2
tutorial: vanilla/Reference/navigator
---

## ナビゲーション ( navigation ) 

Onsen UI では、[`<ons-navigator>`](/v2/docs/angular2/ons-navigator.html) を使用して、ページのナビゲーション ( 画面遷移 ) を行います。`<ons-navigator>` 自体は、ナビゲーションのコントローラーとして動作するので、表示するコンテンツ自体は、他のコンポーネントを使用して表示します [ `<ons-navigator>` は、画面遷移 ( アニメーション効果付き ) 関連の制御を行ってくれます。また、他の要素と親子関係を設定したい場合にも使用されます ]。よって、通常は、[`<ons-toolbar>`](/v2/docs/angular2/ons-toolbar.html) を使用して、ページの上部にツールバーを別途設置します。

```
@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Page2</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content" no-status-bar-fill>
      <div style="text-align: center; margin: 10px">
        <ons-button (click)="push()">push</ons-button>
        <ons-button (click)="pop()">pop</ons-button>
        <p>page2</p>
      </div>
    </div>
  `
})
export class PageComponent {
  constructor(private _navigator: OnsNavigator, private _params: PageParams) {
    console.log('parameters:', _params.data);
  }

  push() {
    this._navigator.pushComponent(PageComponent, {animation: 'slide'}, {random: Math.random()});
  }

  pop() {
    this._navigator.popComponent();
  }
}

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-navigator>
    <ons-page>
      <ons-toolbar>
        <div class="center">Page</div>
      </ons-toolbar>
      <div class="page__background"></div>
      <div class="page__content" no-status-bar-fill>
        <div style="text-align: center; margin: 10px">
          <ons-button (click)="push()">push</ons-button>
        </div>
      </div>
    </ons-page>
  </ons-navigator>
  `
})
export class AppComponent {
  @ViewChild(OnsNavigator) private _navigator: OnsNavigator;

  constructor() { }

  push() {
    this._navigator.pushComponent(PageComponent, {animation: 'none'}, {key: 'value'});
  }
}
```