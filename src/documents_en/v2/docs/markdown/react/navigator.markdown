---
title: Navigator
component: react/Navigator
framework: react
---

### Navigator

The `Navigator` is a component that provides stack based navigation. It is a very common navigation pattern in mobile apps.

When a page is pushed on top of the stack it is revealed with a transition animation. When the user returns to the previous page the top page will be popped from the top of the stack and hidden with an opposite transition animation.

#### Basic usage

The `Navigator` maintains a stack of *route* objects. These objects can take any form and are rendered into pages with the `renderPage` prop. The `renderPage` prop must be set to a function that returns a `Page` component.

To push a new page on top of the stack the `pushPage(route)` method is used. Similarly a page is popped from the stack with the `popPage()` method.

The stack must be initialized with either the `initialRoute` prop or if the stack needs to be initialized with more than one page the `initialRouteStack` can be used.

```
class App extends React.Component {
  renderPage(route, navigator) {
    return (
      <Page>
        <Toolbar>
          <div className='center'>{route.title}</div>
        </Toolbar>

        <Button onClick={() => {
          navigator.pushPage({
            title: 'Another page',
            backButton: true
          });
        }}>
          Push page
        </Button>

        {
          route.backButton
            ? <Button onClick={() => navigator.popPage()}>
                Pop page
              </Button>
            : null
        }
      </Page>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'First page', backButton: false}}
        renderPage={this.renderPage.bind(this)}
      />
    );
  }
}
```

This simple app will initialize with a page containing a button. Pressing the button will push another page that contains a button that when pressed will return to the previous page.

#### The back button

The `BackButton` component can be used to put a back button in the navigation bar. The component will automatically find the `Navigator` component and pop a page when pressed.

```
<Toolbar>
  <div className='left'>
    <BackButton>Back</BackButton>
  </div>
  <div className='center'>
    Title
  </div>
</Toolbar>
```

#### Customizing the animation

There are several animations available for the `Navigator` component. To change the animation the `animation` prop is used. Available animations are `slide`, `lift` and `fade`. Setting the prop to `none` will make the transition instant.

It is also possible to customize the duration, delay and timing function of the animation using the `animationOptions` prop.

```
<Navigator
  initialRoute={...}
  renderPage={...}
  animation='fade'
  animationOptions={{duration: 0.2, timing: 'ease-in'}}
/>
```
