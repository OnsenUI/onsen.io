---
title: Icon
framework: react
component: react/Icon
---

### Icon

Icons are displayed with the `Icon` component. It supports the `icon` prop that is used to select the icon.

In Onsen UI three different icon suites are included:

* [Ionicons](http://ionicons.com/)
* [Font Awesome](https://fortawesome.github.io/Font-Awesome/icons/)
* [Material Icons](http://zavoloklom.github.io/material-design-iconic-font/icons.html)

They are separated by prefixes: `ion-` for Ionicons, `fa-` for Font Awezome and `md-` for Material Icons. To display a Material Design face icon the `icon` prop should be set to `md-face`.

```
<Icon icon='md-face' />
```

#### Icons in navigation bar

Icons are often used for the buttons in the top navigation bar. To add icons to toolbar buttons the `Icon` component is placed inside the `ToolbarButton` and will be styled accordingly.

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

The code above will show a button with an icon in the right-hand side of the toolbar.

#### Spinning icon

Spinning icons are often used to tell the user that some action is running or that the program is waiting for some data. To add a spin animation to the icons the `spin` prop is used.

The following code displays a spinning loader icon.

```
<Icon icon='fa-spinner' spin />
```
