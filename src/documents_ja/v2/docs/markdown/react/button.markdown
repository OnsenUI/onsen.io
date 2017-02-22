---
title: Button
component: react/Button
framework: react
tutorial: react/Reference/button
---

## ボタン

名前が示すとおり、ボタンを表示する場合には、`Button` コンポーネントを使用します。ボタンのスタイルは、プラットフォームの種類に応じて、自動で変更されます。たとえば、iOS 上では、フラットデザイン準拠のボタン、Android 上では、マテリアルデザイン準拠のボタンとなります。

```
<Page>
  <Button>Tap me!</Button>
</Page>
```

#### タップ操作の処理

ボタンを押してもなにも起こらなければ、ボタンを付ける意味がありません。ボタンがタップされたときの処理には、`onClick` プロパティーを使用します。

```
class MyComponent extends React.Component {
  handleClick() {
    ons.notification.alert('The button was tapped!');
  }

  render() {
    return (
      <Button onClick={this.handleClick.bind(this)}>Tap me!</Button>
    );
  }
}

```

上記の例では、ボタンが押されたときに、`ons.notifaction.alert` を使用した、メッセージが表示されます。

#### リップル効果/波紋効果

ボタンがタップされたことを示すアニメーション効果 ( リップル効果/波紋効果 ) を適用する場合には、`ripple` プロパティーを使用します。値を指定する必要はありません。

```
<Button ripple>Ripple button!</Button>
```

#### ボタンの種類

ボタンのデフォルトのスタイルを変更する場合には、`modifier` プロパティーを使用します。ボタン の modifier プロパティーには、次の値を指定できます。

* `large` - コンテナの端から端まで、ボタンを拡大します。
* `cta` - CTA ( Call To Action/ユーザー側にアピール ) タイプのボタンです。デフォルトのスタイルより、ボタンを目立たせます。
* `quiet` - 背景なしのボタンです。目立ちません。
* `outline` ボタンの枠がアウトライン化され、背景は透明になります。
* `material` - iOS 上で、マテリアルデザインのボタンを表示する場合に使用します。

大きなボタンを表示する場合には、次のように設定します。

```
<Button modifier='large'>A very laaarge button</Button>
```

#### アイコンの使用

ボタン上に文字列を表示する代わりに、アイコンを使用することもできます。その場合、[`Icon` コンポーネント](Icon.html) を使用します。

星印型のボタン ( 星印がボタンの上に表示されている状態 ) を作成する場合には、次のようにします。

```
<Button><Icon icon='md-star-outline' /></Button>
```

文字列とアイコンを組み合わせることもできます。