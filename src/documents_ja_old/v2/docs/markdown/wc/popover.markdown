---
title: Popover
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/popover
---

## ポップオーバー ( ons-popover )

ポップオーバーは、コンポーネントに関する情報の追加表示、または、機能を追加するときに使用されます。

使用方法は、`<ons-dialog>` および `<ons-alert-dialog>` と似ています。`<ons-popover>` タグを使用して定義します。

``` html
<ons-button id="popover-target">Popover Target</ons-button>
<ons-popover>
  This is a popover!
</ons-popover>
```

ポップオーバーを表示する場合には、要素へのリファレンスを取得して、`show(target, options)` メソッドを実行します。`target` 引数には、DOM 要素、クエリーセレクタ文字列 ( Query Selector String )、`Event` オブジェクトのいずれかを指定できます。

``` javascript
var target = document.querySelector("#popover-target")
document.querySelector("ons-popover").show(target)
```

`<ons-dialog>` 要素および `<ons-alert-dialog>` 要素と同様に、ポップオーバーは、template から読み込むこともできます。その場合には、`ons.createPopover(template)` ユーティリティ関数を使用します。この関数では、`Promise` を使用して、ポップオーバーの要素を処理しています。

``` html
<ons-template id="popover.html">
  <ons-popover>
    This popover is defined as a template.
  </ons-popover>
</ons-template>
<script>
  ons.createPopover('popover.html')
    .then(function(popover) {
      popover.show();
    });
</script>
```

#### cancelable 属性

`<ons-popover>` では、`cancelable` 属性が使用できます。この属性を指定した場合、ポップオーバー以外の場所をタップしたとき、または、端末 ( Android ) 側の戻るボタンを押したときでも、ポップオーバーを閉じることができます。

``` html
<ons-popover cancelable>
  This popover can be cancelled!
</ons-popover>
```

#### ポップオーバーを表示する方向

`direction` 属性を使用して、ポップオーバーの表示方向を制御できます。指定できる値は、`up`、`down`、`left`、`right` のいずれかです。また、値を組み合わせて使用することもできます ( 各設定の間には、スペースを挿入 )。`direction` 属性を指定しない場合、適当な方向を自動で選択してくれます。

#### popover 提供のイベント

`<ons-popover>` では、次のイベントを用意しています。

- `preshow`, `prehide`

ポップオーバーを表示する前、または、非表示 ( hide ) にする前に発火します。コールバック関数では、次のプロパティーを保持するイベントオブジェクトを使用できます。

  - `popover`: popover オブジェクトを格納しています。
  - `cancel`: 処理を中止するためのメソッドです。

ポップオーバーを表示する前に、これを中止したい場合には、次のようなコードになります。

  ```javascript
  myPopover.addEventListener('preshow', function(e) {
    e.cancel();
  });
  ```

- `postshow`, `posthide`

ポップオーバーを表示した後、または、非表示 ( hide ) にした後に発火します。コールバック関数では、イベントオブジェクトを使用できます。このオブジェクトは、`popover` プロパティーを持ち、このプロパティーには、popover オブジェクトが格納されます。