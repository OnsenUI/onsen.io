---
title: Input
component: js/ons-input,angular1/ons-input
framework: js,angular1
tutorial: vanilla/Reference/input
---

## テキストの入力 ( ons-input )

`<ons-input>` は、`<input>` タグと同様の機能を提供してくれます。ただし、`<ons-input>` では、マテリアルデザインのフローティングラベルが使用され、加えて、アニメーション効果も付けられています。フローティングラベル スタイルの入力欄を使用する場合には、`placeholder` 属性と `float` 属性の両方を設定します。

`type` 属性を使用すれば、チェックボックス、ラジオボタンなども設定できます。

プラットフォームの種類に応じたスタイル変更は、コンポーネント側で自動で行ってくれます。たとえば、Android 上であれば、マテリアルデザインに準拠した、入力欄、ラジオボタン、チェックボックスが表示されます。

- テキスト入力の場合

  ```html
  <ons-input placeholder="Name" float>
  ```

- パスワードの入力

  ```html
  <ons-input type="password" placeholder="Name" float>
  ```

- 数値の入力

  ```html
  <ons-input type="number" min="0" max="100" placeholder="Age" float>
  ```

- チェックボックス
  ```html
  <ons-input type="checkbox" checked></ons-input>
  ```

- ラジオボタン
  ```html
  <ons-input type="radio" name="radio"></ons-input>
  <ons-input type="radio" name="radio"></ons-input>
  ```
