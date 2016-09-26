---
title: Button
component: react/Button
framework: react
tutorial: react/Reference/button
---

## Button

The `Button` component is, as the name implies, used to display a button. The button will automatically change style based on the platform. On iOS it will display as a flat button, while on Android it will be a Material Design button.

```
<Page>
  <Button>Tap me!</Button>
</Page>
```

#### Handling taps

A button isn't much use if it doesn't do anything. To handle user taps, the `onClick` prop can be used.

```
class MyComponent extends React.Component {
  handleClick() {
    ons.notification.alert('The button was tapped!');
  }

  render() {
    return (
      <Button onClick={this.handleClick.bind(this)}>Tap me!</Button>
    );
  }
}

```

Ones the button is pressed, a notification will be displayed using `ons.notifaction.alert`.

#### Ripple effect

To display a Material Design ripple effect when the button is tapped the `ripple` prop is used. It doesn't take any values.

```
<Button ripple>Ripple button!</Button>
```

#### Types of buttons

To change the default style of the button the `modifier` property can be used. For the button the following predefined modifiers are available:

* `large` - Large button that covers the width of the container.
* `cta` - Call to action button that stands out more than the default style.
* `quiet` - Button without background that doesn't stand out very much.
* `outline` Button with an outline but no background.
* `material` - Used to display a Material Design button on iOS.

In order to display a large button one can simply write:

```
<Button modifier='large'>A very laaarge button</Button>
```

#### Using icons

It is possible to use icons instead of text in buttons. To do this the [`Icon` component](Icon.html) is used.

To create a button with a star inside we can use the following code:

```
<Button><Icon icon='md-star-outline' /></Button>
```

Of course text and icons can be combined as well.
