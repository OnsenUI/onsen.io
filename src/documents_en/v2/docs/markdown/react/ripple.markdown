---
title: Ripple
component: react/Ripple
framework: react
---

### Ripple

The `Ripple` component is used to add a Material Design ripple effect to an element. The ripple effect will expand from the point the user taps to cover the whole element.

#### Basic usage

To add a ripple effect to an element the `Ripple` component should be placed as a child.

```
<div style={{width: 100, height: 100, backgroundColor: 'grey'}}>
  <Ripple />
</div>
```

The color of the ripple effect defaults to gray but it can be customized with the `color` prop. It is also possible to customize the background color with the `background` prop.

```
<Ripple color='red' background='blue' />
```

#### The `ripple` prop

There are some components that support the ripple effect using a `ripple` prop. The [`Button`](Button.html) is one of those. So in this case instead of using the `Ripple` component the correct way to add a ripple effect to a button is this:

```
<Button ripple>
  Ripple!
</Button>
```

Other components that support this prop are: [`ListItem`](ListItem.html), [`Fab`](Fab.html), [`SpeedDial`](SpeedDial.html) and [`Tab`](Tab.html).
