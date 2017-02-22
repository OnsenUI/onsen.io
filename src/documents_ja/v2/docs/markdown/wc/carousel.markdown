---
title: Carousel
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/carousel
---

## カルーセル ( ons-carousel )

カルーセルは、複数のアイテムを表示するためのコンテナを提供してくれます。全画面表示、または、別の要素内に入れて使用できます。

[`<ons-carousel>`](/v2/docs/js/ons-carousel.html) コンポーネントは、コンテナです。このコンポーネント内に、複数の [`<ons-carousel-item>`](/v2/docs/js/ons-carousel-item.html) コンポーネントを置くことができます。各 `<ons-carousel-item>` は、カルーセル上で表示されるアイテムとなります。

#### 全画面表示のカルーセル

カルーセルを全画面表示にする場合には、 [`<ons-carousel>`](/v2/docs/js/ons-carousel.html) コンポーネントに `fullscreen` 属性を指定します。

```html
<ons-carousel fullscreen swipeable overscrollable auto-scroll>
  <ons-carousel-item>
     Carousel Item 1
  </ons-carousel-item>
  <ons-carousel-item>
     Carousel Item 2
  </ons-carousel-item>
</ons-carousel>
```

カルーセルを別のコンポーネント上において表示する場合には、CSS スタイルを使用して、横と縦の長さを指定します。横の長さが指定されていない場合、`100%` として解釈されます。

```html
<ons-carousel style="height: 200px; width: 50%" swipeable overscrollable auto-scroll>
  <div>
    This content covers the carousel.
  </div>
  <ons-carousel-item>
     Carousel Item 1
  </ons-carousel-item>
  <ons-carousel-item>
     Carousel Item 2
  </ons-carousel-item>
</ons-carousel>
```

#### カルーセル上で最初に表示するアイテム

カルーセル上で最初に表示するアイテムを指定する場合には、`initial-index` 属性を使用します。インデックス番号は、`0` から始ります。

```html
<ons-carousel style="height: 100px; width: 100px" initial-index="1" swipeable overscrollable auto-scroll>
  <ons-carousel-item>
     Carousel Item 1
  </ons-carousel-item>
  <ons-carousel-item>
     Carousel Item 2
  </ons-carousel-item>
</ons-carousel>
```

#### カルーセルのスクロール方向

カルーセルのスクロール方向は、左から右、上から下となります。いずれの場合でも、`direction` 属性で指定できます。指定できる値は、`horizontal`( デフォルト ) または `vertical` です。

自動スクロール ( Auto Scroll ) を有効にしたい場合には、`auto-scroll` 属性を指定します。どの程度ドラッグすると ( 比率で指定 )、次のアイテムに自動で移動するか指定する場合には、`auto-scroll-ratio` を使用します。

また、オーバースクロール時にアニメーション効果を付けることもできます ( カルーセルの端まで到達したときに、バウンドします )。この機能を使用する場合には、`overscrollable` を指定します。

#### 複数アイテムを同時に表示
 
`item-width` または `item-height` 属性を指定している場合、複数のアイテムを同時に表示することができます。なお、`direction` 属性を `horizontal` に指定している場合のみ、`item-width` を使用できます。また、`direction` 属性を `vertical` に指定している場合のみ、`item-height` を使用できます。デフォルトでは、これらの値は、`100%` にセットされています ( よって、デフォルトでは、コンテナ上で表示できるアイテムは、1 度に 1 個です )。

#### JavaScript による制御

次のメソッドを使用すれば、カルーセル内のアイテムを制御 ( スクロール表示 ) できます

- `next(options)`, `prev(options)`

次のアイテムまたは前のアイテムにスクロールします。また、最後のアイテムまで進んだ場合には、最初のアイテムに戻り、一方、最初のアイテムまで戻った場合には、最後のアイテムに移動します。

- `first(options)`, `last(options)`

最初のアイテムまたは最後のアイテムまで移動します。

- `setActiveIndex(index, options)`

`index` で指定したアイテムを表示します。現在使用されているインデックス番号は、`getActiveIndex()` 関数を呼べば確認できます。

これらのメソッドでは、`Promise` が使用されています。`Promise` は、処理が完了したときに 「 成功 」 ( resolve ) となります。

```javascript
myCarousel.next({
  animation: "none"
}).then(function(e) {
  // 次のカルーセルを表示します。
});
```

`<ons-carousel>` に `<ons-carousel-item>` 要素を追加、または、`<ons-carousel>` から `<ons-carousel-item>` 要素を削除した場合、`refresh()` 関数を読んで、レイアウトを更新する必要があります。なお、代わりに、`auto-refresh` 属性を使用することもできます。

#### カルーセル用のイベント

`<ons-carousel>` コンポーネントでは、次のイベントを提供しています。

- `postchange`

現在表示しているアイテムが変わったときに発火します。`carousel` を格納したオブジェクト、`activeIndex` プロパティー、`lastActiveIndex` プロパティーが、このイベントに渡されます。

  - `carousel`: carousel オブジェクトが格納されています。
  - `activeIndex`: 現在表示されているアイテムのインデックスです。
  - `lastActiveIndex`: 直近に表示されていたアイテムのインデックスです。

カルーセルの初期化時に、`auto-scroll` を有効にしていなかった場合、このイベントは発火しません。また、アイテムとコンテナのサイズ設定が異なる場合 ( 差がありすぎる場合 ) にも、発火しません。

- `refresh`

カルーセルのレイアウトが変更された場合に発火します。または、`refresh()` メソッドを呼び出したときにも発火します。

- `overscroll`

オバースクロール時に発火します。`carousel` を格納したオブジェクト、`activeIndex` プロパティー、`lastActiveIndex` プロパティーが、このイベントに渡されます。

  - `carousel`: carousel オブジェクトが格納されています。
  - `direction`: オーバスクロール時のスクロール方向です。`left`、`right`、`up`、`down` のいずれかを指定できます。
  - `activeIndex`: 現在表示されているアイテムのインデックスです。
  - `waitToReturn()`: Promise を引数として取るメソッドです。Promise の処理が完了するまで ( または失敗するまで )、スクロール処理を止めます。

次のサンプルでは、`waitToReturn(promise)` を使用して、promise 側の処理が完了するまで、オーバースクロール処理を止めています。また、ここでは、ブラウザー間の互換性を考慮して、[jQuery の Promise](https://api.jquery.com/category/deferred-object/) を使用しています。

  ```
  carousel.on('overscroll', function(event) {
    var deferred = jQuery.Deferred();
    event.waitToReturn(deferred.promise);
    window.setTimeout(function() {
      deferred.resolve();
    }, 3000);
    // 3 秒間、カルーセルの状態を保持します。
  })
  ```
