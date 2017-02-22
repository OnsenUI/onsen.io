---
title: Dialog
component: react/Dialog
framework: react
tutorial: react/Reference/dialog
---

## ダイアログ ( Dialog )

Onsen UI では、ダイアログの表示に使用できるコンポーネントを 2 つ ( `Dialog` と `AlertDialog` ) 提供しています。使用している API は同じですが、`Dialog` コンポーネントは、汎用的に使用されるダイアログであり、一方、`AlertDialog` コンポーネントでは、スタイルをカスタマイズ ( ボタン、メッセージなどの追加 ) したダイアログを表示できます。

また、どちらのコンポーネントも、プラットフォームの種類に応じて、スタイルを自動で変更してくれます。たとえば、Android であれば、マテリアルデザイン準拠のダイアログ、iOS であれば、フラットデザイン準拠のダイアログが表示されます。

#### 表示と非表示

ダイアログを表示または非表示にする場合には、`isOpen` プロパティーを使用します。使用方法を次に記します。

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false;
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
      <Page>
        <Button
          onClick={this.show.bind(this)}>
          Show dialog!
        </Button>

        <Dialog
          isOpen={this.state.isOpen}>

          <p>This is a dialog!</p>

          <Button onClick={this.hide.bind(this)}>
            Close
          </Button>
        </Dialog>
      </Page>
    );
  }
}
```

`Page` コンポーネントに置いたボタンが押されたときに、state 変数 「 `isOpen` 」 が変更され、新しい state に応じて、コンポーネントが再度レンダリングされます。この例では、state 変数 「 `isOpen` 」 は、`Dialog` コンポーネントの `isOpen` プロパティーに紐づけされているため、ダイアログが表示されます。また、state 変数が false になった場合には、ダイアログは非表示になります ( ダイアログ上のボタンも、ダイアログの処理に随伴します )。

#### アニメーション効果のカスタマイズ

ダイアログを表示するとき、デフォルトでは、プラットフォームに応じたアニメーション効果が適用されています。アニメーション効果を変更する場合には、`animation` プロパティーを使用します。3 つのアニメーション効果を提供しています ( `slide`、`fade`、`none` )。`none` を指定すると、アニメーション効果を使用せずに、ダイアログが表示されます。古い端末向けに、有効なオプションです。

また、`animationOptions` プロパティーを使用すれば、アニメーション効果の表示時間、遅延時間、タイミングもカスタマイズできます。

```
<Dialog
  animation='fade'
  animationOptions={{duration: 0.2, timing: 'ease-in'}}>
  ...
</Dialog>
```

#### ダイアログの操作 ( cancelable dialog )

`cancelable` プロパティーを使用すれば、ダイアログが表示された状態で背景をタップしたときに、ダイアログを非表示にすることができます。また、Android 端末の場合には、端末側の戻るボタンを押したときに、ダイアログを非表示にすることができます。

イベントを処理する必要があるので、`onCancel` プロパティーも共に使用します。

```
<Dialog
  isOpen={this.state.isOpen}
	cancelable
	onCancel={this.handleCancel.bind(this)}>
</Dialog>
```

`handleCancel` メソッドを使用すると、state 変数 「 `isOpen`  」 は、ほとんどの場合、`false` にセットされます。これは、ダイアログの状態 ( 表示・非表示 ) を、state に正しく反映させる必要があるためです。

#### 警告用のダイアログ

`AlertDialog` コンポーネントと `Dialog` コンポーネントの挙動に差異はありませんが、`AlertDialog` コンポーネントでは、コンポーネント内の要素に対して、カスタムクラスを使用することができます。警告用ダイアログ上で、メッセージの表示、および、ボタンを使用する場合には、次のようにします。

```
<AlertDialog>
  <div className='alert-dialog-title'>Warning!</div>
  <div className='alert-dialog-content'>
	  An error has occurred!
	</div>
	<div className='alert-dialog-footer'>
		<Button className='alert-dialog-button'>
			Cancel
		</Button>
		<Button className='alert-dialog-button'>
			Ok
		</Button>
	</div>
</AlertDialog>
```

#### notification メソッド

Onsen UI の中核部分のライブラリーでは、警告用ダイアログを表示するためのユーティリティ関数 ( `ons.notification.alert`、`ons.notification.confirm`、`ons.notification.prompt` ) を提供しています。これらの関数は、React 上でも使用できます。

ボタンがタップされたときに、メッセージを表示する例を、次に記します。

```
<Button onClick={ons.notification.alert('clicked!')}>Click me!</Button>
```

