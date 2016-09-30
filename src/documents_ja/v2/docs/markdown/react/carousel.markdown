---
title: Carousel
component: react/Carousel
framework: react
tutorial: react/Reference/carousel
---

## Carousel

The `Carousel` component can be used to display a lot of content to the user in a small space. The user can browse through the items by swiping.

#### Basic usage

The children of the `Carousel` component should be `CarouselItem` components. Many properties are available to alter the default behaviour of the `Carousel`. For example, to enable user swiping the `swipeable` property should be used. Without setting this property the items cannot be moved by swiping.

The following code will create a swipeable carousel:

```
<Carousel swipeable>
  {this.state.items.map((item) =>
    <CarouselItem>
      {item}
    </CarouselItem>}
</Carousel>
```

#### Controlling the carousel

In addition to letting the user control the carousel using the `swipeable` prop, it is also possible to programmatically change the current item using the `index` property. By changing this property the carousel will show another item.

```
<Carousel index={this.state.carouselItemIndex}>
  ...
</Carousel>
```

#### Autoscrolling

By default the user will be able to drag the carousel freely. The `autoScroll` property will make it automatically bounce to item edges when released. To modify the bouncing behavior the `autoScrollRatio` property can be used. The ratio can be set to a value between `0` and `1`. This value indicates how much it must be swiped in order to snap to the next item.

```
<Carousel swipeable autoScroll autoScrollRatio={0.2}>
  ...
</Carousel>
```

#### Vertical carousel

The carousel scrolls horizontally by default,  but it also supports vertical scrolling. To enable this feature the `direction` property must be set to `'vertical'`.

```
<Carousel direction='vertical'>
  ...
</Carousel>
```

#### Customizing the animation

When using the `index` property the carousel will show a new item using an animation. To customize this animation the `animationOptions` property can be used. It takes an object with `duration`, `delay` and `timing` properties.

```
<Carousel
  autoScroll
  animationOptions={{duration: 2.0, timing: 'ease-in'}}>
  ...
</Carousel>
```

Some other props available are:

* `fullscreen` - Makes the carousel cover the whole screen.
* `overscrollable` - Allows swiping past the first and last item. The carousel will bounce back when released.
* `autoRefresh` - When this prop is defined the carousel will automatically refresh when the number of children changes. This is often necessary when the children are dynamic.

#### Event handling

The carousel has the following properties to handle events:

* `onPostChange` - Called when the current item changes.
* `onOverscroll` - Called when the user scrolls past the first or last items.

The `onOverscroll` prop could be used to load new items when the user reaches the end. The `onPostChange` can be used to synchronize the values of `index`, if a user swipes.

```
<Carousel
  index={this.state.index} swipeable
  onPostChange={(event) => this.setState({index: event.activeIndex})}>
  ...
</Carousel>
```

