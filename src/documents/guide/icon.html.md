---
layout: 'docpad_en'
page: 'icon'
title: 'Icon'
needHelp: true
toc:
  - name: 'アイコンを表示する'
    href: '#ons-icon'
  - name: 'アイコン名を指定する'
    href: '#icon-name'
  - name: 'FontAwesomeの利点'
    href: '#icon-name'
  - name: '関連するリソース'
    href: '#font-awesome'
---

## Icon

<img src="http://placehold.jp/24/cccccc/ffffff/600x200.png">

Onsen UIでは、モバイルアプリでよく用いられる典型的なアイコンを簡単に表示するための仕組みが予め用意されています。アプリ開発者は、Onsen UIに予め含まれている<a href="http://fortawesome.github.io/Font-Awesome/">FontAwesome</a>のアイコンをons-icon要素をつかって簡単に表示できます。

このページでは、Onsen UIでアイコンを表示する方法やそれらの仕組みについて説明します。

### アイコンを表示する

<a href="/guide/components.html#icon">ons-icon要素</a>を使うと、以下のようにicon属性を使ってアイコン名を指定して表示できます。

<pre><code class="js">&lt;ons-icon icon="bars" size="5x" &gt;&lt;/ons-icon&gt;</code></pre>

このコードはブラウザでは以下のように表示されます。

<img src="http://placehold.jp/24/cccccc/ffffff/100x100.png">

また、FontAwesomeのアイコンはons-icon要素を用いなくても、以下の様に記述することでも表示できます。

	<i class="fa fa-bars fa-5x"></i>

詳細はFontAwesomeの<a href="http://fortawesome.github.io/Font-Awesome/examples/" target="_blank">Examplesページ</a>を参照して下さい。 

### アイコン名を指定する

ons-icon要素のicon属性には、表示するアイコン名を指定します。どのアイコン名がどのようなアイコンを表示するのかについては、FontAwesomeの<a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">アイコンの一覧ページ</a>を参照して下さい。

### サイズをピクセル単位で指定する

FontAwesomeのアイコンは、ベクタデータをウェブフォントを使って表示しています。従って、ピクセル単位でアイコンの大きさを指定するには、ons-icon要素のstyleにfont-sizeスタイルプロパティを以下のように設定します。

	<ons-icon name="bars" style="font-size: 90px"></ons-icon>

### FontAwesomeの利点

Onsen UIでは、このアイコンをfontawesomeというアイコンライブラリを同梱しています。fontawesomeはベクターアイコンを簡単に表示するためのライブラリです。fontawesomeは、アイコンのベクターデータ表示にウェブフォントを使っています。フォントはベクターデータ

### 関連するリソース

 * <a href="/guide/components.html#icon">ons-icon要素</a>
 * <a href="http://fortawesome.github.io/Font-Awesome/">FontAwesome</a>

