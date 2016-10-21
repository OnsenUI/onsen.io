---
title: Speed Dial
component: react/SpeedDial
framework: react
tutorial: react/Reference/speed-dial
---

## スピードダイアル ( SpeedDial )

*SpeedDial* コンポーネントは、マテリアルデザインのコンポーネントです。フローティングアクションボタン ( fab ) をタップ時に、表示されるメニューです。重要度が等しいアイテム ( 選択肢 ) を、同メニューを使用して、表示する場合に有用です。

通常のフローティングアクションボタンの表示には、[`Fab`](Fab.html) コンポーネントを使用します。

#### 基本的な使用方法

`SpeedDial` コンポーネントで表示する各メニューアイテムは、`SpeedDialItem` コンポーネントを使用して定義します。また、`SpeedDial` コンポーネントを使用する場合には、`Fab` コンポーネントも必要になります。

`SpeedDial` コンポーネントの表示場所を指定する場合には、`position` プロパティーを使用します。デフォルトでは、画面右下に表示されますが、明示的に、`position` プロパティーを `"bottom right"` にしても、同じ結果が得られます。

また、SpeedDial コンポーネントを置く `Page` コンポーネントには、`renderFixed` プロパティーを使用することもできます。

```
<Page
  renderFixed={() => (
    <SpeedDial position='bottom right'>
      <Fab>A</Fab>
      <SpeedDialItem onClick={this.doSomething.bind(this)}>B</SpeedDialItem>
      <SpeedDialItem onClick={this.doSomethingElse.bind(this)}>C</SpeedDialItem>
    </SpeedDial>
  )}>
</Page>
```
