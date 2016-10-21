---
title: Input
framework: react
component: react/Input
tutorial: react/Reference/input
---

### 入力 ( input )

ユーザーから情報を入力してもらう場合には、「 入力 」 系のコンポーネントを使用します。Onsen UI では、テキストの入力欄、チェックボックス、ラジオボタンの表示に使用できる `Input` コンポーネントを提供しています。また、切り替えスイッチを表示する場合には、`Switch` コンポーネントも使用できます。

Onsen UI 提供の `Input` 要素の挙動は、HTML の `<input>` タグと似ており、加えて、同じようなプロパティーをサポートしています。入力方法 ( テキスト入力、チェックボックス、ラジオボタンなど ) は、`type` プロパティーを使用すれば、切り替えることができます。

`Switch` コンポーネントと `Input` コンポーネントは、プラットフォームの種類に応じて、スタイルを自動で変更してくれます。たとえば、Android 端末であれば、マテリアルデザインの入力欄が表示されます。

#### 基本的な使用方法

`Input` 要素を使用して、簡単なテキスト入力欄を作成してみます。`value` プロパティーを使用して、入力値を取得します。value の値が変更されたときには、`onChange` プロパティーが呼び出されます。

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Andreas'};
  }

  render() {
    return (
      <Page>
        <Input
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />

        <p>Hello, {this.state.name}!</p>
      </Page>
    );
  }
}
```

入力を拒否する場合には、`disabled` プロパティーを設定します。

#### フローティングラベル ( Floating Label )

マテリアルデザインでは、「 入力 」 系の要素に、フローティングラベルを適用しています。入力欄が空白のときは、ラベルが入力欄内に表示され、文字が入力されると、フローティングアニメーションとともに、ラベルが欄外 ( 「 項目名 」 として表示 ) に移動します。

ラベルの表示、および、上記のような挙動にする場合には、`placeholder` プロパティー ( ラベルの表示用 ) と共に、`float` プロパティー ( 挙動制御用 ) を使用します。

```
<Input
  type='password'
  placeholder='Password'
  float
/>
```

#### チェックボックスとラジオボタン

チェックボックスまたはラジオボタンを表示する場合には、`type` プロパティーを使用します。指定する値は、`<input>` タグと同じ、`checkbox` と `radio` です。

コンポーネント上で操作が行われたか ( チェックされたか/切り替えられたか ) を確認する場合には、`checked` プロパティーを使用します。

```
<Input type='checkbox' checked={this.state.isChecked} />
<Input type='' checked={this.state.isChecked} />
```

#### label の使用

ある要素内において、子要素として、`<input>` タグを指定している場合、コンポーネントをその要素内にレンダリングすることができます。子要素である input 要素に `id` 属性を設定する場合には、`inputId` プロパティーを使用します。この方法であれば、同レベルにラベルを設定 ( 一対として紐づけ ) することもできます。

```
<label htmlFor='input'>Password</label>
<Input type='password' inputId='input' />
```

上記の例では、ラベルをタップすると、入力欄に焦点があたります。

#### Switch

`Switch` コンポーネントを使用して、切り替えスイッチを表示します。スイッチの切り替えは、ドラッグ操作・タップ操作で行えます。

`Input` コンポーネントと同様に、`checked` プロパティー、`onChange` プロパティー、`disabled` プロパティーを使用できます。

```
<Switch
  checked={this.state.isChecked}
  onChange={this.handleChange.bind(this)}
/>
```

#### Range/範囲 ( 量、程度など ) 

`Range` コンポーネントを使用して、レンジスライダー ( range slider/範囲の指定に使用するスライダー ) を表示します。スライダーを動かすことにより、数値を入力することができます。

```
<Range
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
/>
```
