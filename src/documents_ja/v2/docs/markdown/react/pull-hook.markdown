---
title: Pull Hook
component: react/PullHook
framework: react
tutorial: react/Reference/pull-hook
---

## プルフック ( PullHook )

`PullHook` コンポーネントを使用すれば、「 ページを引っ張って、更新 」 ( *pull to refresh* ) 機能を付け加えることができます。ページの更新、または、最新データの読み込み時に使用できます。

#### コンポーネントの状態

`PullHook` コンポーネントには、コンポーネントの状態を示す 3 つの値 ( `initial`、`preaction`、`action` ) があります。初期の状態は、`initial` です。引っ張られ、height 関連のパラメーターで指定した値 ( しきい値 ) を超えると、`preaction` 状態に移行します。height 関連のパラメーターで指定した値を超えない状態で ( `initial` 状態のまま )、引っ張っていた指を離すと、バウンスしながら、元の状態に戻ります。`preaction` 状態に移行すると、次に、`action` 状態に移行します。

状態が移り変わるたびに、`onChange` プロパティーが呼び出されます。

コンポーネントの状態が `action` に移行した場合、`done` コールバックを引数として使用して、`onLoad` プロパティーが呼び出されます。この関数が呼ばれると、コンポーネントは、`initial` 状態に戻ります。

#### 基本的な使用方法

このような状態の移り変わりを利用して、状態が変わるたびに、ユーザー側に情報を表示することもできます。たとえば、`action` 状態の場合であれば、新しいデータを読み込みます。

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'initial'
    };
  }

  handleChange(e) {
    this.setState({
      state: e.state
    });
  }

  handleLoad(done) {
    setTimeout(done, 500);
  }

  get content() {
    switch (this.state.state) {
      case 'initial':
        return 'Pull to refresh';
      case 'preaction':
        return 'Release';
      case 'action':
        return 'Loading...';
    }
  }

  render() {
    return (
      <Page>
        <PullHook
          onChange={this.handleChange.bind(this)}
          onLoad={this.handleLoad.bind(this)}>
          {this.content}
        </PullHook>
      </Page>
    );
  }
}
```

#### しきい値 ( height ) の変更

状態の移行を行うときに使用する しきい値 は、コンポーネント側でデフォルトで指定されています。`height` プロパティーを使用すれば、この しきい値 を変更できます。また、`thresholdHeight` プロパティーと呼ばれる しきい値 もあります。こちらの しきい値 より、遠くに引っ張られた場合、`onLoad` プロパティーが自動的に呼び出されます。

```
<PullHook
  onChange={this.handleChange.bind(this)}
  onLoad={this.handleLoad.bind(this)}
  height={100}
  thresholdHeight={150}>
  ...
</PullHook>
```
