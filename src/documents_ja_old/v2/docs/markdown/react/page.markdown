---
title: Page
component: react/Page
framework: react
tutorial: react/Reference/page
---

## ページ ( Page )

`Page` コンポーネントは、他のコンポーネントを置くときの土台 ( ページを構成する、ルートのコンポーネント ) となります。`Page` コンポーネントの子コンポーネントなどが、画面上には表示されます。また、`renderToolbar` プロパティーを使用すれば、ページの上部にナビゲーションバーを置くことができます。

```
<Page>
  Content goes here
</Page>
```

また、[`Navigator`](Navigator.html) コンポーネント、[`Splitter`](Splitter.html) コンポーネント、[`Tabbar`](Tabbar.html) コンポーネントと組み合わせれば、高度なページ操作もできます。

#### ツールバーの追加

ページ上部にツールバーを置く場合には、`renderToolbar` プロパティーを使用します。このプロパティーは、[`Toolbar`](Toolbar.html) をレンダリングする関数です。

```jsx
<Page
  renderToolbar={() =>
    <Toolbar>
      <div className='center'>Title</div>
    </Toolbar>
  }
/>
```

また、ツールバーには、`inline` プロパティーを指定することもできます ( インライン要素として、ツールバーが表示されます。つまり、スクロールが領域にツールバーが置かれます )。

```
<Page>
  <Toolbar inline>
      <div className='center'>Title</div>
  </Toolbar>
</Page>
```

#### コンテンツのスタイル

ページ上に表示されるコンテンツのスタイリングをする場合には、`contentStyle` プロパティーを使用します。

```
<Page contentStyle={{padding: 40}}>
  Padded Content
</Page>
```

#### イベントの処理

`Page` コンポーネントでは、イベントを処理するためのプロパティーを提供しています。

* `onInit` : ページが作成されたときに呼び出されます。
* `onShow` ： 画面上にページが表示されたときに呼び出されます。
* `onHide` ： ページが非表示 ( Hide ) にされたときに呼び出されます。

たとえば、ページが `Navigator` へ 「 プッシュ ( push ) 」 されたときに、`onInit` が呼ばれます。次に、`onShow` プロパティーが呼ばれます。そして、すでに表示されているページがあった場合、`onHide` プロパティーが呼ばれます ( `onShow` ですでに新しいページが表示されている状態 )。

```jsx
<Page
  onInit={() => console.log('init')}
  onShow={() => console.log('show')}
  onHide={() => console.log('hide')}
/>
```
#### コンテンツを固定化して、レンダリングする

`Page` コンポーネントを使用して、レンダリングすると、スクロール可能なコンテンツが表示されます。スクロールを不可とするコンテンツを使用したい場合には、`renderFixed` プロパティーを使用します。[`Fab`](Fab.html) コンポーネントと [`SpeedDial`](SpeedDial.html) コンポーネントを使用するときには、通常、このプロパティーを使用します。

```jsx
<Page
  renderFixed={() => <Fab position='bottom right' />}
/>
```
