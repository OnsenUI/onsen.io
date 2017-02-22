---
title: Lazy List (or Infinite Scrolling)
component: react/LazyList
framework: react
tutorial: react/Reference/lazy-list 
---

## LazyList

`LazyList` コンポーネントを使用すれば、無限に続く、一覧表示ができます。大量のデータを表示する場合に有用です。この一覧では、表示されているアイテムのみが、レンダリングされています。数千の要素を、すべてレンダリングするよりも現実的です。

一覧の端までたどり着くと、表示する要素が追加され、一覧上で表示されなくなると、要素が削除されます。

#### 基本的な使用方法

`LazyList` コンポーネントの使用時には、2 つのプロパティー ( `length`、`renderRow` ) を設定する必要があります。`length` プロパティーには、一覧のアイテム数を指定します。`renderRow` プロパティーは、関数であり、指定されたインデックスのアイテムを返します。

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getHugeAmountOfData()
    };
  }

  renderRow(idx) {
    return (
      <ListItem key={idx}>
        {this.state.data[idx]}
      </ListItem>
    );
  }

  render() {
    return (
      <Page>
        <LazyList
          length={this.state.data.length}
          renderRow={this.renderRow.bind(this)}
        />
      </Page>
    );
  }
}
```

上記の一覧では、数千のアイテムを表示することができますが、一度にレンダリングされるアイテムは数個です。レンダリングされるアイテムの数は、画面のサイズに依存します。

#### 「 高さ 」 を指定する変数

前述の基本的な使用方法では、一覧で使用する要素には、同じ高さが適用されています。さまざま高さのアイテムを表示する場合、`calculateItemHeight` プロパティーを使用します。ピクセル単位でアイテムの高さを返す関数を定義して、このプロパティーを、その関数に対してセットします。このプロパティーを使用しない場合、最初のアイテムの高さが、残りのアイテムに対しても適用されます。

```
<LazyList
  length={this.state.data.length}
  renderRow={this.renderRow.bind(this)}
  calculateItemHeight={this.calculateItemHeight.bind(this)}
/>
```
