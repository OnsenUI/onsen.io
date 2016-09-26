---
title: Switch
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/switch
---

## Switch (ons-switch)

[`<ons-switch>`](/v2/docs/js/ons-switch.html) is used to display a switch. A switch has an "on" and an "off" state. The state can be accessed by the [`checked`](/v2/docs/js/ons-switch.html) property.

```html
<script>
function changed() {
  alert(document.getElementById('mySwitch').checked ? 'ON' : 'OFF');
}
</script>
<ons-switch onchange="changed()" id="mySwitch"></ons-switch>
```

Inside the switch is a `<input type="checkbox">` element. You can get the inner input by the `checkbox` property.
