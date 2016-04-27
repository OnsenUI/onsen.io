---
title: Switch
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
---

## Switch (ons-switch)

[`<ons-switch>`](/v2/reference/js/ons-switch.html) is used to display a switch. A switch has an "on" and an "off" state. The state can be accessed by the [`isChecked()`](/v2/reference/js/ons-switch.html#method-isChecked) method.

```html
<script>
function changed() {
  alert(document.querySelector('#mySwitch').isChecked() ? 'ON' : 'OFF');
}
</script>
<ons-switch onchange="changed()" id="mySwitch"></ons-switch>
```

Inside the switch is a `<input type="checkbox">` element. You can get the inner input by calling `getCheckboxElement()` method.

component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
title: Tab Bar (ons-tabbar, ons-tab)
---

### Switch (ons-switch)

[`<ons-switch>`](/v2/reference/js/ons-switch.html) is used to display a switch. A switch has an "on" and an "off" state. The state can be accessed by the [`isChecked()`](/v2/reference/js/ons-switch.html#method-isChecked) method.

```html
<script>
function changed() {
  alert(document.querySelector('#mySwitch').isChecked() ? 'ON' : 'OFF');
}
</script>
<ons-switch onchange="changed()" id="mySwitch"></ons-switch>
```

Inside the switch is a `<input type="checkbox">` element. You can get the inner input by calling `getCheckboxElement()` method.
