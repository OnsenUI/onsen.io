---
title: Pull Hook
component: react/PullHook
framework: react
tutorial: react/Reference/pull-hook
---

## Pull hook

The `PullHook` component is used to add a *pull to refresh* functionality to a page. It can let the user refresh a page or load the latest data.

#### States

The `PullHook` component has three different states: `initial`, `preaction` and `action`. It starts in the `initial` state. When it's pulled down below its height it will transition into the `preaction` state. If it's released in `initial` state it will just bounce back. If it's released in the `preaction` state,  it will go into `action` state.

Every time the state changes the `onChange` property will be called.

When the component transitions into the `action` state, it will call the `onLoad` property with a `done` callback as an argument. Calling this function will cause it to return to the `initial` state.

#### Basic usage

The state changes can be used to show information to the user. In the `action` state new data can be loaded.

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'initial'
    };
  }

  handleChange(e) {
    this.setState({
      state: e.state
    });
  }

  handleLoad(done) {
    setTimeout(done, 500);
  }

  get content() {
    switch (this.state.state) {
      case 'initial':
        return 'Pull to refresh';
      case 'preaction':
        return 'Release';
      case 'action':
        return 'Loading...';
    }
  }

  render() {
    return (
      <Page>
        <PullHook
          onChange={this.handleChange.bind(this)}
          onLoad={this.handleLoad.bind(this)}>
          {this.content}
        </PullHook>
      </Page>
    );
  }
}
```

#### Changing the height

The component has a default height, but it can be customized using the `height` property. There is also a property called `thresholdHeight` which can be used to make it automatically call the `onLoad` property without the user releasing.

```
<PullHook
  onChange={this.handleChange.bind(this)}
  onLoad={this.handleLoad.bind(this)}
  height={100}
  thresholdHeight={150}>
  ...
</PullHook>
```
