---
title: Navigator
component: angular2/ons-navigator
framework: angular2
tutorial: vanilla/Reference/navigator
---

## Navigation

In Onsen UI, a page navigation is done by the [`<ons-navigator>`](/v2/docs/angular2/ons-navigator.html). `<ons-navigator>` is a navigation controller that does not have displayed content. Therefore, you usually use a [`<ons-toolbar>`](/v2/docs/angular2/ons-toolbar.html) and add a toolbar on top of the page. Navigator provides screen transitions with smooth animation, and is used to create a parent-child relationship.

```
@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Page2</div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content" no-status-bar-fill>
      <div style="text-align: center; margin: 10px">
        <ons-button (click)="push()">push</ons-button>
        <ons-button (click)="pop()">pop</ons-button>
        <p>page2</p>
      </div>
    </div>
  `
})
export class PageComponent {
  constructor(private _navigator: OnsNavigator, private _params: PageParams) {
    console.log('parameters:', _params.data);
  }

  push() {
    this._navigator.pushComponent(PageComponent, {animation: 'slide'}, {random: Math.random()});
  }

  pop() {
    this._navigator.popComponent();
  }
}

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-navigator>
    <ons-page>
      <ons-toolbar>
        <div class="center">Page</div>
      </ons-toolbar>
      <div class="page__background"></div>
      <div class="page__content" no-status-bar-fill>
        <div style="text-align: center; margin: 10px">
          <ons-button (click)="push()">push</ons-button>
        </div>
      </div>
    </ons-page>
  </ons-navigator>
  `
})
export class AppComponent {
  @ViewChild(OnsNavigator) private _navigator: OnsNavigator;

  constructor() { }

  push() {
    this._navigator.pushComponent(PageComponent, {animation: 'none'}, {key: 'value'});
  }
}
```