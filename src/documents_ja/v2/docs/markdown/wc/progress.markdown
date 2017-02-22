---
title: Progress
component: js/ons-progress-bar,js/ons-progress-circular,angular1/ons-progress-bar,angular1/ons-progress-circular
framework: js,angular1
tutorial: vanilla/Reference/progress
---

## 進捗度の表示 ( ons-progress )

Onsen UI では、進捗度を示す、2 つの要素 ( `<ons-progress-bar>` と `<ons-progress-circular>` ) を提供しています。名前が示すとおり、前者は線 ( linear ) 形式、後者は円 ( circular ) 形式で、進捗度を表示します。

これらの要素には、`value` 属性と `secondary-value` 属性を使用することができます。これらの属性には、0 から 100 の間で値を指定します。`secondary-value` は、2 つの異なる処理が同時に実行される場合に使用します。たとえば、ストリーミング形式のビデオプレーヤーを起動している場合、`value` は、現在の上映経過時間に、`secondary-value` は、バッファリング状況に使用します。

また、`indeterminate` 属性は、処理が進行中であることを示すのに役立ちます ( 進捗度がわからない場合に、アニメーションを繰り返すときに便利です )

```html
<ons-page>
  <ons-toolbar>
    <div class="center">Progress</div>
  </ons-toolbar>

  <ons-progress-bar value="10"></ons-progress-bar>

  <div style="margin: 20px auto; width: 320px;">
    <p>Loading stuff...</p>
    <ons-progress-bar value="20" secondary-value="50"></ons-progress-bar>
  </div>

  <ons-progress-bar indeterminate></ons-progress-bar>
  <ons-progress-circular value="10"></ons-progress-circular>
  <ons-progress-circular value="20" secondary-value="50"></ons-progress-circular>
  <ons-progress-circular indeterminate></ons-progress-circular>
</ons-page>
```
