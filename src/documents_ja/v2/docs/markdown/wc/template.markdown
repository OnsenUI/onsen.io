---
title: Template
component: js/ons-template,angular1/ons-template
framework: js,angular1
---

## 複数ページの定義 ( ons-template )

コンポーネントによっては、別の HTML ページを読み込む設定をする必要があります。たとえば、`<ons-splitter-side>` では、次のような方法で、メニューのページを指定します。

```html
<ons-splitter-side page="menu.html">
</ons-sliding-menu>
```

別のファイルを使用して、menu.html 定義する代わりに、同一のページ上で、このページのコンテンツを定義することもできます。そのような場合には、[`ons-template`](/v2/docs/js/ons-template.html) タグを使用します。

[`<ons-template>`](/v2/docs/js/ons-template.html) タグで囲った部分が、template ( 1 ページ ) を構成します。次にサンプルでは、`main.html` と名付けた template を定義しています。

```html
<ons-template id="main.html">
  <!-- ここに main.html の HTML コンテンツを記述します。 -->
  <div>
    Hello, this is the content of main.html
  </div>
</ons-template>
```
