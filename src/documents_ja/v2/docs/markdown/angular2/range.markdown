---
title: Range
component: angular2/ons-range
framework: angular2
tutorial: vanilla/Reference/range
---

## 範囲 ( 量、明るさ、程度など ) の指定 ( ons-range )

範囲を示すスライダーを表示する場合には、`<ons-range>` 要素を使用します。

``` html
<ons-range value="20"></ons-range>
<ons-range modifier="material" value="10"></range>
```

現在の値を取得する場合は、`value` プロパティーを使用します。また、このプロパティーを使用すれば、プログラム上でも、値を制御できます。

```
<ons-range id="range" value="20"></ons-range>

<script>
  console.log(document.getElementById('range').value); // 20
</script>
```

`disabled` 属性を使用すれば、この要素を無効化できます ( ユーザーは、操作できなくなります )。