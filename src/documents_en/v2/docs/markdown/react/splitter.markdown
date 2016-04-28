---
title: Splitter
framework: react
component: react/Splitter
---

## Splitter

The `Splitter` is used to display a menu next to the main content. It can be configured to either display the menu as a column or as a swipeable menu. It is also possible to automatically switch between column layout and a layout with a swipeable menu based on the screen size. I some situations it can be useful to display a column layout on large devices and hide the menu on smaller screens.

#### Main content

The main content of the screen is put inside the `SplitterContent` component. A `Page` component should be put as a child of this component.

```
<SplitterContent>
  <Page>
    Main content
  </Page>
</SplitterContent
```

#### Menu

The menu is defined using the `SplitterSide` component. As mentioned earlier it can either be displayed as a column next to the main content or as a swipeable menu. This behavior is controlled using the `collapsed` prop. If it's defined without a value the menu will be hidden.

To enable opening and closing the menu by swiping the `swipeable` prop must be defined. The `side` prop is used to specify on which side of the content it is displayed.
