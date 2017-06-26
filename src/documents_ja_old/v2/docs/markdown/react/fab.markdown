---
title: Floating Action Button
component: react/Fab
framework: react
tutorial: react/Reference/fab
---

## フローティングアクションボタン 

フローティングアクションボタン ( Floating Action Button/ *fab* ) とは、マテリアルデザインのコンポーネントです。丸型のボタンで、画面右下に、通常置かれます。このボタンは、他のボタンよりも存在感があり、ユーザー側に最もアピールしたい操作を示すために使用します。

Onsen UI では、[`スピードダイアル/SpeedDial`](SpeedDial.html) と呼ばれるコンポーネントも提供しています。このコンポーネントは、fab がタップされたときに表示されるメニューです。

#### 基本的な使用方法

フローティングアクションボタンを追加する場合には、`Page` コンポーネントの `renderFixed` プロパティーも使用します。置き場所の指定には、`position` プロパティーを使用します。たとえば、画面右下にボタンを置く場合には、このプロパティーに `"bottom right"` を指定します。

また、[`Icon`](Icon.html) コンポーネントを使用すれば、ボタンの上にアイコンを置くこともできます。

```jsx
<Page
  renderFixed={() => (
    <Fab
      position='bottom right'
      onClick={this.handleClick.bind(this)}>
      <Icon icon='md-plus' />
    </Fab>
  )}>
</Page>
```

#### リップル ( Ripple/波紋 ) 効果

リップル効果 ( タップ地点から波紋が広がります ) を適用する場合には、`ripple` プロパティーを使用します。

```jsx
<Fab ripple />
```

#### 小さめの fab

ボタンの外見は、`modifier` プロパティーを使用すれば変更できます。fab の modifier には、1 つだけ指定できる値があります。それは、`mini` です。ボタンのサイズを小さくするときに使用します。

```jsx
<Fab modifier='mini' />
```
