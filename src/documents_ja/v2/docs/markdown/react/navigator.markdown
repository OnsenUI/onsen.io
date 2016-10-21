---
title: Navigator
component: react/Navigator
framework: react
tutorial: react/Reference/navigator
---

## ナビゲーター ( Navigator )

`Navigator` コンポーネントでは、スタックを使用した、ページ遷移機能を提供しています。スタックを使用したページ遷移は、モバイルアプリの世界では、標準になりつつあります。

スタックの最上部にページをプッシュ ( push ) すると、ページ遷移用のアニメーション効果とともに、そのページが表示されます。前のページに戻る場合 には、スタックの上から現在のページがポップ ( pop ) され、アニメーション効果とともに非表示にされ、前のページが表示されます。

#### 基本的な使用方法

`Navigator` は、*route* オブジェクトが複数置かれたスタックを保持します ( route オブジェクトの内容は、任意に定義できます )。これらのオブジェクトをページへレンダリングするときには、`renderPage` プロパティーを使用します。その場合には、`Page` コンポーネントを返す関数を定義して、この関数に対して、 `renderPage` プロパティーをセットします。

スタックの最上部に新しいページをプッシュする場合には、`pushPage(route)` メソッドを使用します。また、ページをポップする場合には、`popPage()` メソッドを使用します。

スタックの初期化には、 `initialRoute` または `initialRouteStack` を使用します。どちらを使用するかは、初期化時のページ数 ( 1 ページまたは複数ページ ) により異なってきます。

```
class App extends React.Component {
  renderPage(route, navigator) {
    return (
      <Page renderToolbar={() =>  {
        return (
          <Toolbar>
            <div className='center'>{route.title}</div>
          </Toolbar>
        )}}>

        <Button onClick={() => {
          navigator.pushPage({
            title: 'Another page',
            backButton: <Button onClick={() => navigator.popPage()}>
              Pop page
            </Button>

          });
        }}>
          Push page
        </Button>
        {route.backButton}
      </Page>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'First page'}}
        renderPage={this.renderPage.bind(this)}
      />
    );
  }
}
```

上記の例では、ページを 1 つ使用して、レンダリングを開始します ( ページには、ボタンを 1 つ置きます )。ボタンを押すと、別のページ ( Another Page ) をプッシュします ( この時点で、この 「 別のページ 」 がスタックにプッシュされます。前のページに戻る場合には、現在のページがスタックからポップされます )。

#### 戻るボタン

ナビゲーションバーに戻るボタンを置く場合には、`BackButton` コンポーネントを使用します。戻るボタンが押されたとき、`BackButton` コンポーネントは、`Navigator` コンポーネントを自動で見つけ出し、次に、表示されているページをポップします。

```
<Toolbar>
  <div className='left'>
    <BackButton>Back</BackButton>
  </div>
  <div className='center'>
    Title
  </div>
</Toolbar>
```

#### アニメーション効果のカスタマイズ

`Navigator` コンポーネントでは、複数のアニメーション効果を提供しています。アニメーション効果を変更する場合には、`animation` プロパティーを使用します。
使用できるアニメーション効果は、`slide`、`lift`、`fade` です。`none` に指定した場合には、アニメーション効果を適用せずに、ページが即座に遷移します。

また、`animationOptions` プロパティーを使用すれば、アニメーション効果の表示時間、遅延時間、タイミングを指定できます。

```
<Navigator
  initialRoute={...}
  renderPage={...}
  animation='fade'
  animationOptions={{duration: 0.2, timing: 'ease-in'}}
/>
```
