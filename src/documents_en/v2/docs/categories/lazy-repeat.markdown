---
title: Lazy Repeat (or Infinite Scrolling)
component: js/ons-lazy-repeat,angular1/ons-lazy-repeat
framework: js,angular1
---

### Lazy List (or Infinite Scrolling, ons-lazy-repeat)

With [`ons-lazy-repeat`](/v2/reference/js/ons-lazy-repeat.html) only currently visible items are loaded into the DOM. Elements are removed automatically from the DOM when they are not visible anymore. `ons-lazy-repeat` permits millions of elements to be rendered with close to no performance penalty. Here is the example of a simple list having 100,000,000 records.

``` html
<script>
  window.addEventListener('load', function() {
    var lazyRepeat = document.querySelector('#list');
    lazyRepeat.delegate = {
      calculateItemHeight: function(index) {
       // Specify this if the height depends on the element.
       return 40;
     },
     createItemContent: function(index, template) {
       var dom = template.cloneNode(true);
       dom.innerText = "List item #" + index;
       return dom;
     },
     countItems: function() {
        // Return number of items.
       return 100000000;
     },
     destroyItem: function(index, item) {
       // Optional method that is called when an item is unloaded.
       console.log('Destroyed item with index: ' + index);
     }
    };
  });
</script>
<ons-list id="list">
  <ons-lazy-repeat>
    <ons-list-item></ons-list-item>
  </ons-lazy-repeat>
</ons-list>
```

As seen in the example, `<ons-lazy-repeat>` requires a delegate object attached to it's `delegate` property.

* `createItemContent` creates the content of every list item given its index. It should returns an HTML element.
* `calculateItemHeight` returns the height of an item. It could be different for every item.
* `countItems` returns the total number of items in the list.
* `destroyItem` is an optional method that will be triggered everytime an item is unloaded. This can be used to destroy elements and remove event listeners in order to avoid memory leaks.

##### Combining Ajax calls

You can combine with `XMLHttpRequest` object to insert dynamic contents from the server. The following sample illustrates a sample code written with jQuery.

```javascript
createItemContent: function(index, oldContent) {
  if (oldContent) {
    return oldContent;
  }

  var $element = $("<div><span style='opacity: 0.7;'><ons-icon icon='fa-spinner' spin='true'></ons-icon> Loading bacon...</span></div>");

  var request = $.getJSON('https://baconipsum.com/api/?type=meat-and-filler&sentences=1&callback=?', function(data) {
    $element.text(data[0]);
  });

  $element.data('request', request);
  return $element[0];
},
destroyItemContent: function(index, element) {
  var request = $element.data('request');
  request.abort();
}
```
