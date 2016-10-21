---
title: Splitter
framework: react
component: react/Splitter
tutorial: react/Reference/splitter
---

## メニュー画面 ( Splitter )

メインで表示されているコンテンツの横に、メニューを表示する場合には、`Splitter` を使用します。スワイプ式のメニュー、または、カラム式 ( 画面の片側に固定表示 ) のメニューのいずれかを指定できます。または、画面サイズに応じて、または、条件を指定すれば、スワイプ式とカラム式のどちらかに、自動で切り替えることもできます。一般的には、画面サイズが大きい場合には、カラム式メニューを、小さい場合には、スワイプ式のメニューを使用します。

#### メインで表示するコンテンツ

メインとなるコンテンツは、`SplitterContent` コンポーネント内に挿入します。その場合、`Page` コンポーネントを、`SplitterContent` コンポーネントの子コンポーネントとして使用します。

```
<Splitter>
  <SplitterContent>
    <Page>
      Main content
    </Page>
  </SplitterContent
</Splitter>
```

#### メニュー

メニューを定義するときには、`SplitterSide` コンポーネントを使用します。このコンポーネントは、カラム式 ( メインコンテンツの横に ) で、または、スワイプ式で表示されます。この挙動を制御する場合には、`isCollapsed` プロパティーを使用します。

スワイプ操作でメニューの開閉を行う場合には、`isSwipeable` プロパティーを指定します。また、表示場所 ( 画面の片側 ) を指定する場合には、`side` プロパティーを使用します。

次の例では、画面左側にメニューを表示します。このメニューは、スワイプ操作 ( `isCollapsed` プロパティーを指定 ) で開くことができます。

```
class App extends React.Component {
  render() {
    return (
      <Splitter>
        <SplitterSide
          side='left'
          isCollapsed={true}
          isSwipeable={true}>
          <Page>
            Menu content
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page>
            Main content
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}
```

#### メニューの表示または非表示

メニューを表示または非表示にする場合には、`isOpen` プロパティーを使用します。`isCollapsed` プロパティーが設定されている場合のみ、このプロパティーを使用できます ( カラム式の表示方式では、常にメニューが表示されているため )。

次の例では、ボタンが押されたときに、メニューが表示されます。メニューが閉じられたとき ( 非表示 ) には、`onClose` プロパティーが呼び出されます ( React の state の制御に使用します )。

```
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  show() {
    this.setState({
      isOpen: true
    });
  }

  hide() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side='left'
          isCollapsed={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          isSwipeable={true}>
          <Page>
            Menu content
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page>
            <Button onClick={this.show.bind(this)}>Open</Button>
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}
```

#### 他のカスタマイズオプション

`SplitterSide` コンポーネントのアニメーション効果 ( メニュー表示または非表示時 ) をカスタマイズする場合には、`animationOptions` プロパティーを使用します。このプロパティーは、オブジェクトを引数として取り、このオブジェクト経由で、表示時間・遅延時間・タイミングを設定します。

```
<SplitterSide
  animationOptions={{duration: 0.2, timing: 'ease-in'}}>
  ...
</SplitterSide>
```

メニューの横幅を変更する場合には、`width` プロパティーを使用します。また、スワイプ操作時、メニューを表示するかまたは非表示にするかを決定する しきい値 ( スワイプの度合 ) は、`openThreshold` プロパティーを使用して指定します。指定できる値は、`0` ～ `1` の間です。

デフォルトでは、画面上のどこをスワイプしても、メニューが表示されます。この挙動を変更する場合には、`swipeTargetWidth` をゼロに設定します。ゼロに設定した場合、画面端をスワイプしたときだけ、メニューを表示することができます。