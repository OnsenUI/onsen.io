---
title: Pull Hook
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
tutorial: vanilla/Reference/pull-hook
---

## プルフック ( PullHook、ons-pull-hook )

pull-hook コンポーネントを使用すれば、[`<ons-page>`](/v2/docs/js/ons-page.html) 要素に、「 ページを引っ張って、更新 」 ( "pull-to-refresh" ) 機能を付け加えることができます。この機能は、外部の提供元 ( データベース、RSS フィード、Web API など ) から、手動でデータを取得するときに便利です。

[`<ons-pull-hook>`](/v2/docs/js/ons-pull-hook.html) タグを使用すれば、pull-hook コンポーネントを作成・表示できます。プルフック操作を行うと、デフォルトでは、ページ上に表示されたすべてのコンテンツが下方向にいったん下がります。このような挙動をさせたくない場合には、`fixed-content` 属性を指定します。

``` html
<ons-page>
  <ons-pull-hook>
    Release to refresh
  </ons-pull-hook>
</ons-page>
<script>
  document.querySelector('ons-pull-hook').onAction = function(done) {
    setTimeout(done, 1000);
  };
</script>
```

プルフック時の挙動は、`onAction` プロパティーのコールバック内で定義されます。このコールバックは、ページが引っ張られ、解放されたときに、実行されます。

`changestate` イベントを使用すれば、コンポーネントの状態 ( 下記の値 ) を取得できます。この値を使用すれば、ユーザーへの表示メッセージをカスタマイズすることもできます。

* `initial`: プルフック操作前のデフォルトの状態です。ドラッグされ、height 関連のパラメーターで指定した値を超えるまで、要素はこの状態になっています。

* `preaction`: この状態にある場合、プルフック操作から解放されたときに、定義した処理を開始します。なお、引っ張っている最中に、画面に指をおいたまま、プルフックを始めた元の位置に指を戻す ( 上方向に ) と、後発の処理がキャンセルされます。

* `action`: 処理が行われている最中は、この状態になります。処理後、状態が `initial` に戻ります ( `initial` が結果として返されます )。

#### height 関連のパラメーター ( しきい値 ) 

[`<ons-pull-hook>`](/v2/docs/js/ons-pull-hook.html) コンポーネントが持つ属性の中で、height 関連の属性が最も重要です。この属性の値を しきい値 として、前述の状態の移行が行われるためです。2 つの属性を提供しています。

* `height`: コンポーネントの高さを指定します。この値より、遠くに引っ張られた ( プル/Pull ) 場合、"preaction" 状態に遷移します。デフォルト値は、"64px" です。

* `threshold-height`: しきい値 となる高さを指定します。この値より、遠くに引っ張られた ( プル/Pull ) 場合、"action" 状態に自動で遷移します。
デフォルト値は、"96px" です。負の値、または、height よりも小さい値を指定した場合、このプロパティーは無効になります。


