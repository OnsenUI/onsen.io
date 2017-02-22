---
title: Input
component: angular2/ons-input
framework: angular2
tutorial: vanilla/Reference/input
---

## テキストの入力 ( ons-input )

`<ons-input>` は、`<input>` タグと同様の機能を提供してくれます。ただし、`<ons-input>` では、マテリアルデザインのフローティングラベルが使用され、加えて、アニメーション効果も付けられています。フローティングラベル スタイルの入力欄を使用する場合には、`placeholder` 属性と `float` 属性の両方を設定します。

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
        <div><ons-input placeholder="Type here" [(value)]="target"></ons-input></div>
        <p>Text: {{target}}</p>
      </div>
    </div>
  </ons-page>
  `
})
export class AppComponent{
  target: string = '';
}
```