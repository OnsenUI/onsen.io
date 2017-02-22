---
title: Toolbar
component: react/Toolbar
framework: react
tutorial: react/Reference/toolbar
---

### ツールバー ( Toolbar ) 

The `Toolbar` component displays a navigation bar on the top of a [`Page`](Page.html) component. It is separated into three sections (left, center and right) in order to let the buttons and title be layouted a beautiful way.

`Toolbar` コンポーネントを使用して、 [`Page`](Page.html) コンポーネントの上部に、ナビゲーションバーを表示します。ツールバーには、3 つのセクション ( left、center、right ) があります。これらのセクションを使用して、ボタンの設置、見出し付けなどを行えます。

#### ツールバーのレンダリング

ツールバーは、`Page` 要素の `renderToolbar` プロパティーへ `Toolbar` コンポーネントを返して、表示させます。コンテンツのレイアウトを指定する場合には、class ( `left`、`center`、`right` ) を使用します。

```
<Page
  renderToolbar={ () =>
    <Toolbar>
      <div className='left'>Left</div>
      <div className='center'>Center</div>
      <div className='right'>Right</div>
    </Toolbar>
  }
/>
```

これらのセクションでは、Flexbox [https://css-tricks.com/snippets/css/a-guide-to-flexbox/] を利用しています。Flexbok を使用すると、異なる画面サイズおよび異なるプラットフォームにおいても、レイアウトが崩れることがありません。

#### ツールバーボタン ( ToolbarButton )

`center` セクションには、通常、見出しを置きます。また、モバイルアプリのデザインでは、`left` セクションにボタンを、`right` セクションにツールバーを置くのが一般的です。

次のようにすれば、`ToolbarButton` コンポーネントと `Icon` コンポーネントを組み合わせて、マテリアルデザインのメニューアイコンを、ボタン上に置き、ページの右上に表示することができます。

```
<Toolbar>
  <div className='center'>My app</div>
  <div className='right'>
    <ToolbarButton onClick={this.openMenu.bind(this)}>
      <Icon icon='md-more-vert' />
    </ToolbarButton>
  </div>
</Toolbar>
```

#### 戻るボタン ( BackButton )

`BackButton` コンポーネントを使用すれば、ナビゲーションバーに戻るボタンを、簡単に配置できます。[`Navigator`](Navigator.html) コンポーネントを組み合わせて使用すれば、「 前のページに戻る 」 の処理を簡単に行えます。通常、戻るボタンは、ツールバーの `left` セクションに置きます。 

```
<Toolbar>
  <div className='left'>
    <BackButton>Back</BackButton>
  </div>
</Toolbar>
```

戻るボタンは、左矢印として、画面上に表示されます。デフォルトでは、戻るボタンは iOS 上のみで動作します ( iOS 上で、アプリの戻るボタンを押すと、前のページに戻ります )。Android ( マテリアルデザイン ) 端末のエミュレーター上では動作しません。`BackButton` コンポーネントの使用例は、[`Navigator` のリファレンス](navigator.html) をご確認ください。

#### ページ下部に表示するツールバー ( BottomToolbar )

`BottomToolbar` と呼ばれるコンポーネントも用意しています。このコンポーネントを使用すれば、ページ下部にツールバーを表示できます。このコンポーネントでは、`left`、`center`、`right` 設定するための class は使用できず、単なるコンテナとして機能します。

