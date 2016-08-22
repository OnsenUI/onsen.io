---
title: Range
component: angular2/ons-range
framework: angular2
tutorial: vanilla/Reference/range
---

## Range (ons-range)

To display a range slider, use the `<ons-range>` element.

``` html
<ons-range value="20"></ons-range>
<ons-range modifier="material" value="10"></range>
```

To get the current value the `value` property is used. This property can also be used to control the value programatically.

```
<ons-range id="range" value="20"></ons-range>

<script>
  console.log(document.getElementById('range').value); // 20
</script>
```

It is also possible to disabled the element with the `disabled` attribute which will make it impossible for the user to control it.
