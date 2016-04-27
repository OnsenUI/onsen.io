---
title: SpeedDial
component: react/SpeedDial
framework: react
---

### Speed dial

A *speed dial* is a Material Design component that displays a floating action button that expands into a menu when tapped. It's useful for situations where there are several actions available in a page that are equally important.

To display a normal floating action button the [`Fab`](Fab.html) component can be used.

#### Basic usage

The menu items of the `SpeedDial` component are defined using the `SpeedDialItem` component. It also requires a `Fab` component which represents the main button.

To define the position of the component the `position` prop is used. Normally it is placed in the bottom right corner which is achieved by setting the prop to the literal string `"bottom right"`.

```
<Page>
  <SpeedDial position='bottom right'>
    <Fab>A</Fab>
    <SpeedDialItem onClick={this.doSomething.bind(this)}>B</SpeedDialItem>
    <SpeedDialItem onClick={this.doSomethingElse.bind(this)}>C</SpeedDialItem>
  </SpeedDial>
</Page>
```
