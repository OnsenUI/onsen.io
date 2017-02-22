---
title: List
component: react/List
framework: react
tutorial: react/Reference/list
---

## 一覧表示 ( List )

「 一覧 」 は、モバイルアプリの開発において、最も重要な部品の 1 つです。一覧は、データの表示を中心に、設定、ページの表示、フォームの表示などにも使用されています。

Onsen UI では、`List` コンポーネントを使用して、一覧を表示します。

なお、数千のアイテムを一覧表示する場合には、[`LazyList`](LazyList.html) コンポーネントの使用を推奨します。

#### 基本的な使用方法

簡単な一覧のレンダリングには、`renderRow` プロパティーを使用します。`ListItem` コンポーネントをレンダリングする関数を定義して、その関数に対して、このプロパティーをセットします。

データを入れた配列に対して、`dataSource` プロパティーをセットします。

```
class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: ['Cat', 'Dog', 'Horse', 'Cow', 'Goat']
    };
  }

  render() {
    return (
      <Page>
        <List
          renderRow={(animal) => <ListItem>{animal}</ListItem>}
          dataSource={this.state.animals}
        />
      </Page>
    );
  }
}
```

#### 見出し ( ヘッダー/Header )

To display a header at the top of the list the `renderHeader` property and the `ListHeader` component are used. Similar to the `renderRow` property the `renderHeader` property should be set to a function that returns a `ListHeader` component.

一覧の上に置く見出し ( Header ) を表示する場合には、`renderHeader` プロパティーと `ListHeader` コンポーネントを使用します。`renderRow` プロパティーと同様に、`ListHeader` コンポーネントを返す関数を定義して、この関数に対して、`renderHeader` プロパティーをセットします。

```
<List
  dataSource={this.state.data}
  renderHeader={() => <ListHeader>Header</ListHeader>}
  renderRow={this.renderRow.bind(this)}
/>
```

また、`renderFooter` プロパティーを使用すれば、一覧の下にコンテンツを表示することもできます。

#### タップ操作可能なアイテム

モバイルアプリでは、アイテムがタップされたときに、なんらかの処理を行ったり、新しいページを表示したりことがよくあります。そのような場合には、処理が行われることを、ユーザー側にも示す必要があります。`tappable` プロパティーを使用すると、アイテムのタップ時、iOS であれば、アイテムの背景色が変わり、Android であれば、リップル ( 波紋 ) 効果が適用されます。

```
<ListItem tappable>
  Tap me!
</ListItem>
```

#### 区切り線 ( divider ) のカスタマイズ

各 `ListItem` コンポーネントは、デフォルトでは、線で区切られ、表示されます ( iOS と Android 共通 )。`modifier` プロパティーを使用されば、この区切り線をカスタマイズできます。デフォルトの区切り線は、画面の端から端まで描画されませんが、modifer を `longdivider` に指定すれば、描画されます。

```
<ListItem modifier='longdivider'>
  Long border
</ListItem>
```

また、区切り線を非表示にする場合には、modifier を `nodivider` に指定します。

```
<ListItem modifier='nodivider'>
  No border
</ListItem>
```

#### アイテムの構造

一覧上の各アイテムは、3 つのセクションに分割されています。それぞれのセクションには、コンポーネント ( 「 入力 」 系のコンポーネントなど )、サムネイル、アイコンを置くことができます ( なお、スタイルのカスタムは不要 )。セクションにアクセスする場合には、class を使用して、セクションを指定 ( `left`、`center`、`right` ) します。

```
<ListItem tappable>
  <label className='left'>
    <Input inputId='check' type='checkbox' />
  </label>
  <label className='center' htmlFor='check'>
    Checkbox
  </label>
</ListItem>
```

上記の例では、アイテムの left セクションには、チェックボックスを表示して、center セクションには、テキストを表示しています。また、ユーザーがテキストをタップしたときに、チェックボックスの切り替えを行うため、`<label>` タグも使用しています。
