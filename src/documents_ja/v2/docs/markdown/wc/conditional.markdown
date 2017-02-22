---
title: Conditional
component: js/ons-if,angular1/ons-if
framework: js,angular1
tutorial: vanilla/Reference/if
---

## 条件分岐 ( ons-if )

[`<ons-if>`](/v2/docs/js/ons-if.html) 要素を使用すれば、プラットフォームの種類または画面のオリエンテーションに応じて、異なるコンテンツを表示できます。現在、`orientation` 属性と `platform` 属性を指定できます。

```html
<ons-if orientation="landscape">
  Landscape view!
</ons-if>
<ons-if platform="android">
  This is Android.
</ons-if>
<ons-if platform="ios other">
  This is not Android.
</ons-if>
```
