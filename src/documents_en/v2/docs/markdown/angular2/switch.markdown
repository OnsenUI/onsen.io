---
title: Switch
component: angular2/ons-switch
framework: angular2
tutorial: vanilla/Reference/switch
---

## Switch (ons-switch)

[`<ons-switch>`](/v2/docs/angular2/ons-switch.html) is used to display a switch. A switch has an "on" and an "off" state. The state can be accessed by the [`checked`](/v2/docs/angular2/ons-switch.html) property.

```
@Component({
  selector: 'app',
  directives: [OnsSwitch],
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Switch Example</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <div style="text-align: center; margin: 10px;">
        <label><input type="checkbox" [(ngModel)]="target"> {{target ? 'On' : 'Off'}}</label>
        <br>
        <br>
        <ons-switch [(value)]="target"></ons-switch>
      </div>
    </div>
  </ons-page>
    `
})
export class AppComponent {
  target: boolean = true;

  constructor() {
  }
}
```