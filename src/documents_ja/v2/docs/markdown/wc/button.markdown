---
title: Button
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/button
---

## ボタン ( ons-button )

[`<ons-button>`](/v2/docs/js/ons-button.html) は、ボタンを描画します。ボタンの外見を変更する場合には、`modifier` を使用します。

ボタンの外見は、プラットフォームの種類に応じて、自動で変更されます。Android 上では、マテリアルデザインに準拠したボタンとなります。

modifier に設定できる値は、次のとおりです。

* `outline` - ボタンの枠がアウトライン化され、背景は透明になります。
* `light` - ボタンを目立ちにくくします。
* `quiet` - ボタンの枠のアウトラインを消し、背景も消します。
* `cta` - ボタンを目立たせ ( Call To Action/cta )、ユーザー側にアピールします。
* `large` - 画面またはコンテナの端から端まで、ボタンを拡大します。
* `large--quiet` - large と quiet を適用したボタンになります。
* `large--cta` - large と cta を適用したボタンになります。

大きなボタンを使用する場合、こードは次のようになります。

```html
<ons-button modifier="large">
  Tap me!
</ons-button>
```

通常の `<button>` 要素と同様に、`disabled` 属性を指定することもできます。指定した場合、ボタンをクリックできません。

```html
<ons-button disabled>
  Disabled button.
</ons-button>
```
