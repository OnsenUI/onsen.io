---
title: LazyList
component: react/LazyList
framework: react
---

### Lazy list

The `LazyList` component enables displaying an infinite list. This is very useful when displaying large amounts of data. The `LazyList` will only render the list items that are currently in view which is a lot more performant than rendering thousands of elements.

Under the hood it will add elements before they come into view and remove them when they disappear from view.

#### Basic usage

The `LazyList` requires two props, `length` and `renderRow`. The `length` prop should be set to the number of items in the list and the `renderRow` prop is a function that returns a list item for a specific index.

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

The list in the example above may have thousands of items but only a handful will be rendered at the same time. The number of items that are rendered depends on the screen size.

#### Variable height

With the basic syntax above only lists where every element has the same height is supported. To support lists with variable height items the `calculateItemHeight` prop must be used. This prop should be set to a function that returns the height in pixel of the item. If this prop is omitted the height of the first item will be used for all subsequent items.

```
<LazyList
  length={this.state.data.length}
  renderRow={this.renderRow.bind(this)}
  calculateItemHeight={this.calculateItemHeight.bind(this)}
/>
```
