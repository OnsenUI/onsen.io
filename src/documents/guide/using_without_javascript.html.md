---
layout: 'docpad_en'
page: 'using_without_javascript'
title: 'Using Onsen UI without JavaScript'
needHelp: true
autotoc: true
---

## Using Onsen UI without JavaScript

Onsen UIは、Angular.jsやカスタムエレメントを使ってモバイルアプリケーションのUIを開発しますが、UIコンポーネントを使うのに、必ずしもJavaScriptやAngular.jsを使わなければいけないわけではありません。

このページでは、JavaScriptやAngular.jsを導入せずに、Onsen UIのテーマだけを読み込んでUIコンポーネントを利用する手順を紹介します。

### JavaScript無しで利用する

Onsen UIのテーマは、CSSフレームワークの<a href="http://topcoat.io">topcoat</a>をベースに作成されています。 topcoatは、HTML5アプリケーションに利用できるUIコンポーネントを記述するためのCSSフレームワークです。

JavaScript無しで利用できる


### Onsen UIのリソースを読み込む

JavaScriptファイルは読み込まずに、CSSファイルのみを読み込みます。head要素内に以下のようにしてOnsen UIが提供するCSSを読み込みます。

	<link rel="stylesheet" href="lib/onsen/css/onsenui.css">  
	<link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-ios7.css">

### タグを記述する

画面の上部にナビゲーションツールバー表示したい場合には、body要素以下に次のように記述します。

	<div class="topcoat-navigation-bar">
		<div class="topcoat-navigation-bar__item center full">
			<h1 class="topcoat-navigation-bar__title">Header Title</h1>
		</div>
	</div>

<img src="http://placehold.jp/24/cccccc/ffffff/320x640.png">

カスタムエレメントとして提供されているUIコンポーネントのHTMLをどのように記述するかについては、[Components](/guide/components.html)のページを参照して下さい。

### 関連するリソース

 * <a href="/guide/components.html">Components</a>
 * <a href="/guide/theme.html">Theme</a>
 * <a href="/guide/bootstrap.html">Bootstrap</a>

