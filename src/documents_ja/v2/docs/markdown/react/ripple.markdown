---
title: Ripple
component: react/Ripple
framework: react
tutorial: react/Reference/ripple
---

## リップル ( Ripple/波紋 ) 効果

`Ripple` コンポーネントを使用すれば、マテリアルデザインのリップル効果を要素に適用することができます。リップル効果とは、ある要素をユーザーがタップしたときに、タップされた地点から波紋状のアニメーション効果が、要素全体に広がることを指します。

#### 基本的な使用方法

リップル効果を要素に適用する場合には、子として、`Ripple` コンポーネントを対象の要素下に置きます。

```
<div style={{width: 100, height: 100, backgroundColor: 'grey'}}>
  <Ripple />
</div>
```

リップル効果時の色は、デフォルトでは灰色です。カスタマイズする場合には、`color` プロパティーを使用します。また、`background` プロパティーを使用すれば、背景色もカスタマイズできます。

```
<Ripple color='red' background='blue' />
```

#### `ripple` プロパティー

`ripple` プロパティーをサポートしているコンポーネントであれば、このプロパティーを使用しても、リップル効果を適用できます。たとえば、サポートしているコンポーネントの中には、[`Button`](Button.html) コンポーネントがあります。このようなコンポーネントに関しては、`Ripple`  コンポーネントではなく、`ripple` プロパティーを設定すれば、リップル効果を適用できます。

```
<Button ripple>
  Ripple!
</Button>
```

`ripple` プロパティーをサポートしているコンポーネントは、[`Button`](Button.html)、[`ListItem`](ListItem.html)、[`Fab`](Fab.html)、[`SpeedDial`](SpeedDial.html)、[`Tab`](Tab.html) です。
