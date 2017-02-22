---
title: Icon
framework: react
component: react/Icon
tutorial: react/Reference/icon
---

### アイコン

`Icon` コンポーネントを使用すれば、アイコンを表示できます。アイコンの画像を変更する場合には、`icon` プロパティーを使用します。

Onsen UI では、3 つのアイコンパッケージを利用できます。

* [Ionicons](http://ionicons.com/)
* [Font Awesome](https://fortawesome.github.io/Font-Awesome/icons/)
* [Material Icons](http://zavoloklom.github.io/material-design-iconic-font/icons.html)

アイコンの指定時、それぞれのパッケージを示す接頭辞を付記します。Ionicons であれば `ion-`、Font Awezome であれば `fa-`、Material Icons であれば `md-` を先頭に付けます。たとえば、マテリアルデザインの顔のアイコンを使用する場合には、`icon` プロパティーに `md-face` を指定します。

```
<Icon icon='md-face' />
```

#### ナビゲーションバーのアイコン

アイコンは、画面上部に表示されたナビゲーションバー上でも、ボタン用に使用されています。ツールバーボタンとしてアイコンを追加する場合には、`ToolbarButton` コンポーネント内に `Icon` コンポーネントを置きます ( スタイルは自動で調整されます )。

```
<Toolbar>
  <div className='center'>Title</div>
  <div className='right'>
    <ToolbarButton onClick={this.handleClick.bind(this)}>
      <Icon icon="md-more-vert" />
    </ToolbarButton>
  </div>
</Toolbar>
```

上記の例では、ツールバーの右側に、指定されたアイコンを載せたボタンが表示されます。

#### スピナー用のアイコン

スピナー用のアイコンは、処理中であること、または、データの受信中であることを、ユーザー側に示すときに使用されます。このアニメーション効果をアイコンに適用する場合には、`spin` プロパティーを使用します。

スピナー用のアイコンの表示例を、次に記します。

```
<Icon icon='fa-spinner' spin />
```
