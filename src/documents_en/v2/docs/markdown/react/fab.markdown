---
title: Floating Action Button
component: react/Fab
framework: react
tutorial: react/Reference/fab
---

## Floating action button

The floating action button, abbreviated as *fab*, is a component in Material Design. It is a circular button usually placed in the lower right corner of the screen. This button stands out more than other buttons and is supposed to represent the primary action of an app.

Onsen UI also provides a component called [`SpeedDial`](SpeedDial.html) which is a floating action button that expands into a menu when tapped.

#### Basic usage

To add a floating action button in an app simply put it as a child of a `Page` component. The `position` property is used to define its position. For example, to put the button in the bottom right of the screen this property one needs to set the property to `"bottom right"`.

It is also possible to put an  icon inside the button using [`Icon`](Icon.html) component:

```
<Page>
  <Fab
    position='bottom right'
    onClick={this.handleClick.bind(this)}>
    <Icon icon='md-plus' />
  </Fab>
</Page>
```

#### Ripple effect

To get a ripple effect that expands from the point where the user taps, the `ripple` property is used.

```
<Fab ripple />
```

#### Mini fab button

The appearance of the button can be changed with the `modifier` property. The floating action button only has one modifier, `mini`, which makes it smaller.

```
<Fab modifier='mini' />
```
