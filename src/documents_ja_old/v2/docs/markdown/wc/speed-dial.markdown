---
title: Speed Dial
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/speed-dial
---

## スピードダイアル ( Speed Dial。ons-speed-dial、ons-speed-dial-item )

`<ons-speed-dial>` とは、フローティングアクションボタン ( マテリアルデザイン ) をタップしたときに表示されるメニューです。

``` html
<ons-speed-dial position="left bottom">
  <ons-fab>
    <ons-icon
      icon="fa-twitter"
      size="26px"
      fixed-width="false"
      style="vertical-align:middle;">
    </ons-icon>
  </ons-fab>
  <ons-speed-dial-item><ons-ripple></ons-ripple>C</ons-speed-dial-item>
  <ons-speed-dial-item><ons-ripple></ons-ripple>B</ons-speed-dial-item>
  <ons-speed-dial-item><ons-ripple></ons-ripple>A</ons-speed-dial-item>
</ons-speed-dial>
```

メニューの表示・非表示は、`showItems()` と `hideItems()` メソッドを使用すれば、プログラム側で制御できます。