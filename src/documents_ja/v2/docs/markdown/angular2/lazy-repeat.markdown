---
title: Lazy Repeat (or Infinite Scrolling)
component: angular2/ons-lazy-repeat
framework: angular2
tutorial: vanilla/Reference/lazy-repeat
---

## LazyList ( 別名 「 無限スクロール 」、ons-lazy-repeat )

[`ons-lazy-repeat`](/v2/docs/angular2/ons-lazy-repeat.html) では、現在表示されているアイテムのみ、DOM 上に読み込まれます。表示されていない要素は、DOM 上から自動で削除されます。`ons-lazy-repeat` では、パフォーマンスをほぼ劣化させずに、数百万の要素をレンダリングすることができます。

```
@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-page class="page">
    <ons-toolbar>
      <div class="left"></div>
      <div class="center">Lazy Repeat</div>
      <div class="right"><ons-toolbar-button (click)="add()">Add</ons-toolbar-button></div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <ons-list>
        <ons-list-item *onsLazyRepeat="let item of items; let i = index">
          <div class="center">
            #{{i}} msg: {{item.msg}}
          </div>
        </ons-list-item>
      </ons-list>
    </div>
  </ons-page>
  `
})
export class AppComponent {
  public items: any[];

  @ViewChild(OnsLazyRepeat) lazyRepeat;

  constructor() {
    this.items = [];
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        msg: 'Hello!'
      });
    }
  }

  add() {
    this.items.unshift({
      msg: 'Bonjour!'
    });
    this.lazyRepeat.refresh();
  }
}
```