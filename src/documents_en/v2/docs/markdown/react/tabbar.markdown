---
title: Tabbar
framework: react
component: react/Tabbar
tutorial: react/Reference/tabbar
---

## Tabbar

The `Tabbar` component is used to add tab navigation to an app. It is a very common navigation pattern in mobile apps.

#### Basic usage

Every tab is defined by one `Page` component and one `Tab` component. The `Tab` component displays the actual tab and the `Page` component will be displayed when the tab is tapped.

The `Tabbar` component has an `index` property which is used to specify the page that is highlighted. There is also a `renderTabs` property that should be set to a function that returns an array of objects with the keys `content` and `tab`:

```
{
  content: <Page />,
  tab: <Tab />
}
```

To properly handle the tab change by a click, one should implement the handler function `onPreChange` and update the index. For example, to create a simple app with two tabs the following code can be used:

```
class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  renderTabs() {
    return [
      {
        content: <HomePage />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <SettingsPage />,
        tab: <Tab label='Settings' icon='md-settings' />
      }
    ]
  }

  render() {
    return (
      <Tabbar
        index={this.state.index}
        onPreChange={({index}) => this.setState({index})}
        renderTabs={this.renderTabs.bind(this)}
      />
    );
  }
}
```

Both the `HomePage` and `SettingsPage` components need to render into a `Page` components for this to work correctly.

#### Tab component

There are two ways to define a tab. Either the tab label can be put as a child of the `Tab` component or the `label` and `icon` props can be used to specify its appearance.

In the example above the props are used but the following usage is also possible:

```
<Tab>
  Label
</Tab>
```
