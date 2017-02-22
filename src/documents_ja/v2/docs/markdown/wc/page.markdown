---
title: Page
component: js/ons-page,angular1/ons-page
framework: js,angular1
tutorial: vanilla/Reference/page
---

## ページのコンポーネント ( ons-page )

`<ons-page>` は、ページを構成する、ルートのコンポーネントとして使用されます。このコンポーネント内のコンテンツは、スクロール形式で表示できます。

[`<ons-page>`](/v2/docs/ons-page.html) では、複数の DOM イベントを提供しています。これらのイベントは、決められたタイミングでそれぞれ発火します。
各ページの挙動を修正する場合には、これらのイベントを使用します。

* `init` イベントは、`<ons-page>` が DOM にアタッチされた後に、発火します。
* `destroy` イベントは、`<ons-page>` が DOM にアタッチされる前に、加えて、`<ons-page>` が破棄される前に、発火します。
* `show` イベントは、`<ons-page>` が表示されるたびに、発火します ( たとえば、新規のページが作成され、表示されたとき、または、既存のページが表示されたとき )。
* `hide` イベントは、`<ons-page>` が表示されなくなるたびに、発火します [ たとえば、表示されていたページが破棄 ( Destroy ) されたとき、または、表示 ( Hide ) されなくなったが、スタック上には置かれているとき ]。

ページの寿命に関わるイベントは、そのページと関連する子のページたちにも影響を与えます。親ページへの操作に応じて、子のページも、適宜、表示・非表示・破棄されます。
たとえば、`<ons-navigator>` を破棄 ( destroy ) した場合、表示中のページ ( つまり、nagivator のトップに置かれたページ ) に対してのみ、`hide` イベントが発火され、navigator のスタックに置かれた他のページに対しては、`destroy` が発火します。

``` html
<script>
document.addEventListener("init", function(event) {
  if (event.target.id == "my-page") {
    document.getElementById("my-content").innerHTML = "I am fine!";
  }
}, false);
</script>

<ons-page id="my-page">
  <div>Hello, how are you?</div>
  <div id="my-content">This content will be replaced.</div>
</ons-page>
```

#### 戻るボタンのサポート

Android では、端末側で戻るボタンを提供しています。端末側の戻るボタンを使用する場合には、[`<ons-page>`](/v2/docs/js/ons-page.html) の `onDeviceBackButton` プロパティーを使用します。

```html
<ons-page id="myPage">...</ons-page>
<script>
  ons.ready(function() {
    var myPage = document.getElementById("myPage");

    myPage.onDeviceBackButton = function() {
      console.log("Device back button is called.").
    };

    // Disable the back button handler
    myPage.onDeviceBackButton.disable();
  });
</script>
```

#### デフォルトの戻るボタン用ハンドラーの挙動を上書きする

`ons-page` コンポーネント以外にも、`ons-navigator` コンポーネントと `ons-splitter` コンポーネントでは、デフォルトの戻るボタン用のハンドラーが実装されています。
たとえば、`ons-navigator` の場合、戻るボタンを押されたときには、`popPage()` が実行されます。この挙動を無効にする場合、または、挙動をカスタマイズする場合には、`onDeviceBackButton` API を使用することもできます。

```javascript
// navigator 提供の戻るボタンのハンドラーを無効化する場合
navigator.onDeviceBackButton.disable();

// または、デフォルトの挙動を変更する場合
navigator.onDeviceBackButton.setListener(function(event) {});

// または、再び、有効化する場合
navigator.onDeviceBackButton.enable();
```

上記のコードからもわかるように、`onDeviceBackButton` API では、`disable()` メソッド、`enable()` メソッド、`isEnabled()` メソッド、`setListener(fn)` メソッドを提供しています。

親のイベントハンドラーを呼び出す場合には、`callParentHandler()` メソッドを使用します。なお、コンポーネントのハンドラーが未定義だったり、無効化されている場合には、親のイベントハンドラーが自動的に呼び出されます。

```javascript
myPage.onDeviceBackButton.setListener(function(event) {
  // 親のハンドラーを呼び出します。
  event.callParentHandler();
});
```

Onsen UI アプリにおける、戻るボタンのデフォルトの挙動は、アプリを終了させることです。これは、Android アプリ全般に適用される挙動です。

この挙動を上書きする場合、`ons.setDefaultDeviceBackButtonListener` 関数を使用します。次のサンプルでは、アプリを終了させる前に、ユーザー側に確認しています ( 下記のコードは、Cordova/PhoneGap 専用です )。

```javascript
ons.setDefaultDeviceBackButtonListener(function() {
  if (navigator.notification.confirm("Are you sure to close the app?",
    function(index) {
      if (index === 1) { // OK ボタンが押されたことを確認します。
        navigator.app.exitApp(); // アプリを終了させます。
      }
    }
  ));
});
```

#### 戻るボタン用のハンドラーを完全に無効化する

Onsen UI 提供の戻るボタン用ハンドラーを完全に無効にする場合には、`ons.disableDeviceBackButtonHandler()` 関数を使用します。Cordova/PhoneGap 提供の戻るボタン用ハンドラーを直接使用したい場合には、有用です。

```javascript
ons.ready(function() {
  ons.disableDeviceBackButtonHandler();

  // Cordova のハンドラーを使用します。
  window.document.addEventListener('backbutton', function() {
    // 戻るボタンイベントの処理を定義します。
  }, false);
});
```
