---
title: Utility Functions
component: js/ons
framework: js,angular1
---

## ユーティリティ関数 ( ons オブジェクト )

Onsen UI では、`ons` と呼ばれるオブジェクトを提供しています。`window` に連結させることができるグローバルプロパティーです。また、このオブジェクトでは、アプリ開発を効率的に行うための関数を複数提供しています。

#### ons.ready ( func )

`ons.ready()` 関数は、Onsen UI 側の初期化が完了した後に実行されます。Cordova または PhoneGap の環境下でアプリが実行されている場合、その初期化が完了するまで (`ondeviceready` イベントが発火するまで )、実行されません。

このイベントは、ページの読み込み時に、Cordova 側が実行するスプラッシュ画面 ( 設定によっては、黒の画面が表示されます ) を非表示にするときに便利です。[ 翻訳者メモ ： この 「 黒画面 」 問題は、端末側の問題とする意見もあるようです ] 次のサンプルでは、Onsen UI の読み込みが完全に完了したときに、スプラッシュ画面を非表示にしています。

```javascript
ons.ready(function() {
  // Onsen UI の読み込みが完全に完了したときに、Cordova 側のスプラッシュ画面を非表示にします。
  // API リファレンス : https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
  navigator.splashscreen.hide()
});
```

#### ons.disableAutoStatusBarFill()

iOS 7 での検証では、WebView の枠を超えて、ステータスバーを描画することが確認されています。Onsen UI では、これを自動検知して、必要なマージンを上部に挿入してくれます。ただし、場合によっては ( たとえば、Cordova の [StatusBar plugin](https://github.com/apache/cordova-plugin-statusbar) の使用時など )、この機能を無効化する必要があります。

iOS 端末に関しては、この上部のマージンを調節するため、[`ons.enableAutoStatusBarFill()`](/v2/docs/js/ons.html#method-enableAutoStatusBarFill) 関数と [`ons.disableAutoStatusBarFill()`](/v2/docs/js/ons.html#method-disableAutoStatusBarFill) 関数を、Onsen UI 側で提供しています。この調節機能は、デフォルトでは有効となっています。また、Onsen UI の初期化が完了する前 ( `ons.ready()` イベントが発火する前 ) に、これらの関数を呼び出す必要があります。

```javascript
/**
 * Onsen UI の初期化時に、呼び出す必要があります。
 */

// マージンの自動調節を無効化します ( iOS スタータスバー用 )。
ons.disableAutoStatusBarFill();

// マージンの自動調節を有効化します ( iOS スタータスバー用 )。
ons.enableAutoStatusBarFill();

ons.ready(function() { });
```
#### ons.enableAnimations() と ons.disableAnimations()

`ons.enableAnimations()` と `ons.disableAnimations()` は、検証目的および古い端末向けに提供されている関数です。アニメーション効果は、無効にされています。

#### ons.platform と ons.platform.select()

`ons.platform` オブジェクトでは、プラットフォームなどの検知に使用できるメソッドを提供しています。

- `ons.platform.isWebView()`: WebView 上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isIOS()`: iOS 端末上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isAndroid()`: Android 端末上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isIPhone()`: iPhone 端末上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isIPad()`: iPad 端末上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isBlackBerry()`: BlackBerry 端末上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isOpera()`: Opera ブラウザー上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isFirefox()`: Firefox ブラウザー上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isSafari()`: Apple Safari ブラウザー上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isChrome()`: Google Chrome ブラウザー上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isIE()`: Internet Explorer ブラウザー上でアプリが実行されている場合には、`true` を返します。
- `ons.platform.isIOS7()`: iOS のバージョンが 7 以降の場合には、`true` を返します。

また、検証用とはなりますが、`ons.platform.select(platform)` を使用すれば、プラットフォームを選択できます。`platform` パラメーターには、対象要素のレンダリングを行うプラットフォームを指定します。指定できる値は、"opera"、"firefox"、"safari"、"chrome"、"ie"、"android"、"blackberry"、"ios"、"wp" のいずれかです。