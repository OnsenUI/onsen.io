---
title: Page
component: react/Page
framework: react
tutorial: react/Reference/page
---

## Page

The `Page` component serves as the main view of a screen in an app. Its children will be displayed on the screen. It is possible to add a navigation bar to the top of the page using the `renderToolbar` property.

```
<Page>
  Content goes here
</Page>
```

This component can be used with the [`Navigator`](Navigator.html), [`Splitter`](Splitter.html) or [`Tabbar`](Tabbar.html) components to enable complex navigation.

#### Adding a toolbar

To add a toolbar at the top of the page the `renderToolbar` property will be used. This property should be a function that renders to a [`Toolbar`](Toolbar.html) component.

```
<Page
  renderToolbar={() =>
    <Toolbar>
      <div className='center'>Title</div>
    </Toolbar>
  }
/>
```

It is also possible to use a toolbar inline using the `inline` property:

```
<Page>
  <Toolbar inline>
      <div className='center'>Title</div>
  </Toolbar>
</Page>
```

#### Styling the content of the page

To style the content of the page one can simply use the property `contentStyle`:

```
<Page contentStyle={{padding: 40}}>
  Padded Content
</Page>
```

#### Lifecycle events

The `Page` component supports the following props to handle lifecycle events:

* `onInit` is called when the page is created.
* `onShow` is called when the page is displayed on the screen.
* `onHide` is called when the page is hidden.

For example, when a page is pushed on top of the `Navigator` the `onInit` will first be called, followed by a call of the `onShow` property. The previous page will call the `onHide` prop since it is being covered by the new page.

```
<Page
  onInit={() => console.log('init')}
  onShow={() => console.log('show')}
  onHide={() => console.log('hide')}
/>
```
