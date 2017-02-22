---
title: Popover
component: react/Popover
framework: react
tutorial: react/Reference/popover
---

## ポップオーバー ( Popover ) 

`Popover` コンポーネントを使用して、対象とするコンポーネントまたは要素の横にボックスを表示します。ツールチップ ( tooltip )、通知の表示、メニューの表示などに使用できます。

ポップオーバーは、プラットフォームの種類に応じて、スタイルを自動で変更します。たとえば、Android であれば、マテリアルデザイン準拠のコンポーネントになります。

#### 表示と非表示 ( Hide )

ポップオーバーを表示または非表示する場合には、`isOpen` プロパティーを使用します。ポップオーバーが指すコンポーネント ( 表示時に、ポップオーバーが付いているコンポーネント ) を確認する場合には、React コンポーネントまたは DOM 要素へのリファレンスを返す関数を定義して、その関数に対して、`getTarget` プロパティーをセットします。

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  getTarget() {
    return this.refs.button;
  }

  show() {
    this.setState({isOpen: true});
  }

  hide() {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <Page>
        <Button ref='button' onClick={this.show.bind(this)}>
          Click me!
        </Button>

        <Popover
          isOpen={this.state.isOpen}
          getTarget={this.getTarget.bind(this)}>
          Popover
        </Popover>
      </Page>
    );
  }
}
```

このコンポーネントがレンダリングされると、ボタンを押したときに、ポップオーバーが表示されます。このサンプルでは、`Button` コンポーネントへのリファレンスが、`getTarget` プロパティーに返されているので、ポップオーバーとボタンがくっついて表示されることがわかります。

#### 表示場所の変更

`Popover` コンポーネントの `direction` プロパティーを使用して、対象のコンポーネント ( または、DOM 要素 ) のどちら側に、ポップオーバーを表示するか指定できます。

このプロパティーを `left` に指定した場合、左側に表示されます。このプロパティーを指定しない場合、ポップオーバーは、スペースが広い方に表示されます。

```
<Popover
	isOpen={this.state.isOpen}
  getTarget={this.getTarget.bind(this)}
  direction='left'>
	Popover content
</Popover>
```

#### アニメーション効果のカスタマイズ

ポップオーバーの表示時には、フェード ( fade ) のアニメーション効果が適用されます。また、`animationOptions` プロパティーを使用すれば、表示時間、遅延時間、タイミングを指定できます。

```
<Popover
  animationOptions={{duration: 0.2, timing: 'ease-in'}}>
  ...
</Popover>
```
