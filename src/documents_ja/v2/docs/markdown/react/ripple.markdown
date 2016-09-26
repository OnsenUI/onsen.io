---
title: Ripple
component: react/Ripple
framework: react
tutorial: react/Reference/ripple
---

## Ripple

The `Ripple` component is used to add a Material Design ripple effect to an element. This effect will expand from the location point the user taps until it covers the whole element.

#### Basic usage

To add a ripple effect to an element the `Ripple` component should be placed as a child.

```
<div style={{width: 100, height: 100, backgroundColor: 'grey'}}>
  <Ripple />
</div>
```

The color of the ripple effect defaults to gray. It can be customized using the `color` property. It is also possible to customize the background color with the `background` property.

```
<Ripple color='red' background='blue' />
```

#### The `ripple` prop

There are some components that support the ripple effect using a `ripple` property. The [`Button`](Button.html) is one of those. In this case,  instead of using the `Ripple` component only the property `ripple` needs to be added:

```
<Button ripple>
  Ripple!
</Button>
```

Other components that support the `ripple` property are: [`ListItem`](ListItem.html), [`Fab`](Fab.html), [`SpeedDial`](SpeedDial.html) and [`Tab`](Tab.html).
