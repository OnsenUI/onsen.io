---
title: List
component: js/ons-list,js/ons-list-item,js/ons-list-header,angular1/ons-list,angular1/ons-list-item,angular1/ons-list-header
framework: js,angular1
tutorial: vanilla/Reference/list
---

## 一覧表示 ( ons-list )

一覧表示は、スクロール形式で複数のデータを表示する場合に、頻繁に使用されます。Onsen UI では、[`<ons-list>`](/v2/docs/js/ons-list.html) タグと [`<ons-list-item>`](/v2/docs/js/ons-list-item.html) タグを使用して、スクロール形式の一覧を表示することができます。加えて、一覧表示するアイテムが多いときのために、`<ons-lazy-repeat>` も提供しています。

一覧を作成する場合、[`<ons-list>`](/v2/docs/js/ons-list.html) タグを置き、その中に、[`<ons-list-item>`](/v2/docs/js/ons-list-item.html) を置いていきます。また、一覧が複数ある場合、それぞれの一覧をグループ分け ( 見出し付け ) するときには、[`<ons-list-header>`](/v2/docs/js/ons-list-header.html) を使用します。

#### 基本的な一覧の表示

見出し ( header ） 付き一覧の例を、次に記します。ここでは、3 つのアイテムを表示しています。

``` html
<ons-list>
  <ons-list-header>My friends</ons-list-header>
  <ons-list-item>Alice</ons-list-item>
  <ons-list-item>Bob</ons-list-item>
  <ons-list-item>Eve</ons-list-item>
</ons-list>
```

#### 複雑な一覧の表示方法

Onsen UI の `<ons-list-item>` では、各アイテム内を、さらに 3 分割できます。分割されたそれぞれの場所には、アイコン、サムネイル、フォーム関連の要素 ( ボタンなど ) などを置くことができます。

``` html
<ons-list-item>
  <div class="left">
    <ons-icon icon="md-face" class="list__item__icon"></ons-icon>
  </div>
  <div class="center">
    Icon and switch
  </div>
  <div class="right">
    <ons-switch></ons-switch>
  </div>
</ons-list-item>
```

#### タップできるアイテム

`tappable` 属性を使用すれば、アイテムをタップしたときに、タップしたことをユーザー側に示せます。たとえば、iOS では、タップ時、アイテムの背景の色が変わります。Android では、マテリアルデザインのリップル ( Ripple/波紋 ) 効果が表示されます。

``` html
<ons-list-item tappable>Tap me!</ons-list-item>
```

#### modifier

`<ons-list>` と `<ons-list-item>` では、modifier を使用して、外見を変更できます。複数の modifier を設定することができます ( その場合、各 modifier 間には、スペースを挿入します )。

##### 角を丸くした効果付きの一覧 ( Inset/インセット )

一覧の上と下の角を取る場合には、`<ons-list>` 要素に、modifier="inset" を指定します。

``` html
<ons-list modifier="inset">
  ...
</ons-list>
```

##### divider ( 区切り線 ) の変更

`longdivider` または `nodivider` を modifier に 指定すれば、アイテムを分ける区切り線 ( 水平方向の線 ) の長さの調整、または、区切り線を非表示にすることができます。デフォルトでは、区切り線が表示されます ( なお、ネイティブの区切り線に近づけるため、画面左側には、線が表示されません )。

nodivider を指定すると、区切り線は表示させません。

``` html
<ons-list>
  <ons-list-item modifier="nodivider">Item A</ons-list-item>
  <ons-list-item modifier="nodivider">Item B</ons-list-item>
</ons-list>
```
