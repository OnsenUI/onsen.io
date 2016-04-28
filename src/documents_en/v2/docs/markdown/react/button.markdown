---
title: Button
component: react/Button
framework: react
---

## Button

The `Button` component is, as the name implies, used to display a button. To use it just put the tag in your page.

The button will automatically change style based on the platform. On iOS it will display as a flat button and on Android it will be a Material Design button.

```
<Page>
  <Button>Tap me!</Button>
</Page>
```

#### Handling taps

A button isn't much use if it doesn't do anything. To handle when the user taps the button, the `onClick` prop is used.

```
class MyComponent extends React.Component {
  handleClick() {
    ons.notification.alert('The button was tapped!');
  }

  render() {
    ...
  }
}

<Button onClick={this.handleClick.bind(this)}>Tap me!</Button>
```

This code calls the `ons.notification.alert(message)` API when the button is pressed to display a message to the user.

#### Ripple effect

To display a Material Design ripple effect when the button is tapped the `ripple` prop is used. It doesn't take any values.

```
<Button ripple>Ripple button!</Button>
```

#### Types of buttons

To change the style of the button the `modifier` prop is used. For the button the following modifiers are available:

* `large` - Large button that covers the width of the container.
* `cta` - Call to action button that stands out more than the default style.
* `quiet` - Button without background that doesn't stand out very much.
* `outline` Button with an outline but no background.
* `material` - Used to display a Material Design button on iOS.

So to display a large button the following code can be used.

```
<Button modifier='large'>A very laaarge button</Button>
```

#### Using icons

It is possible to use icons instead of text in buttons. To do this the [`Icon` component](Icon.html) is used.

To create a button with a star use the following code:

```
<Button><Icon icon='md-star-outline' /></Button>
```

Of course you can combine text and icons as well.
