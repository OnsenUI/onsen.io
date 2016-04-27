---
title: Popover
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
---



### Popover (ons-popover)

A popover can be used to give additional information about a component or add extra functionality.

The usage is very similar to that of `<ons-dialog>` and `<ons-alert-dialog>`. It is defined using the `<ons-popover>` tag.

``` html
<ons-button id="popover-target">Popover Target</ons-button>
<ons-popover>
  This is a popover!
</ons-popover>
```

To display the popover you need to get a reference to the element and execute the `show(target, options)` method. The `target` argument can be either a DOM element, a query selector string or an `Event` object.

``` javascript
var target = document.querySelector("#popover-target")
document.querySelector("ons-popover").show(target)
```

Just like the `<ons-dialog>` and `<ons-alert-dialog>` elements, the popover can be loaded from a template. It is done by using the `ons.createPopover(template)` utility function. It returns a `Promise` that resolves to the popover element.

``` html
<ons-template id="popover.html">
  <ons-popover>
    This popover is defined as a template.
  </ons-popover>
</ons-template>
<script>
  ons.createPopover('popover.html')
    .then(function(popover) {
      popover.show();
    });
</script>
```

#### The cancelable attribute

The `<ons-popover>` supports the `cancelable` attribute. This enables hiding the popover when the user taps outside of it or presses the back button on an Android device.

``` html
<ons-popover cancelable>
  This popover can be cancelled!
</ons-popover>
```

#### Opening directions

`direction` attribute can control the popover to open from what direction. It can be specified from `up`, `down`, `left`, or `right`, and furthermore be combined multiple directions separated by space characters. If the `direction` attribute is not specified, it will automatically detects the appropriate direction.

#### Using popover events

`<ons-popover>` has following events.

- `preshow`, `prehide`

  Fired before showing or hiding the popover. The callback function provides an event object with following properties.

  - `popover`: Contains the popover object.
  - `cancel`: Method to cancel the operation.

  If you want to cancel opening the popover, you could write a program like the one below.

  ```javascript
  myPopover.addEventListener('preshow', function(e) {
    e.cancel();
  });
  ```

- `postshow`, `posthide`

  Fired after showing or hiding the popover. The callback function provides an event object, which has `popover` property contains popover object.

