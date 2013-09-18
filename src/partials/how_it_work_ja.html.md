---
encoding: 'utf-8'
---

# Onsen UIとは

Onsen UIはHTMLタグによって簡単・シンプルにアプリのユーザインタフェース開発できるフレームワークです。


# ページ管理

Onsen UIはナビゲーション・タブ・スライディングメニューなどのページ管理機能を持ったコンポーネントを提供しています。

コンポーネントのタグを記述することによって画面遷移とアニメーションを簡単に実現することができます。


# ナビゲーターの使い方

ナビゲーターはツールバーと画面遷移などを主としたページ管理機能を提供します。
ツールバーは左右のボタンと動的に変更可能なタイトルを備えています。


まず"ons-navigator"タグを指定します。

    <ons-navigator title="Page 1" page="page1.html" />

"title"要素はナビゲーターのツールバータイトルとなります。
"page"要素はナビゲーターで表示したいページURLを指定します。
ここではタイトルとして"Page 1"、表示したいページとして"page1.html"を設定しています。  


ナビゲーションを使って他のページ遷移したい場合はpushPageメソッドを使用します、

    ons.navigator.pushPage('page2.html', 'Page 2');


1つ前に表示したページに戻りたい場合はpopPageメソッドを使用してください。

    ons.navigator.popPage();

*開発者コメント:*
Onsen UIのナビゲーターでは、開発者が複雑な実装を意識せずに済むよう、画面遷移やそれに伴うアニメーション、バックボタン、ツールバータイトルなどモバイルUIで必須となるコンポーネントを提供しています。


#### チュートリアル アニメーション

<iframe width="100%" height="650px" src="navigator_animation"></iframe>

# コンポーネントの組み合わせによってより複雑なUIを実現する


 **ナビゲーターの使い方** では簡単なナビゲーターとツールバー、ページ管理の使い方を説明しました。

Onsen UIでは、ナビゲーターと他のコンポーネントを組み合わせることによってより複雑なUIを実現することができます。

下記の例は、タブ項目の1つのページの中にさらにナビゲーターが存在するケースです。

*開発者コメント:*
同じようなUIを持つアプリとして、iOSデフォルトのミュージックアプリや写真アプリなどが挙げられます。これらのアプリはタブバーによるタブ切り替えと、タブが持つページ内のナビゲーションをそれぞれ組み合わせてUIが作られています。

### タブバー内にナビゲーターを持つページの例

*index.html*

    <ons-tabbar>
        <ons-tabbar-item active="true" page="navigator.html">
            One
        </ons-tabbar-item> 
        <ons-tabbar-item  page="">
            Two
        </ons-tabbar-item> 
        <ons-tabbar-item page="">
            Three
        </ons-tabbar-item> 
    </ons-tabbar>


*navigator.html*

    <ons-navigator title="Title" page="page1.html" />


*company_list.html*

    <div class='page'>
        <ons-list class="center">
            <ons-list-item>
                <h3><i class="icon-apple"></i> Apple</h3>
            </ons-list-item>

            <ons-list-item>
                <h3><i class="icon-android"></i> Android</h3>
            </ons-list-item>

            <ons-list-item>
                <h3><i class="icon-windows"></i> Winows</h3>
            </ons-list-item>         

            <ons-list-item>
                <h3><i class="icon-html5"></i> HTML5</h3>
            </ons-list-item>

            <ons-list-item>
                <h3><i class="icon-css3"></i> CSS3</h3>
            </ons-list-item>         

            <ons-list-item>
                <h3><i class="icon-github"></i> GitHub</h3>
            </ons-list-item>             
        </ons-list>      
    </div>

#### チュートリアル アニメーション  

<iframe width="100%" height="650px" src="tabbar_navigator_page_animation"></iframe>


### 様々なUIへのチャレンジ

Onsen UIコンポーネントの組み合わせで多様なUIを作成することができます。
上記の例とは逆に、ナビゲーターの中にページ内にタブを持たせるような構造も実現することができます。ナビゲーターのpushPageメソッドなどで画面遷移を行うと、異なるタブを持ったページなどに遷移することができます。