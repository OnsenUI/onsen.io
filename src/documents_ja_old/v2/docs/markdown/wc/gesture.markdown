---
title: Gesture Detection
component: js/ons-gesture-detector,js/ons.GestureDetector,angular1/ons-gesture-detector,angular1/ons.GestureDetector
framework: js,angular1
---

## ジャスチャー/指操作 ( ons-gesture-detector )

Onsen UI では、ジェスチャーの検知には、[Hammer.js](http://hammerjs.github.io/) を使用しています。ジャスチャーを検知するためには、[`<ons-gesture-detector>`](/v2/docs/js/ons-gesture-detector.html) コンポーネントを使用して、対象の DOM 要素をラップ ( Wrap ) します。次のようなコードで、指定した要素上で行われる、左方向へのスワイプを検知できます。

```html
<ons-gesture-detector>
  <div id="detect-area" style="width: 100px; height: 100px;">
    Swipe Here
  </div>
</ons-gesture-detector>
<script>
  document.getElementById("detect-area").addEventListener("swipeleft", function(e) {
    console.log('Swipe left is detected.');
  });
</script>
```

#### サポート対象のジェスチャー/指操作

サポート対象のジェスチャーは、次のとおりです。

  - ドラッグ関連のジャスチャー : `drag`、`dragleft`、`dragright`、`dragup`、`dragdown`
  - ホールド ( 長押し ) 関連のジャスチャー : `hold`、`release`
  - スワイプ関連のジャスチャー : `swipe`、`swipeleft`、`swiperight`、`swipeup`、`swipedown`
  - タップ関連のジェスチャー : `tap`、`doubletap`
  - ピンチ ( つまむような指操作 ) 関連のジェスチャー : `pinch`、`pinchin`、`pinchout`
  - 他のジャスチャー : `touch`、`transform`、`rotate`
