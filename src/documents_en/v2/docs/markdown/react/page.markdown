---
title: Page
component: react/Page
framework: react
---

### Page

The `Page` component serves as the root of a screen in an app. Its children will be displayed on the screen. It supports adding a navigation bar to the top of the page using the `renderToolbar` prop.

```
<Page>
  Content goes here
</Page>
```

This component can be used with the [`Navigator`](Navigator.html), [`Splitter`](Splitter.html) or [`Tabbar`](Tabbar.html) components to enable complex navigation.

#### Adding a toolbar

To add a toolbar at the top of the page the `renderToolbar` prop is used. This prop should be a function that renders to a [`Toolbar`](Toolbar.html) component.

```
<Page
  renderToolbar={() =>
    <Toolbar>
      <div className='center'>Title</div>
    </Toolbar>
  }
/>
```

#### Lifecycle events

The `Page` component supports the following props to handle lifecycle events:

* `onInit` is fired when the page is created.
* `onShow` is fired when the page is displayed on the screen.
* `onHide` is fired when the page is hidden.
* `onDestroy` is fired when the page is removed.

As an example, when a page is pushed on top of the `Navigator` the `onInit` will first be called followed by the `onShow` prop. The previous page will fire the `onHide` prop since it is being covered by the new page.

Likewise when a page is popped, `onHide` and `onDestroy` will be fired for the topmost page. Since the previous page comes back into view it will fire the `onShow` prop.

```
<Page
  onInit={() => console.log('init')}
  onShow={() => console.log('show')}
  onHide={() => console.log('hide')}
  onDestroy={() => console.log('destroy'}
/>
```
