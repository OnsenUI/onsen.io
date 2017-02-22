---
title: Navigator
component: js/ons-navigator,angular1/ons-navigator
framework: js,angular1
tutorial: vanilla/Reference/navigator
---

## ナビゲーター

Onsen UI では、[`<ons-navigator>`](/v2/docs/js/ons-navigator.html) を使用して、ページのナビゲーション ( 画面遷移 ) を行います。`<ons-navigator>` 自体は、ナビゲーションのコントローラーとして動作するので、表示するコンテンツの操作には、他のコンポーネントを使用します [ `<ons-navigator>` は、画面遷移 ( アニメーション効果付き ) の制御を行ってくれます。また、親子関係を設定したい場合にも使用されます ]。よって、通常は、[`<ons-toolbar>`](/v2/docs/js/ons-toolbar.html) を使用して、ページの上部にツールバーを別途設置します。

[`<ons-navigator>`](/v2/docs/js/ons-navigator.html) は、ページのスタックマネージャー兼アニメーターです ( つまり、画面遷移の制御とアニメーション効果の付与をしてくれます )。スタック ( ページの一時的な置き場所 ) に新しいページが追加されると、アニメーション効果付きの画面遷移が行われます。スタック内に置くページは、[`<ons-page>`](/v2/docs/js/ons-page.html) 要素を使用して設定します。つまり、[`<ons-navigator>`](/v2/docs/js/ons-navigator.html) 下に、[`<ons-page>`](/v2/docs/js/ons-page.html)を直接置くことができます。

通常、ページの上部には、ツールバーが置かれます。プロジェクト側では、[`<ons-page>`](/v2/docs/js/ons-page.html) 要素下に、[`<ons-toolbar>`](/v2/docs/js/ons-toolbar.html) コンポーネントを置くことになります。ツールバーには、戻るボタン、ページの見出しなどを設定できます。

#### ページを新しく表示する (pushPage)

スタックにページを新しく追加する場合には、navigator オブジェクトの `pushPage()` メソッドを使用します。ページを追加する場合には、`<ons-template>` 要素を使用します ( `id` 属性を指定すること )。

```html
<ons-navigator id="myNavigator"></ons-navigator>
<ons-template id="page2.html">
  <ons-page>Second page</ons-page>
</ons-template>
<script>
var options = {
  animation: 'slide', // 使用するアニメーション効果を指定します。
};
var myNavigator = document.querySelector("#myNavigator");
myNavigator
  .pushPage("page2.html", options)
  .then(function() {
    ons.notification.alert('A new page is shown.');
  })
</script>
```

`pushPage()` メソッドの呼び出し時に、オプションのパラメーターを指定すれば、パラメーターの受け渡しもできます。

``` javascript
myNavigator
  .pushPage("page2.html", {
    data: {
      param1: 'foo',
      param2: 'bar'
    }
  })
  .then(function(page) {
    console.log("Parameter passed: ", page.data)
  })
```

#### 前のページに戻る ( popPage )

`popPage()` メソッドを使用すれば、現在表示されいてるページをスタックから削除できます。

``` javascript
myNavigator
  .popPage()
  .then(function() {
    ons.notification.alert('New page is popped.');
  })
```

#### ページ遷移時のアニメーション効果

`pushPage()` メソッドと `popPage()` メソッドでは、アニメーション効果 ( `slide`、`lift`、`fade`、`none` のいずれか )を設定できます。デフォルトでは、アニメーション効果は、プラットフォームの種類に応じて異なります。よって、アニメーションを指定する場合には、アニメーション名に "-ios" または "-md" を接頭辞として付記します。

```javascript
// 常に、iOS スタイルの lift アニメーションを適用します。
myNavigator.pushPage("page2.html", { animation: "lift-ios" }):
```

遷移用のアニメーションをカスタマイズする場合には、`animation` パラメーターに、アニメーション用のオブジェクトを新規に格納します。詳細は、`core/src/elements/ons-navigator/animator.js` 下に置かれた `NavigatorTransitionAnimator` クラスの内容をご確認ください。

#### ページ情報を取得する

現在表示されいているページの情報は、`topPage` プロパティーを使用して、確認できます。

```javascript
// 指定したパラメーターの内容を表示します。
console.log(myNavigator.topPage.data);
```

スタックに置かれているすべてのページの情報を取得する場合には、`pages` プロパティーを使用します。

#### ページを挿入する ( ページの挟み込み )

スタック内のインデックス ( `index` パラメーター ) を指定して、`navigator.insertPage()` を実行すれば、指定した場所に、ページを挿入できます。`0` に指定した場合、スタックの最下部にページが挿入されます。負の数値を指定した場合、最上部を基準にしてカウントされます。たとえば、`-1` を指定した場合、上から 2 番目に、ページが挿入されます。`page` パラメーターと `options` パラメーターは、`pushPage()` API のそれと同じように使用できます。

#### 戻るボタンのコンポーネント ( ons-back-button )

Android 端末上でアプリが実行され、加えて、アプリが Cordova を使用している場合、端末側の戻るボタンを押すと navigator オブジェクトの `popPage()` メソッドが実行されます。

または、`<ons-back-button>` コンポーネントを使用することもできます ( 特に、iOS の場合 )。ボタンの配置場所は、ツールバーの左側になり、矢印が描画されます。 `<ons-back-button>` では、navigator 要素を自動的に見つけ、popPage() を実行するので、クリック用のイベントハンドラーを登録する必要もありません。

iOS 端末だけに戻るボタンを表示させる場合には、[`<ons-if>`](/v2/docs/js/ons-if.html) を使用します。

```html
<ons-toolbar>
  <div class="left"><ons-if platform="ios"><ons-back-button>Back</ons-back-button></ons-if></div>
  <div class="center">Page Title</div>
</ons-toolbar>
```

#### イベント

[`<ons-navigator>`](/v2/docs/js/ons-navigator.html) には、`prepush`、`postpush`、`prepop`、`postpop` のイベントが用意されています。これらのイベントは、`pushPage` または `popPage` の前または後に呼び出されます。

また、`prepush` と `prepop` のイベントオブジェックトには、`cancel()` 関数が用意されています。この関数を使用すれば、処理を中止できます。

```javascript
myNavigator.addEventListener('prepush', function(event) {
  if (needsCancel) {
    event.cancel(); // Cancel the operation
  }
});
```
