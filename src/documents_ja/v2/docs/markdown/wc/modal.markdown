---
title: Modal
component: js/ons-modal,angular1/ons-modal
framework: js,angular1
---

## モーダル ( ons-modal )

ユーザー側の操作を一切禁止する場合に、[`<ons-modal>`](/v2/docs/js/ons-modal.html) を使用して、モーダルダイアログを表示できます。
通常、モーダルダイアログは、処理の進捗度を示す場合、または、ユーザー側の操作が必要なことを明示的にアピールするときに使用します。

[`<ons-modal>`](/v2/docs/js/ons-modal.html) コンポーネントでは、タグ内に、HTML のコンテンツを置くことができます。なお、`toggle()` メソッド、または、`show()` メソッドが呼ばれた場合には、そのコンテンツは黒系の色で覆われます。

``` html
<ons-modal id="myModal">
  Modal content
</ons-modal>
<script>
  document.querySelector("#myModal").toggle();
</script>
```
