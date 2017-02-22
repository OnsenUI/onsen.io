---
title: Page
component: angular2/ons-page
framework: angular2
tutorial: vanilla/Reference/page
---

## ページのコンポーネント ( ons-page )

`<ons-page>` は、ページを構成する、ルートのコンポーネントとして使用されます。このコンポーネント内のコンテンツは、スクロール形式で表示できます。

ページ定義に使用できる ひな型を、次に記します。このページ上には、`div` タグを 2 つ置き、それぞれの class には、`page__background` と `page__content` を指定しています。

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
        Page content
      </div>
    </div>
  </ons-page>
  `
})
```