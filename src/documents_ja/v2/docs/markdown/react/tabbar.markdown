---
title: Tabbar
framework: react
component: react/Tabbar
tutorial: react/Reference/tabbar
---

## タブバー ( Tabbar )

タブバー ( ナビゲーションの 1 種 ) をアプリ上に配置する場合には、`Tabbar` コンポーネントを使用します。モバイルアプリの世界では、タブバーは、頻繁に使用されるナビゲーションの 1 つです。

#### 基本的な使用方法

タブを定義する場合には、`Page` コンポーネントが 1 つ、`Tab` コンポーネントが 1 つ必要です。`Tab` コンポーネントが実際のタブを表示し、タブがタップされたときには、 `Page` コンポーネント ( ページ ) が表示されます。

`Tabbar` コンポーネント上では、`index` プロパティーを使用して、有効にするページを指定できます。また、`renderTabs` と呼ばれるプロパティーもあります。`renderTabs` プロパティーを使用する場合には、`content` key と `tab` key を持つオブジェクト ( 群 ) を格納する配列を返す関数を定義して、この関数に対して、同プロパティーをセットします。

```
{
  content: <Page />,
  tab: <Tab />
}
```

タップされたタブの処理を適正に行うため、`onPreChange` と呼ばれるハンドラー ( 関数 ) を使用し、インデックスを更新します。たとえば、2 つのタブを持つアプリを作成する場合、コードは次のようになります。

```
class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  renderTabs() {
    return [
      {
        content: <HomePage />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <SettingsPage />,
        tab: <Tab label='Settings' icon='md-settings' />
      }
    ]
  }

  render() {
    return (
      <Tabbar
        index={this.state.index}
        onPreChange={({index}) => this.setState({index})}
        renderTabs={this.renderTabs.bind(this)}
      />
    );
  }
}
```

なお、このコードを正常に動作させるためには、`HomePage` コンポーネントと `SettingsPage` コンポーネンの両方を、`Page` コンポーネント上にレンダリングする必要があります。

####  タブ ( Tab ) コンポーネント

タブの外見の定義方法は、2 通りあります。`Tab` コンポーネントにラベルを付けるか ( 子として )、または、`label` もしくは `icon` プロパティーを使用して、外見を指定することができます。

上記の例では、プロパティーを使用しましたが、次のように記述することもできます。

```
<Tab>
  Label
</Tab>
```
