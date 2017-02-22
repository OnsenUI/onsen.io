---
title: Toolbar
component: js/ons-toolbar,angular1/ons-toolbar
framework: js,angular1
tutorial: vanilla/Reference/button
---

### ツールバーのコンポーネント ( ons-toolbar、ons-bottom-toolbar )

 [`<ons-toolbar>`](/v2/docs/js/ons-toolbar.html) コンポーネントまたは [`<ons-bottom-toolbar>`](/v2/docs/js/ons-bottom-toolbar.html) コンポーネントを使用して、ツールバーを定義します。ツールバーの典型例を、次に記します。

```html
<ons-toolbar>
  <div class="left">
    <ons-back-button>Back</ons-back-button>
  </div>
  <div class="center">Title</div>
  <div class="right">
    <ons-toolbar-button>
      <ons-icon icon="fa-bars">
    </ons-toolbar-button>
  </div>
 </ons-toolbar>
```

ツールバーは、3 つに分割 ( 左、中央、右 ) されています。場所の指定には、class を使用します ( `left`、`center`、`right` のいずれかを指定 )。アイコンの表示には、[`<ons-icon>`](/v2/docs/js/ons-icon.html) を使用できます。また、ボタンの表示には、[`<ons-toolbar-button>`](/v2/docs/js/ons-toolbar-button.html) または [`<ons-back-button>`](/v2/docs/js/ons-back-button.html) を使用できます。または、HTML コンテンツをセットすることもできます。

