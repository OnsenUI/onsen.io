---
title: Switch
component: angular2/ons-switch
framework: angular2
tutorial: vanilla/Reference/switch
---

## スイッチ/切り替えボタン ( ons-switch )

スイッチを表示する場合には、[`<ons-switch>`](/v2/docs/angular2/ons-switch.html) を使用します。スイッチには、"オン" と "オフ" の状態があります。この状態の確認には、[`checked`](/v2/docs/angular2/ons-switch.html) プロパティーを使用します。

```
@Component({
  selector: 'app',
  directives: [OnsSwitch],
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Switch Example</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <div style="text-align: center; margin: 10px;">
        <label><input type="checkbox" [(ngModel)]="target"> {{target ? 'On' : 'Off'}}</label>
        <br>
        <br>
        <ons-switch [(value)]="target"></ons-switch>
      </div>
    </div>
  </ons-page>
    `
})
export class AppComponent {
  target: boolean = true;

  constructor() {
  }
}
```