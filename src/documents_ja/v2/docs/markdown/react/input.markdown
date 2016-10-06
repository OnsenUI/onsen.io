---
title: Input
framework: react
component: react/Input
tutorial: react/Reference/input
---

### Input

The input components are used to get information from the user. Onsen UI provides the `Input` component which can be used to display text input, checkbox or a radio button. There is also `Switch` which displays a toggleable switch.

The `Input` element is very similar to the native HTML `<input>` tag and supports similar props. The `type` property is used to switch between different types of inputs.

Both the `Switch` and `Input` components will automatically change style based on the platform. They will be displayed as Material Design inputs on Android devices.

#### Basic usage

To create a simple text input the `Input` element is used. The `value` property can be used to set the value of the input. The `onChange` property will be called when the value changes.

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Andreas'};
  }

  render() {
    return (
      <Page>
        <Input
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />

        <p>Hello, {this.state.name}!</p>
      </Page>
    );
  }
}
```

To disable the input the `disabled` property can be used.

#### Floating label

In Material Design input elements have a floating label. When the input is empty the label serves as a placeholder, but it will transform into a label with a floating animation when the user types something into the input.

To set the content of this label the `placeholder` property is used and to activate it the `float` prop needs to be used:

```
<Input
  type='password'
  placeholder='Password'
  float
/>
```

#### Checkboxes and radio buttons

To display check boxes and radio buttons the `type` prop can be used. The values are the same as for normal `<input>` tags: `checkbox` and `radio`.

The `checked` property controls if the component is toggled or not.

```
<Input type='checkbox' checked={this.state.isChecked} />
<Input type='' checked={this.state.isChecked} />
```

#### Using labels

The component renders into an element that has an `<input>` tag as an inner element. To set the `id` attribute of the inner input element the `inputId` prop is used. This enables using a label that is not a parent of the input.

```
<label htmlFor='input'>Password</label>
<Input type='password' inputId='input' />
```

In the example above, clicking the label will focus the input.

#### Switch

The `Switch` component displays a toggleable switch. The switch can be toggled both by dragging and tapping.

Just like the `Input` component it implements the `checked`, `onChange` and `disabled` props.

```
<Switch
  checked={this.state.isChecked}
  onChange={this.handleChange.bind(this)}
/>
```

#### Range

The `Range` component is used to display a range slider. It can be used to let the user input a numerical value by dragging the slider.

```
<Range
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
/>
```
