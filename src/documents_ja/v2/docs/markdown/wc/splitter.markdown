---
title: Splitter
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/splitter
---

## splitter を使用したサイドメニュー ( ons-splitter )

メニューは、[`<ons-splitter>`](/v2/docs/js/ons-splitter.html) を使用して追加できます。また、画面が小さい端末ではスワイプ式のメニューに、画面が大きい端末ではカラム式 ( 画面の片側に固定表示 ) のレイアウトに、自動でなります。

また、メニューを追加する場合には、子要素として、`<ons-splitter-content>` 要素と `<ons-splitter-side>` 要素を追加する必要があります。 `<ons-splitter-content>` には、メインのコンテンツを指定し、`<ons-splitter-side>` には、メニューを指定します。

次の例では、メニューとして使用する side ページと、メインのコンテンツとして使用する page ページを指定します。`page` 属性を使用して、外部の HTML ファイルを指定することもできます。または、`<ons-splitter-side>` タグと `<ons-splitter-content>` タグ の中に、直接コンテンツを記述することもできます。

``` html
<ons-template id="side.html">
  <ons-page>Side menu</ons-page>
</ons-template>
<ons-template id="page.html">
  <ons-page>Main contents</ons-page>
</ons-template>
<ons-splitter>
  <ons-splitter-side swipeable page="side.html" />
  <ons-splitter-content page="page.html" />
</ons-splitter>
```

#### メインのコンテンツページの変更

`<ons-splitter-content>` に指定したコンテンツを変更する場合には、`load(page, options)` メソッドを使用できます。このメソッドは、通常、ユーザーがメニュー上のアイテムをクリックしたときに呼ばれます。

``` javascript
var content = document.querySelector('ons-splitter-content');

// settings ページへ移動します。
content.load('settings.html');
```

#### サイドメニューの設定

`<ons-splitter-side>` では、メニューの挙動制御に使用できる、複数の属性を提供します。

たとえば、`swipeable` 属性を設定すると、スワイプ操作で、メニューの表示・非表示ができます。

メニューには、2 つの表示モード ( `collapse` と `split` ) があります。たとえば、`collapse` 属性を設定した場合、指定された条件を満たすと、メニューが collapse 状態になります。メニューが collapse 状態になると、メニューは画面からは隠され、ユーザーが再びスワイプするか、または、`open()` メソッドが呼び出されるまで、そのまま非表示になります。`split` モードでは、`<ons-splitter-content>` 要素の横に、カラム形式でメニューが表示されます。

collapse 属性に値を指定すれば、モードが切り替わる条件を設定できます。たとえば、`portrait` に値を指定した場合、端末のオリエンテーションが portrait になった場合に、スワイプ ( collapse ) 形式になります。また、メディアクエリーも使用できます。

`side` 属性を使用して、メニューを表示する 「 側 ( side ) 」 を指定します。指定できる値は、`left` と `right` です。よって、画面片側のどちらかを指定できます。

##### 常に collapse

``` html
<ons-splitter-side side="left" width="30%" swipable collapse>
  Side content
</ons-splitter-side>
```

##### オリエンテーションが landscape の場合には、collapse

``` html
<ons-splitter-side side="left" width="30%" collapse='landscape'>
  Side content
</ons-splitter-side>
```

#### ons-splitter-side 提供のイベント

`<ons-splitter-side>` では、5 つのイベント ( `modechange`、`preopen`、`postopen`、`preclose`、`postclose` ) を提供しています。次の例では、イベントにリスナーを登録し、サイドメニューの表示を都度キャンセルしています。

```html
<script>
ons.ready(function() {
  document.querySelector("ons-splitter-side")
    .addEventListener('preopen', function(e) {
      e.cancel(); // cancel() 関数を呼び出し、メニューの表示をキャンセルします。
    })
});
</script>
```

