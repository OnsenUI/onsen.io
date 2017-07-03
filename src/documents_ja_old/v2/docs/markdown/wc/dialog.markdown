---
title: Dialog
component: js/ons-dialog,js/ons-alert-dialog,angular1/ons-dialog,angular1/ons-alert-dialog
framework: js,angular1
tutorial: vanilla/Reference/dialog
---

## ダイアログ ( ons-dialog、ons-alert-dialog )

通常のダイアログであれば、`<ons-dialog>` タグを使用して表示できます。また、警告用のダイアログであれば、`<ons-alert-dialog>` タグを使用して表示できます。

``` html
<ons-dialog id="dialog-1">
  This is a dialog!
</ons-dialog>
```

ダイアログを表示する場合、対象の要素へのリファレンスを取得して、`show()` メソッドを実行します。

``` javascript
document.getElementById('dialog-1').show();
```

ダイアログを非表示 ( Hide ) にする場合、`hide()` メソッドを実行します。

``` javascript
document.getElementById('dialog-1').hide();
```

#### template 機能を使用した、ダイアログの表示

前述のダイアログの表示方法以外にも、Onsen UI 提供のユーティリティ関数の 1 つである `ons.createDialog(template)` を使用すれば、ダイアログを表示できます。
このとき、ダイアログは、template ( 1 つのページ ) として定義する必要があります。このユーティリティ関数は、`Promise` を使用して、ダイアログのインスタンスを生成し返します。

``` html
<ons-template id="dialog.html">
  <ons-dialog>
    This dialog is defined as a template.
  </ons-dialog>
</ons-template>
<script>
  ons.createDialog('dialog.html')
    .then(function(dialog) {
      dialog.show();
    });
</script>
```

#### 警告用のダイアログ

警告用ダイアログと通常のダイアログの挙動に差異はありませんが、警告用ダイアログでは、追加の設定が必要となります。ただし、警告ダイアログ用の要素を使用すれば、CSS を新たに追加せずとも、洗練された警告用ダイアログを作成できます。

``` html
<ons-alert-dialog>
  <div class="alert-dialog-title">Warning!</div>
  <div class="alert-dialog-content">
    An error has occurred!
  </div>
  <div class="alert-dialog-footer">
    <button class="alert-dialog-button">Cancel</button>
    <button class="alert-dialog-button">OK</button>
  </div>
</ons-alert-dialog>
```

#### ユーティリティ関数を使用した、ダイアログの表示方法

ons.notification では、ダイアログの表示に使用できるメソッドを提供しています。

``` javascript
ons.notification.alert(options)
ons.notification.confirm(options)
ons.notification.prompt(options)
```

これらのメソッドでは、`Promise` を使用しています。結果の処理は、次のように行われます。

```
ons.notification.prompt({message: 'What is your name?'})
  .then(function(name) {
    ons.notification.alert('Hello ' + name);
  });
```
