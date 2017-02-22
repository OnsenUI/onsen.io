---
title: Carousel
component: react/Carousel
framework: react
tutorial: react/Reference/carousel
---

## カルーセル

表示場所のサイズは限られているが、複数のコンテンツを表示したい場合に使用できるのが、`Carousel` コンポーネントです。カルーセル上では、スワイプ操作をすれば、表示アイテムを先に進ませる ( または、前に戻る ) ことができます。

#### 基本的な使用方法

`Carousel` コンポーネントの子コンポーネントは、`CarouselItem` コンポーネントとなります ( `Carousel` コンポーネントを使用して、`CarouselItem` コンポーネントを囲います )。`Carousel` のデフォルトの挙動を制御するため、複数のプロパティーが提供されています。たとえば、スワイプ操作を有効にする場合には、`swipeable` プロパティーを指定します。このプロパティーを設定しないと、スワイプ操作は使用できません。

スワイプ操作に対応したカルーセルを作成する場合には、次のようにします。

```
<Carousel swipeable>
  {this.state.items.map((item) =>
    <CarouselItem>
      {item}
    </CarouselItem>}
</Carousel>
```

#### カルーセルの制御

ユーザー側の操作 ( たとえば、先ほどの `swipeable` ) 以外にも、`index` プロパティーを使用すれば、表示するアイテムをプログラム側で操作できます。`index` プロパティーに値を指定することで、指定したアイテムをカルーセル上で表示できます。

```
<Carousel index={this.state.carouselItemIndex}>
  ...
</Carousel>
```

#### 自動スクロール ( autoScroll )

カルーセル上で、次のアイテムを表示する場合、次のアイテムが完全に表示されるまで、ドラッグ/スワイプ操作を続けなければいけません。`autoScroll` プロパティーを使用すれば、ドラッグ/スワイプ操作により、次のアイテムがある程度表示されると、指を離しても、次のアイテムに自動で移動できます。次のアイテムに進むときに表示されるアニメーション効果 ( バウンス効果 ) は、 `autoScrollRatio` プロパティーを使用すれば修正できます。このプロパティーには、0 ～ 1 の間で、値 ( 比率 ) を指定します。値は、次のアイテムに移動するか決定する しきい値 となる 「 スワイプ度合 」 です。

```
<Carousel swipeable autoScroll autoScrollRatio={0.2}>
  ...
</Carousel>
```

#### 垂直方向のカルーセル

カルーセルのスクロール方向は、デフォルトでは、水平方向ですが、垂直方向にすることもできます。その場合、`direction` プロパティーを、`'vertical'` に設定します。

```
<Carousel direction='vertical'>
  ...
</Carousel>
```

#### アニメーション効果のカスタマイズ

`index` プロパティーを使用している場合、アニメーション効果を適用してアイテムを表示することができます。アニメーション効果をカスタマイズする場合には、`animationOptions` プロパティーを使用します。このプロパティーには、`duration` プロパティー、`delay` プロパティー、`timing` プロパティーを持つオブジェクトを格納します。

```
<Carousel
  autoScroll
  animationOptions={{duration: 2.0, timing: 'ease-in'}}>
  ...
</Carousel>
```

利用可能なプロパティーは、次のとおりです。

* `fullscreen` - カルーセルを全画面表示します。
* `overscrollable` - 最初と最後のアイテムに対しても、スワイプ操作をできるようにします。最初のアイテムより前へ、または、最後のアイテムより後ろへスワイプすると、バウンスして、元のアイテムに戻ります。
* `autoRefresh` - このプロパティーを設定した場合、アイテム数 ( `CarouselItem` の数 ) が変更されたときに、自動でカルーセルが更新されます。アイテム数が動的に変更される場合、この設定が必要となります。

#### イベントの処理

`Carousel` では、次のプロパティーを使用して、イベントを処理します。

* `onPostChange` - 表示されているアイテムが変わったときに呼び出されます。
* `onOverscroll` - 最初または最後のアイテムを超えて、スクロール操作 ( オーバースクルール ) したときに呼び出されます。

`onOverscroll` プロパティーを使用すれば、最後のアイテムにたどり着いたときに、新しいアイテムを読み込むことができます。また、たとえば、ユーザーがスワイプ操作をした場合など、`index` の値を同期させる必要があるときには、 `onPostChange` を使用できます。

```
<Carousel
  index={this.state.index} swipeable
  onPostChange={(event) => this.setState({index: event.activeIndex})}>
  ...
</Carousel>
```

