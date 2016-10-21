---
title: Tab Bar
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/tabbar
---

## タブバー ( ons-tabbar、ons-tab )

タブバーは、[`<ons-tabbar>`](/v2/docs/js/ons-tabbar.html) コンポーネントと [`<ons-tab>`](/v2/docs/js/ons-tab.html) コンポーネントから構築されています。通常、タブバーには、3 ～ 5 つのアイテム ( アイコン、ラベルなど ) が置かれます。タブの各アイテムには、異なるページが設定してあります。

アプリ上でタブバーを使用する場合、[`<ons-tabbar>`](/v2/docs/js/ons-tabbar.html) 要素を置き、その下に、[`<ons-tab>`](/v2/docs/js/ons-tab.html) 要素を置きます ( `<ons-tabbar>` 要素の下に置けるのは、`<ons-tab>` 要素のみです )。`active` 属性を使用すれば、有効にするタブを指定できます。

`<ons-tab>` には、`icon` 属性と `label` 属性を指定できます。利用できるアイコンの詳細は、[`<ons-icon>`](/v2/docs/js/ons-icon.html) をご確認ください ( Font-Awesome、Ionicons などが利用できます )。

``` html
<ons-tabbar>
  <ons-tab page="page1.html" label="Page 1" icon="square" active="true"></ons-tab>
  <ons-tab page="page2.html" label="Page 2" icon="square"></ons-tab>
  <ons-tab page="page3.html" label="Page 3" icon="square"></ons-tab>
  <ons-tab page="page4.html" label="Page 4" icon="square"></ons-tab>
  <ons-tab page="page5.html" label="Page 5" icon="square"></ons-tab>
</ons-tabbar>
```

ラベル、または、アイコン ( `<ons-tab>` タブの子要素として ) を定義することもできます。

``` html
<ons-tab>
  <div class="tab-bar__label">
    Tab 1
  </div>
</ons-tab>
<ons-tab>
  <div class="tab-bar__icon">
    <ons-icon icon="md-face"></ons-icon>
  </div>
</ons-tab>
```

ページの指定方法は、`<ons-navigator>` のそれと同じです ( 加えて、外部 HTML ファイルを指定するか、または、`<ons-template>` を使用することもできます )。

ページ遷移時のアニメーション効果は、`<ons-tabbar>` の `animation` 属性を使用して指定できます。指定できる値は、`fade`、`slide`、`none` です。

#### ページ上部にタブバーを置く

デフォルトでは、画面の下部にタブバーは置かれますが、たとえば、Android では、通常、タブバーは画面の上部に表示されます。タブバーの置き場所を変更する場合には、`position` 属性を使用します。この属性は、コンポーネントの初期化時のみに適用されることに注意しましょう。これ以降に値を変更しても、無視されます。

```html
<ons-tabbar position="top">
  <ons-tab page="page1.html" label="Page 1" icon="fa-square" active="true"></ons-tab>
  <ons-tab page="page2.html" label="Page 2" icon="fa-square"></ons-tab>
  <ons-tab page="page3.html" label="Page 3" icon="fa-square"></ons-tab>
</ons-tabbar>
```

同一ページ上に、ツールバーとタブバーが存在する場合、ツールバーの下にタブバーが置かれます。

```html
<ons-page>
  <ons-toolbar>
    <div class="center">Page Title</div>
  </ons-toolbar>
  <ons-tabbar position="top">
    <ons-tab page="page1.html" icon="fa-square"></ons-tab>
    <ons-tab page="page2.html" icon="fa-square"></ons-tab>
    <ons-tab page="page3.html" icon="fa-square"></ons-tab>
  </ons-tabbar>
</ons-page>
```

#### タブの状態

タブの状態 ( active または inactive ) に応じて、表示するコンテンツを変更することもできます。指定する場合、`ons-tab-active` 属性と `ons-tab-inactive` 属性を、対象の要素に設定します。

```html
<ons-tab page="page.html">
  <div ons-tab-active>
    <!-- tab が active 状態の場合には、このコンテンツが表示されます。 -->
  </div>
  <div ons-tab-inactive>
    <!-- tab が inactive 状態の場合には、このコンテンツが表示されます。 -->
  </div>
</ons-tab>
```

#### タブバー提供のイベント

`<ons-tabbar>` では、3 つのイベント ( `prechange`、`postchange`、`reactive` ) を提供しています。

タブの切り替えをしたくない場合には、`prechange` イベントオブジェクトが持つ `cancel()` 関数を呼び出します。

``` javascript
ons.ready(function() {
  var myTabbar = document.querySelector("ons-tabbar")
  myTabbar.addEventListener("prechange", function(e) {
    if (e.index == 1) {
      e.cancel();
    }
  })
})
```

##### タブの状態を active にセットする、active 状態のタブ情報を取得する

指定したページを表示する場合には、[`setActiveTab(index, options)`](/v2/docs/js/ons-tabbar.html#method-setActiveTab) メソッドを使用できます。`index` パラメーターには、タブのインデックスを指定します ( インデックスは、0 から開始 )。なお、`options.keepPage` が `true` に設定してある場合、コンテンツの更新と新規ページの表示は行われません。

active 状態のタブのインデックス ( 数値 ) を取得する場合には、[`getActiveTabIndex()`](/v2/docs/js/ons-tabbar.html#method-getActiveTabIndex) メソッドを使用します。active 状態のタブが存在しない場合には、`-1` を返します。

##### タブの状態 ( タブのコンテンツが表示されている active 状態 ) を変更せずに、別のページを読み込む方法

active 状態のタブのインデックスを変更せずに、別のページを読み込む場合には、[`loadPage()`](/v2/docs/js/ons-tabbar.html#method-loadPage) メソッドを使用できます。

```javascript
tabbar.loadPage('newpage.html');
```
なお、この場合、`prechange` イベントと `postchange` イベントは発生しません。