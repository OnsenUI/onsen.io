---
title: Input
component: angular2/ons-input
framework: angular2
tutorial: vanilla/Reference/input
---

## Text input (ons-input)

`<ons-input>` is an alternative to `<input>` tag, with Material Design floating label and animation effect. To enable floating label style, use `placeholder` attribute and `float` attribute together.

```
@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Input</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <div style="padding: 10px">
        <div><ons-input placeholder="Type here" [(value)]="target"></ons-input></div>
        <p>Text: {{target}}</p>
      </div>
    </div>
  </ons-page>
  `
})
export class AppComponent{
  target: string = '';
}
```