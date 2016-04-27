---
title: Carousel
component: react/Carousel
framework: react
---

### Carousel

A carousel is used to display a lot of content to the user in a small space. The user can browse through the items by swiping. This can be achieved with the `Carousel` component.

#### Basic usage

`Carousel` is the parent of the `CarouselItem` component. Several props are available to alter its behavior.

To enable user swiping the `swipeable` prop must be defined. Without this prop the items can not be moved by swiping.

The following code will create a swipeable carousel.

```
<Carousel swipeable>
  {this.state.items.map((item) =>
    <CarouselItem>
      {item}
    </CarouselItem>}
</Carousel>
```

#### Controlling the carousel

In addition to letting the user control the carousel using the `swipeable` prop it is also possible to programmatically change the current item using the `index` prop. By changing this prop the carousel will show another item.

```
<Carousel index={this.state.carouselItemIndex}>
  ...
</Carousel>
```

#### Autoscrolling

By default the user will be able to drag the carousel freely. The `autoScroll` prop will make it automatically bounce to item edges when released. To modify the bouncing behavior the `autoScrollRatio` prop can be used. The ratio can be set to a value between `0` and `1` which defines how much it must be swiped in order to snap to the next item.

```
<Carousel swipeable autoScroll autoScrollRatio={0.2}>
  ...
</Carousel>
```

#### Vertical carousel

The carousel scrolls horizontally by default but it also supports vertical scrolling. To enable this the `direction` prop must be set to `'vertical'`.

```
<Carousel direction='vertical'>
  ...
</Carousel>
```

#### Customizing the animation

When using the `index` prop the carousel will show a new item using an animation. To customize this animation the `animationOptions` prop can be used. It takes an object with `duration`, `delay` and `timing` properties.

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

The carousel has the following props to handle events:

* `onPostChange` - Fired when the current item changes.
* `onOverscroll` - Fired when the user scrolls past the first or last items.

The `onOverscroll` prop could be used to load new items when the user reaches the end.
