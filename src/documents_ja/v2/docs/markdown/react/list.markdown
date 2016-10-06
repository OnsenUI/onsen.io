---
title: List
component: react/List
framework: react
tutorial: react/Reference/list
---

## List

Lists are one of the most important components in mobile apps. They can be used to display data, settings pages, forms and much more.

In Onsen UI lists are used with the `List` component.

For lists with thousands of items or more we recommend to use the [`LazyList`](LazyList.html) component which is more performant.

#### Basic usage

To render a simple list the `renderRow` property is used. The property should be set to a function that renders a `ListItem` component.

The `dataSource` property should be set to an array with the data.

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: ['Cat', 'Dog', 'Horse', 'Cow', 'Goat']
    };
  }

  render() {
    return (
      <Page>
        <List
          renderRow={(animal) => <ListItem>{animal}</ListItem>}
          dataSource={this.state.animals}
        />
      </Page>
    );
  }
}
```

#### Headers

To display a header at the top of the list the `renderHeader` property and the `ListHeader` component are used. Similar to the `renderRow` property the `renderHeader` property should be set to a function that returns a `ListHeader` component.

```
<List
  dataSource={this.state.data}
  renderHeader={() => <ListHeader>Header</ListHeader>}
  renderRow={this.renderRow.bind(this)}
/>
```

There is also a `renderFooter` property that can be used to display content at the bottom of the list.

#### Tappable items

In mobile apps it is common to trigger some action or navigate to a new page when an item is tapped. In those cases it's nice if the user gets some visual indication. By using the `tappable` property the item background color will change when tapped on iOS and show a ripple effect on Android.

```
<ListItem tappable>
  Tap me!
</ListItem>
```

#### Customizing the border

By default the `ListItem` components will be separated by borders both on iOS and Android. This border can be customized with the `modifier` prop. The default border doesn't cover the whole width of the screen unless the `longdivider` modifier will be used.

```
<ListItem modifier='longdivider'>
  Long border
</ListItem>
```

There is also a `nodivider` modifier that removes the border completely.

```
<ListItem modifier='nodivider'>
  No border
</ListItem>
```

#### Item structure

Every list item is separated into three sections. This makes it easy to add things like input components, thumbnails and icons to the items without writing any custom styles. The three sections are accessed using the classes `left`, `center` and `right`.

```
<ListItem tappable>
  <label className='left'>
    <Input inputId='check' type='checkbox' />
  </label>
  <label className='center' htmlFor='check'>
    Checkbox
  </label>
</ListItem>
```

The code above will display a list item with a radio button in the left section and some text in the center section. The `<label>` tags are used to toggle the checkbox if the user taps the text content.
