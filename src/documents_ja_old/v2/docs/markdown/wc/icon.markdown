---
title: Icon
component: js/ons-icon,angular1/ons-icon
framework: js,angular1
tutorial: vanilla/Reference/icon
---

## アイコン ( ons-icon )

Onsen UI では、多数のアイコンを提供しています ( [Font Awesome](https://fortawesome.github.io/Font-Awesome/) から 400 個以上のアイコン、[Ionicons](http://ionicons.com/) から 500 個以上のアイコン、[Material Design Icons](http://zavoloklom.github.io/material-design-iconic-font/icons.html) から 700 個以上のアイコンが利用できます。 )。

アイコンの表示には、[`<ons-icon>`](/v2/docs/js/ons-icon.html) を使用できます。表示するアイコンを指定する場合には、`icon` 属性を使用します。

#### プラットフォームの種類に応じたスタイル変更

プラットフォームの種類に応じて、アイコンを変える場合があります。たとえば、Android では、マテリアルデザインに対応したボタンを表示し、iOS では、他の種類のアイコンを表示するというように、スタイルの変更が必要な場合があります。Onsen UI では、次のようにして、スタイルの変更を行えます。

```
<ons icon="ion-navicon, material:md-menu"></ons-icon>
```

この記述で、Android の場合には、マテリアルデザインに対応した `md-menu` アイコンが表示され、他のプラットフォームの場合には、`ion-navicon` アイコンが表示されます。

#### Font Awesome を使用する場合

`icon` 属性に指定する値に `fa-` が付記されている場合、Font Awesome 提供のアイコンが適宜使用されます。利用可能なアイコンの詳細は、[Font Awesome の Web サイト](http://fortawesome.github.io/Font-Awesome/icons/) をご確認ください。`icon` 属性に指定する値に接頭辞が付記されていない場合、Font Awesome Collection が使用されます。

#### Ionicons を使用する場合

`icon` 属性に指定する値に `ion-` が付記されている場合、Ionicons 提供のアイコンが適宜使用されます。利用可能なアイコンの詳細は、[Ionicons Website](http://ionicons.com/) をご確認ください。

#### Material Icons を使用する場合

マテリアルデザインのアイコンには、接頭辞として、`md-` が付記されています。利用可能なアイコンの詳細は、[こちらのページ](http://zavoloklom.github.io/material-design-iconic-font/icons.html) をご確認ください。

```html
<ons-icon icon="fa-angle-left"></ons-icon>
<ons-icon icon="fa-angle-left" size="40px"></ons-icon>
<ons-icon icon="fa-angle-left" size="40px" rotate="90"></ons-icon>
<ons-icon icon="fa-angle-left" spin="true"></ons-icon>
```

size 属性を使用すれば、アイコンのサイズを指定できます。

```html
<ons-icon icon="fa-angle-left" size="40px">
```

また、rotate 属性を使用して、アイコンを回転させることもできます

```html
<ons-icon icon="fa-angle-left" size="40px" rotate="90deg">
```

また、`spin` 属性を使用すれば、アイコンにアニメーション効果を付けることもできます。スピナーの表示などに使用できます。

```html
<ons-icon icon="fa-angle-left" spin>
```
