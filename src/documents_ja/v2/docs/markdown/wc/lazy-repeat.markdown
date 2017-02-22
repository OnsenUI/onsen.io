---
title: Lazy Repeat (or Infinite Scrolling)
component: js/ons-lazy-repeat,angular1/ons-lazy-repeat
framework: js,angular1
tutorial: vanilla/Reference/lazy-repeat
---

## LazyList ( 別名 「 無限スクロール 」、ons-lazy-repeat )

[`ons-lazy-repeat`](/v2/docs/js/ons-lazy-repeat.html) では、現在表示されているアイテムのみ、DOM 上に読み込まれています。表示されていない要素は、DOM 上から自動で削除されます。`ons-lazy-repeat` を使用すれば、パフォーマンスをほぼ劣化させずに、数百万の要素をレンダリングできます。次のサンプルでは、100,000,000 個のレコードを保持している、簡単な一覧を表示しています。

``` html
<script>
  window.addEventListener('load', function() {
    var lazyRepeat = document.querySelector('#list');
    lazyRepeat.delegate = {
      calculateItemHeight: function(index) {
       // 高さ設定が要素に依存する場合、それに応じた設定をします。
       return 40;
     },
     createItemContent: function(index, template) {
       var dom = template.cloneNode(true);
       dom.innerText = "List item #" + index;
       return dom;
     },
     countItems: function() {
        // アイテム数を返します。
       return 100000000;
     },
     destroyItem: function(index, item) {
       // アイテムが削除されたときに、こちらのメソッドを呼び出します。
       console.log('Destroyed item with index: ' + index);
     }
    };
  });
</script>
<ons-list id="list">
  <ons-lazy-repeat>
    <ons-list-item></ons-list-item>
  </ons-lazy-repeat>
</ons-list>
```

`<ons-lazy-repeat>` の使用時には、上記のように、デリゲートオブジェクト ( Delegate Object ) を作成して、`delegate` プロパティーにセットします。

* `createItemContent` では、渡されたインデックを元に、一覧に表示するアイテムのコンテンツを作成していきます。HTML 要素を返します。

* `calculateItemHeight` は、アイテムの高さを返します。この設定は、アイテム毎に異なってきます。この設定は任意です。省略された場合。最初のアイテムの高さが自動で計算され、後続のアイテムにも同じ設定が適用されます。

* `countItems` は、一覧上にあるアイテムの総数を返します。

* `destroyItem` は、任意のメソッドです。このメソッドは、アイテムが非表示 ( アンロード/Unload ) にされるたびに発火します。このメソッドを使用すれば、要素の破棄 ( destroy ) とイベントリスナーの登録解除 ( メモリーリークを回避するため ) をすることができます。

##### 一覧に更新 ( Refresh )

データに更新がある場合、コンポーネント側にそれを伝えることが必要となります。この場合、`refresh()` メソッドを呼び出します。

```
document.querySelector('#list').refresh();
```

##### Ajax を使用したコンテンツの表示

動的なコンテンツをサーバーから取得して、表示することもできます ( `XMLHttpRequest` オブジェクトを使用 )。jQuery を使用した例を、次に示します。

```javascript
createItemContent: function(index, oldContent) {
  if (oldContent) {
    return oldContent;
  }

  var $element = $("<div><span style='opacity: 0.7;'><ons-icon icon='fa-spinner' spin='true'></ons-icon> Loading bacon...</span></div>");

  var request = $.getJSON('https://baconipsum.com/api/?type=meat-and-filler&sentences=1&callback=?', function(data) {
    $element.text(data[0]);
  });

  $element.data('request', request);
  return $element[0];
},
destroyItemContent: function(index, element) {
  var request = $element.data('request');
  request.abort();
}
```
