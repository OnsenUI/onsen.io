---
title: Grid
component: js/ons-row,js/ons-col,angular1/ons-row,angular1/ons-col
framework: js,angular1
---

## グリッドシステム ( ons-row、ons-col )

Onsen UI では、画面上に各要素を配置するとき、グリッドシステム ( Grid System ) を採用しています。グリッドシステムでは、スプレッドシートのように、横列と縦列に、画面を分けます。各グリッドの横幅と縦幅は指定できます。
また、2 個以上のグリッドを結合することもできます ( 横列、縦列ともに )。

レイアウトは、 [`<ons-col>`](/v2/docs/js/ons-col.html) コンポーネントと [`<ons-row>`](/v2/docs/js/ons-row.html) コンポーネントを組み合わせて構成します。横幅と縦幅は、属性、CSS などを使用して、柔軟に調節できます。

[`<ons-row>`](/v2/docs/js/ons-row.html) の中に、複数の [`<ons-col>`](/v2/docs/js/ons-col.html) が置かれている場合、デフォルトでは、これらの [`<ons-col>`](/v2/docs/js/ons-col.html) の横幅は等しくなります。もちろん、`<ons-col>` 要素の横幅は自由に指定できます。前述の例の場合、1 つの `<ons-col>` の横幅を指定すると、残りの `<ons-col>` 間で、`<ons-row>` の残りの幅が均等に分割されます。

[`<ons-row>`](/v2/docs/js/ons-row.html) では、`align` 属性をサポートしています。また、`<ons-col>` では、`align` 属性、`size` 属性、`offset` 属性をサポートしています。`size` 属性では、`px` ( ピクセル ) または `%` で値を指定します。

