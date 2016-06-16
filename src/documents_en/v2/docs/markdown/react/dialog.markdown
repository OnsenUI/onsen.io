---
title: Dialog
component: react/Dialog
framework: react
tutorial: react/Reference/dialog
---

## Dialog

Onsen UI provides two components to display dialogs, `Dialog` and `AlertDialog`. Although they implement the same API,  the `Dialog` component is a general dialog that can be used to display any content, while the `AlertDialog` component has some custom styles that makes it easy to add buttons and messages.

Both components will automically alter their style based on the platform in order to adjust its appearance to the native equivalent. In Android a Material Design dialog will be displayed while on iOS a flat dialog will be provided.

#### Showing and hiding

To show or hide the dialog the `isOpen` property is used. The following example illustrates a simple use case:

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false;
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
      <Page>
        <Button
          onClick={this.show.bind(this)}>
          Show dialog!
        </Button>

        <Dialog
          isOpen={this.state.isOpen}>

          <p>This is a dialog!</p>

          <Button onClick={this.hide.bind(this)}>
            Close
          </Button>
        </Dialog>
      </Page>
    );
  }
}
```

When the button in the `Page` component is pressed, the state variable `isOpen` will be changed and a rerender of the component with the new state will be triggerd. Since the `isOpen` state variable is bound to the `isOpen` property of the `Dialog` component, the dialog will show. Likewise the button inside the dialog while hide the dialog by setting the state variable to false.

#### Customizing animation

By default the dialog is revealed using an animation that is based on the platform. To change the animation the `animation` property can be used. There are three animations available: `slide`, `fade` or `none`. The `none` option will simply display the dialog without any animation at all which might be suitable if the app should run on older devices.

It is also possible to customize the duration, delay and timing function of the animation using the `animationOptions` property:

```
<Dialog
  animation='fade'
  animationOptions={{duration: 0.2, timing: 'ease-in'}}>
  ...
</Dialog>
```

#### Cancelable dialogs

To enable hiding the dialog when the user clicks on the background,  the `cancelable` property can be used. This also enables hiding the dialog when the user presses the back button on Android devices.

It is necessary to handle this event so it should be used with the `onCancel` property.

```
<Dialog
  isOpen={this.state.isOpen}
	cancelable
	onCancel={this.handleCancel.bind(this)}>
</Dialog>
```

Often the `handleCancel` method would set the `isOpen` state variable to `false` in order to make the state correctly reflect the visibility of the dialog.

#### Alert dialog

The `AlertDialog` component works exactly like the `Dialog` component except that it supports some custom classes for the inner elements. To display an alert dialog with a message and buttons the following code can be used:

```
<AlertDialog>
  <div className='alert-dialog-title'>Warning!</div>
  <div className='alert-dialog-content'>
	  An error has occurred!
	</div>
	<div className='alert-dialog-footer'>
		<Button className='alert-dialog-button'>
			Cancel
		</Button>
		<Button className='alert-dialog-button'>
			Ok
		</Button>
	</div>
</AlertDialog>
```

#### Notification methods

The Onsen UI core library contains some utility functions to display alert dialogs very easily. These functions are usable in React as well.

The methods are `ons.notification.alert`, `ons.notification.confirm` and `ons.notification.prompt`. The following code displays a simple message when a button is tapped.

```
<Button onClick={ons.notification.alert('clicked!')}>Click me!</Button>
```

