---
title: Splitter
framework: react
component: react/Splitter
tutorial: react/Reference/splitter
---

## Splitter

The `Splitter` is used to display a menu next to the main content. It can be configured to either display in column layout or as a swipeable menu. It is also possible to automatically switch between column layout and a layout with a swipeable menu based on the screen size or any arbitrary condition. In some situations it can be useful to display a column layout on large devices and hide the menu on smaller screens.

#### Main content

The main content of the screen is put inside the `SplitterContent` component. A `Page` component should be put as a child of this component.

```
<Splitter>
  <SplitterContent>
    <Page>
      Main content
    </Page>
  </SplitterContent
</Splitter>
```

#### Menu

The menu is defined using the `SplitterSide` component.  This component can either be displayed as a column next to the main content or as a swipeable menu. This behavior is controlled using the `isCollapsed` property.

To enable opening and closing the menu by swiping the `isSwipeable` property must be defined. The `side` property is used to specify on which side of the screen the menu is displayed.

The following examples shows how to create a collapsed menu on the left side of the screen,  that can be opened by swiping:

```
class App extends React.Component {
  render() {
    return (
      <Splitter>
        <SplitterSide
          side='left'
          isCollapsed={true}
          isSwipeable={true}>
          <Page>
            Menu content
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page>
            Main content
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}
```

#### Opening and closing the menu

The menu can be opened and closed using the `isOpen` property. This property only works when the menu is collapsed, since in column layout it is always visible.

In the following example the menu is opened,  when the user presses a button. The `onClose` property is called when the menu is closed and is used to control the state.

```
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  show() {
    this.setState({
      isOpen: true
    });
  }

  hide() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side='left'
          isCollapsed={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          isSwipeable={true}>
          <Page>
            Menu content
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page>
            <Button onClick={this.show.bind(this)}>Open</Button>
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}
```

#### Other customization options

The open and close animation of the `SplitterSide` component can be customized with the `animationOptions` property. It accepts and object that can be used to change the duration, delay and timing function of the animation.

```
<SplitterSide
  animationOptions={{duration: 0.2, timing: 'ease-in'}}>
  ...
</SplitterSide>
```

The width of the menu can be changed with the `width` prop. There is also a property called `openThreshold`, which takes a number between `0` and `1` and specifies how much the user needs to swipe the menu in order for it to open when it's released.

By default the menu can be opened by swiping anywhere on the screen. In some cases this is not the desired behavior. The `swipeTargetWidth` can be set to zero in order to make the menu only open when the user swipes at the edge of the screen.
