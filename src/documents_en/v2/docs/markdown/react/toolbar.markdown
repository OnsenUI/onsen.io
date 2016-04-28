---
title: Toolbar
component: react/Toolbar
framework: react
---

### Toolbar

The `Toolbar` component displays a navigation bar on the top of a [`Page`](Page.html) component. It is separated into three sections (left, center and right) in order to let the buttons and title be layouted a beautiful way.

#### Rendering a toolbar

A toolbar is displayed on the screen by return the `Toolbar` component in the `renderToolbar` property of the `Page` element. To layout the content the `left`, `center` and `right` classes are used.

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

The three sections are using flexbox [https://css-tricks.com/snippets/css/a-guide-to-flexbox/] in order to ensure good behavior across different screen sizes and platforms.

#### Toolbar buttons

While the `center` section is normally reserved for a title, it is a common in mobile app design to put buttons in the `left` and `right` sections of the toolbar.

By using the `ToolbarButton` and `Icon` components we can add a button with a Material Design menu icon to the top right of the page.

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

#### Back button

The `BackButton` component provides an easy way to put a back button in the navigation bar. Used in conjunction with the [`Navigator`](Navigator.html) component it provides an easy way to return to the previous page. It is often put in the `left` section of the toolbar.

```
<Toolbar>
  <div className='left'>
    <BackButton>Back</BackButton>
  </div>
</Toolbar>
```

It renders as an arrow facing left. By default the content of the back button is only displayed on iOS,  but not in Material Design to emulator native behavior. See the [`Navigator` guide](navigator.html) for a more complete example using the `BackButton` component.

#### Bottom toolbar

There is also a a component called `BottomToolbar`,  which displays a toolbar on the bottom of the page. This component serves as a simple container without supportng the `left`, `center` and `right` classes.
