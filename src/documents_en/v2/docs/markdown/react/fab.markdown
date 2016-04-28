---
title: Floating Action Button
component: react/Fab
framework: react
---

## Floating action button

The floating action button, abbreviated as *fab*, is a component in Material Design. It is a circular button often placed in the lower right corner of the screen. It stands out more than other buttons and is supposed to represent the primary action of an app.

Onsen UI also provides a component called [`SpeedDial`](SpeedDial.html) which is a floating action button that expands into a menu when tapped.

#### Basic usage

To add a floating action button in an app it is simply put as a child of a `Page` component. The `position` prop is used to define its position. To put it in the bottom right of the screen this prop should be set to the literal string `"bottom right"`.

Often an icon is put inside the button which can be achieved with the [`Icon`](Icon.html) component.

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

To get a ripple effect that expands from the point where the user taps, the `ripple` prop is used. This prop takes no value.

```
<Fab ripple />
```

#### Mini fab button

The appearance of the button can be changed with the `modifier` prop. The floating action button only has one modifier, `mini`, which makes it smaller.

```
<Fab modifier='mini' />
```
