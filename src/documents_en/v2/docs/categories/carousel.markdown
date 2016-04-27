---
title: Carousel
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
---


### Carousel (ons-carousel)

Carousel provides a container to display multiple items in the element. It can be used as a full screen component, or inside another element.

[`<ons-carousel>`](/v2/reference/js/ons-carousel.html) component is the container which can contain multiple [`<ons-carousel-item>`](/v2/reference/js/ons-carousel-item.html) components. Each `<ons-carousel-item>` represents items in the carousel.

#### Showing full screen carousel

A full-screen carousel can be shown by specifying `fullscreen` attribute to [`<ons-carousel>`](/v2/reference/js/ons-carousel.html) component.

```html
<ons-carousel fullscreen swipeable overscrollable auto-scroll>
  <ons-carousel-item>
     Carousel Item 1
  </ons-carousel-item>
  <ons-carousel-item>
     Carousel Item 2
  </ons-carousel-item>
</ons-carousel>
```

When you want to show a carousel within another component, you should specify its height and width by the CSS style. If the width is not specified, it will interpreted as `100%`.

```html
<ons-carousel style="height: 200px; width: 50%" swipeable overscrollable auto-scroll>
  <div>
    This content covers the carousel.
  </div>
  <ons-carousel-item>
     Carousel Item 1
  </ons-carousel-item>
  <ons-carousel-item>
     Carousel Item 2
  </ons-carousel-item>
</ons-carousel>
```

#### Initial carousel item

`initial-index` attribute will specify which item to show at the initial view. Note the index number starts from `0`.

```html
<ons-carousel style="height: 100px; width: 100px" initial-index="1" swipeable overscrollable auto-scroll>
  <ons-carousel-item>
     Carousel Item 1
  </ons-carousel-item>
  <ons-carousel-item>
     Carousel Item 2
  </ons-carousel-item>
</ons-carousel>
```

#### Carousel scroll behavior

The carousel scroll direction can be a left-right or top-bottom, which can be specified at `direction` attribute. The possible values are `horizontal`(default) or `vertical`.

If you want the carousel to auto-scroll, use `auto-scroll` attribute. The carousel will automatically scroll when it is dragged by the user to a ratio specified in `auto-scroll-ratio`.

Also, it can have an overscroll animation, which bumps when there are no more items to scroll. To enable over-scroll animation, `overscrollable` attribute should be specified.

#### Showing multiple items

When `item-width` or `item-height` attribute is specified, two or more items can be shown at the same time. `item-width` is available only when the `direction` attribute is set to `horizontal`, and `item-height` when set to `vertical` accordingly. By default, it is set to `100%`, so only one item is shown in the container.

#### Controlling by JavaScript

Following methods are provided to scroll items in the carousel.

- `next(options)`, `prev(options)`

  Scroll to the next (or previous) item. Otherwise, it will scroll to the first (or last) item.

- `first(options)`, `last(options)`

  Scroll to the first or last item.

- `setActiveCarouselItemIndex(index, options)`

  Show the item specified by the `index`. The current active index can be obtained by calling `getActiveCarouselItemIndex()` function.

All of those methods returns a `Promise`, which resolves when the action is complete.

```javascript
myCarousel.next({
  animation: "none"
}).then(function(e) {
  // Next carousel is now shown.
});
```

When you added or removed `<ons-carousel-item>` element into a `<ons-carousel>`, you must call `refresh()` function to update the layout.

#### Using carousel events

`<ons-carousel>` component has following events.

- `postchange`

  Fired when the active item is changed. The event will be supplied with an object that contains `carousel`, `activeIndex`, and `lastActiveIndex` properties.

  - `carousel`: Contains the carousel object.
  - `activeIndex`: The index of the current active item.
  - `lastActiveIndex`: The index of the previous active item.

  This event will not fired when the carousel is not initialized with `auto-scroll` enabled, or the carousel item has different size than the container.

- `refresh`

  Fired when the carousel layout has changed, or `refresh()` method is called.

- `overscroll`

  Fired when the item is overscrolled. The event will be supplied with an object that contains `carousel`, `activeIndex`, and `lastActiveIndex` properties.

  - `carousel`: Contains the carousel object.
  - `direction`: Overscroll direction. Can be one of `left`, `right`, `up` or `down`.
  - `activeIndex`: The index of the current active item.
  - `waitToReturn()`: A method that takes a promise and waits for the promise to be resolved (or rejected) before scrolling back.

  The following example uses `waitToReturn(promise)` to keep overscroll until some job is done. In this example, it is using [jQuery's Promise](https://api.jquery.com/category/deferred-object/) for browser compatibility.

  ```
  carousel.on('overscroll', function(event) {
    var deferred = jQuery.Deferred();
    event.waitToReturn(deferred.promise);
    window.setTimeout(function() {
      deferred.resolve();
    }, 3000);
    // The carousel keeps its state for 3 seconds
  })
  ```
