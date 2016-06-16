---
title: Popover
component: react/Popover
framework: react
tutorial: react/Reference/popover
---

## Popover

The `Popover` component displays a box next to a target component or element. It can be used to show a tooltip, an info box or even for displaying a menu.

The popover will automatically alter its style based on the platform. On Android it will be displayed as a Material Design component.

#### Showing and hiding

To show or hide a popover the `isOpen` property is used. To determine which component it should visually point to, the `getTarget` property must be set to a function that returns a reference either to an React component or a DOM element.

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  getTarget() {
    return this.refs.button;
  }

  show() {
    this.setState({isOpen: true});
  }

  hide() {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <Page>
        <Button ref='button' onClick={this.show.bind(this)}>
          Click me!
        </Button>

        <Popover
          isOpen={this.state.isOpen}
          getTarget={this.getTarget.bind(this)}>
          Popover
        </Popover>
      </Page>
    );
  }
}
```

When this component is rendered it will show the popover when the button is pressed. The popover will point to the button since the `getTarget` property returns a reference to the `Button` component.

#### Changing direction

The `Popover` component has a `direction` property that can be used to specify at which side of the target it will be displayed.

Setting the property to `left` will make it always be displayed to the left. If the property is omitted the popover will be displayed at the side with the most space.

```
<Popover
	isOpen={this.state.isOpen}
  getTarget={this.getTarget.bind(this)}
  direction='left'>
	Popover content
</Popover>
```

#### Customizing animation

The popover will be revealed with a fade animation. The duration, delay and timing function can be customized using the `animationOptions` property:

```
<Popover
  animationOptions={{duration: 0.2, timing: 'ease-in'}}>
  ...
</Popover>
```
