---
title: Carousel
component: angular2/ons-carousel-item,angular2/ons-carousel
framework: angular2
tutorial: vanilla/Reference/carousel
---

## カルーセル ( ons-carousel )

カルーセルでは、複数の表示アイテムを格納できる 「 コンテナ 」 を提供してくれます。全画面表示を行ったり、または、他の要素内に入れて使用できます。

[`<ons-carousel>`](/v2/docs/angular2/ons-carousel.html) コンポーネントは、コンテナです。このコンポーネント内に、複数の [`<ons-carousel-item>`](/v2/docs/angular2/ons-carousel-item.html) コンポーネントを置くことができます。各 `<ons-carousel-item>` は、カルーセル上で表示するアイテムとなります。

```
import {
  bootstrap,
  Component,
  ViewChild,
  OnsCarousel
} from 'angular2-onsenui';

@Component({
  selector: 'app',
  directives: [OnsCarousel],
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="left"><ons-toolbar-button (click)="myCarousel.prev()">Prev</ons-toolbar-button></div>
      <div class="center">Carousel Example</div>
      <div class="right"><ons-toolbar-button (click)="myCarousel.next()">Next</ons-toolbar-button></div>
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      <ons-carousel #myCarousel swipeable overscrollable auto-scroll fullscreen auto-scroll-ratio="0.4" animation-options="{duration: 0.1}">
        <ons-carousel-item style="background-color: #009">
          <div style="text-align: center; font-size: 88px; color: white; margin-top: 100px;">1</div>
        </ons-carousel-item>
        <ons-carousel-item style="background-color: gray">
          <div style="text-align: center; font-size: 88px; color: white; margin-top: 100px;">2</div>
        </ons-carousel-item>
        <ons-carousel-item style="background-color: red">
          <div style="text-align: center; font-size: 88px; color: white; margin-top: 100px;">3</div>
        </ons-carousel-item>
        <ons-carousel-item style="background-color: green">
          <div style="text-align: center; font-size: 88px; color: white; margin-top: 100px;">4</div>
        </ons-carousel-item>
      </ons-carousel>
    </div>
  </ons-page>
  `
})
export class AppComponent {
  @ViewChild(OnsCarousel) _carousel: OnsCarousel;
  constructor() { }

  doSomething() {
    this._carousel.element.next();
  }
}
```