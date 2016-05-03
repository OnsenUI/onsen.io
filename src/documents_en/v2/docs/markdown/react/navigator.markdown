---
title: Navigator
component: react/Navigator
framework: react
---

## Navigator

The `Navigator` is a component that provides stack based navigation. It is a very common navigation pattern in mobile apps.

After pushing a page to the top of the stack it will be displayed using transition animation. When the user goes back to the previous page the top page will be popped from the top of the stack and hidden with an corresponding transition animation.

#### Basic usage

The `Navigator` maintains a stack of *route* objects. These objects can be arbitrary objects and are rendered into pages with the `renderPage` property. The `renderPage` property must be set to a function that returns a `Page` component.

To push a new page on top of the stack, the `pushPage(route)` method is used. Similarly, a page is popped from the stack with the `popPage()` method.

The stack must be initialized with either the `initialRoute` or `initialRouteStack`, depending on whether the the stack needs to be initialized with one or more pages.

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
            backButton: <Button onClick={() => navigator.popPage()}>
              Pop page
            </Button>

          });
        }}>
          Push page
        </Button>
        {route.backButton}
      </Page>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'First page'}}
        renderPage={this.renderPage.bind(this)}
      />
    );
  }
}
```

This simple app will render initially with a page containing a button. Pressing the button will push another page. At this page one will be able to push another page or go pop the current page from the page stack.

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

There are several animations available for the `Navigator` component. To change the animation the `animation` property is used. Available animations are `slide`, `lift` and `fade`. Setting the property to `none` will make the transition instantly.

It is also possible to customize the duration, delay and timing function of the animation using the `animationOptions` property.

```
<Navigator
  initialRoute={...}
  renderPage={...}
  animation='fade'
  animationOptions={{duration: 0.2, timing: 'ease-in'}}
/>
```
