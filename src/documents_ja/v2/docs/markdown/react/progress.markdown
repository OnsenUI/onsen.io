---
title: Progress
component: react/ProgressBar
framework: react
tutorial: react/Reference/progress
---

### 進捗度の表示 ( Progress 系のコンポーネント )

進捗度を示すコンポーネントは、2 種類 ( `ProgressBar` と `ProgressCircular` ) あります。名前が示すとおり、`ProgressBar` は線 ( linear ) 形式、`ProgressCircular` は円 ( circular ) 形式で、進捗度を表示します。

また、処理の進捗度を示す以外にも、処理が進行中であることを示すことができます ( 進捗度がわからない場合など、アニメーションを繰り返す必要があるときに便利です )。

どちらのコンポーネントでも、同じプロパティーが使用されています。

#### 基本的な使用方法

進捗度を変更する場合には、`value` プロパティーを使用します。値は、`0` から `100` の間で指定します。

```
<ProgressBar value={this.state.currentProgress} />
<ProgressCircular value={this.state.currentProgress} />
```

#### SecondaryValue

2 つの異なる進捗度を同時に表示することが必要な場合もあります。ストリーミング形式のビデオを表示するアプリが良い例です。このようなアプリでは、現在の上映経過時間とバッファリング状況を、同時に表示する必要があります。

この場合、`secondaryValue` プロパティーを使用します。

```
<ProgressBar
  value={this.state.elapsed}
  secondaryValue={this.state.buffered}
/>
```

#### 処理中であることを示す場合 ( indeterminate )

`indeterminate` プロパティーを使用した場合、コンポーネントは、`value` プロパティーと `secondaryValue` プロパティーを無視します。代わりに、繰り返し表示されるアニメーションを使用します。進捗度がわからない場合などに有用です ( たとえば、データの受信を待機している場合など )。

```
<ProgressBar indeterminate />
```
