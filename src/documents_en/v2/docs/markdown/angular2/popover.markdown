---
title: Popover
component: angular2/ons-tabbar,angular2/ons-tab
framework: angular2
tutorial: vanilla/Reference/popover
---

## Popover (ons-popover)

A popover can be used to give additional information about a component or add extra functionality.

```
@Component({
  selector: 'div',
  directives: [OnsPopover],
  template: `
    <ons-popover direction="up down" cancelable>
      <div class="popover__container"><div class="popover__content">
        <div style="text-align: center; opacity: 0.5;">
          <p>This is a popover!</p>
          <p><small>Click the background to remove the popover.</small></p>
        </div>
      </div></div>
    </ons-popover>
  `
})
class MyPopoverComponent {

  // TODO: fix undefined
  @ViewChild(OnsPopover) private _popover: OnsPopover;

  constructor() {
  }
}

@Component({
  selector: 'app',
  providers: [PopoverFactory],
  template: `
  <ons-page class="page">
    <ons-toolbar>
      <div class="center">Popover</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <div style="text-align: center; margin: 10px">
        <ons-button (click)="createPopover()">create Popover</ons-button>
      </div>
    </div>
  </ons-page>
  `
})
export class AppComponent {
  constructor(private _popoverFactory: PopoverFactory) { }

  createPopover() {
    this._popoverFactory.createPopover(MyPopoverComponent);
  }
}
```