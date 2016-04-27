---
title: Dialog
component: react/Dialog
framework: react
---

### Dialog

Onsen UI provides two components to display dialogs, `Dialog` and `AlertDialog`. They implement the same API but while the `Dialog` is a general dialog that can be used to display any content the `AlertDialog` has some custom styles that makes it easy to add buttons and messages.

Both components will automically alter their style based on the platform in order to look like the native equivalent. In Android a Material Design dialog is displayed while on iOS you get a flat dialog.

#### Showing and hiding

To show or hide the dialog the `isShown` prop is used. The following example illustrates a simple usage.

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false;
    };
  }

  show() {
    this.setState({
      isShown: true
    });
  }

  hide() {
    this.setState({
      isShown: false
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
          isShown={this.state.isShown}>

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

This will show a dialog when the button in the `Page` component is pressed by changing the `isShown` state variable since this variable is bound to the `isShown` prop. Likewise the button inside the dialog while hide the dialog by setting the state variable to false.

#### Customizing animation

By default the dialog is revealed using an animation that is based on the platform. To change the animation the `animation` prop can be used. There are three animations available: `slide`, `fade` or `none`. The `none` option will simply display the dialog without any animation at all which might be good if the app should run on older devices.

It is also possible to customize the duration, delay and timing function of the animation using the `animationOptions` prop. The prop accepts an object.

```
<Dialog
  animation='fade'
  animationOptions={{duration: 0.2, timing: 'ease-in'}}>
  ...
</Dialog>
```

#### Cancelable dialogs

To enable hiding the dialog when the user clicks the background the `cancelable` prop can be used. This also enables hiding the dialog when the user presses the back button on Android devices.

It is necessary to handle this event so it should be used with the `onCancel` prop.

```
<Dialog
  isShown={this.state.isShown}
	cancelable
	onCancel={this.handleCancel.bind(this)}>
</Dialog>
```

Often the `handleCancel` method would set the `isShown` state variable to `false` in order to make the state correctly reflect the visibility of the dialog.

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
<Button onClick={ons.notification.alert('Ouch!')}>Click me!</Button>
```

