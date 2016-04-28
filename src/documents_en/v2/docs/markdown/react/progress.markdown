---
title: Progress
component: react/ProgressBar
framework: react
---

### Progress

There are two components for indicating progress, `ProgressBar` and `ProgressCircular`. As the names imply, the `ProgressBar` displays a linear progress bar while the `ProgressCircular` displays a circular progress indicator.

They can be used both to show the current progress and to show a looping animation in cases where the current progress is not known.

Both components implement the same props.

#### Basic usage

To change the progress the `value` prop is used. It should be a value between `0` and `100`.

```
<ProgressBar value={this.state.currentProgress} />
```

The `ProgressCircular` component is used in exactly the same way.

```
<ProgressCircular value={this.state.currentProgress} />
```

#### Secondary value

It is sometimes necessary to display two different values in the same progress indicator. An example could be an app that streams a video. The progress bar could show both how much of the video has elapsed in addition to how much of the video that has been buffered.

To do this the `secondaryValue` prop is used.

```
<ProgressBar
  value={this.state.elapsed}
  secondaryValue={this.state.buffered}
/>
```

#### Indeterminate mode

There is also an `indeterminate` prop which makes the component ignore both the `value` and `secondaryValue` props and instead show a looping animation. This is useful for cases where the total progress is unknown, e.g. when waiting for some data to arrive.

```
<ProgressBar indeterminate />
```
