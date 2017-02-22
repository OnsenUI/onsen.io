---
title: Switch
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/switch
---

## スイッチ/切り替えボタン ( ons-switch )

スイッチを表示する場合には、[`<ons-switch>`](/v2/docs/js/ons-switch.html) を使用します。スイッチには、"オン" と "オフ" の状態があります。[`checked`](/v2/docs/js/ons-switch.html) プロパティーを使用して、スイッチの状態を確認できます。

```html
<script>
function changed() {
  alert(document.getElementById('mySwitch').checked ? 'ON' : 'OFF');
}
</script>
<ons-switch onchange="changed()" id="mySwitch"></ons-switch>
```

switch の中には、`<input type="checkbox">` 要素を置きます。スイッチに対して行われた操作 ( 入力値 ) の確認には、`checkbox` プロパティーを使用します。
