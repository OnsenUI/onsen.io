---
title: Splitter
component: angular2/ons-splitter-content,angular2/ons-splitter-side
framework: angular2
tutorial: vanilla/Reference/splitter
---

## splitter を使用したサイドメニュー ( ons-splitter )

メニューは、[`<ons-splitter>`](/v2/docs/js/ons-splitter.html) を使用して追加できます。また、画面が小さい端末ではスワイプ式のメニューとなり、画面が大きい端末では自動的にカラム式 ( 画面の片側に固定表示 ) のレイアウトとなります。

また、子要素として、`<ons-splitter-content>` 要素と `<ons-splitter-side>` 要素も追加する必要があります。 `<ons-splitter-content>` には、メインのコンテンツを指定し、`<ons-splitter-side>` には、メニューとそのコンテンツを指定します。

```
@Component({
  selector: 'ons-page',
  directives: [ONS_DIRECTIVES],
  template: `
    <ons-toolbar>
      <div class="center">Content Page</div> 
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      contents
    </div>
  `
})
class ContentPageComponent {
}

@Component({
  selector: 'ons-page',
  directives: [ONS_DIRECTIVES],
  template: `
    <ons-toolbar>
      <div class="center">Left Page</div> 
    </ons-toolbar>
    <div class="page__background"></div>
    <div class="page__content">
      Left
    </div>
  `
})
class SidePageComponent {
}

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-splitter>
    <ons-splitter-side [page]="sidePage" side="left" width="200px" style="border-right: 1px solid #ccc">
    </ons-splitter-side>
    <ons-splitter-content [page]="contentPage">
    </ons-splitter-content>
  </ons-splitter>
  `
})
export class AppComponent {
  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;
}
```