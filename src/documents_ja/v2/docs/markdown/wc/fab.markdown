---
title: Floating Action Button
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/fab
---


## フローティングアクションボタン ( ons-fab )

フローティングアクションボタン ( fab ) は、マテリアルデザインの仕様です。このボタンは、いわゆる、CTA ( call-to-action/ユーザー側に行動を促すこと ) ボタンです。通常、画面右下に置かれます。[`<ons-fab>`](/v2/docs/js/ons-fab.html) タグを使用して、fab ボタンを描画します。また、[`<ons-speed-dial>`](/v2/docs/js/ons-speed-dial.html) コンポーネント ( スピードダイアル/Speed Dial を描画 ) を組みわせることができます。

`<ons-fab>` タグを挿入するだけで ( position 属性を指定 )、この要素を使用できます。リップル効果 ( Ripple/波紋 ) を適用する場合には、`ripple` 属性を追加します。

``` html
<ons-fab position="bottom right" ripple></ons-fab>
```

ボタンがクリックまたはタップされたときに、[`<ons-fab>`](/v2/docs/js/ons-fab.html) は `click` イベントを発火させます。

```javascript
document.querySelector('ons-fab').addEventListener('click', function(event) {
  // ボタンのクリック時の処理を定義します。
});
```
