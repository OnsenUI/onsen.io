---
layout: 'docpad_en'
page: 'bootstrap'
title: 'Bootstrap'
needHelp: true
autotoc: true
---

## Bootstrap

Onsen UIはモバイルHTML5用のUIフレームワークです。このページでは、ユーザがOnsen UIフレームワークを使う際に、どのような初期化のための手続きを取るのかについて説明します。

### エントリポイント

Onsen UIを使った[最小限のプロジェクト](/OnsenUI/project_templates/minimum.zip)では、アプリのエントリポイントのindex.htmlに以下のようなコードを記述します。 

	<!doctype html>
	<html lang="en" ng-app="myApp">
	<head>
	  <meta charset="utf-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	  <title>My App</title>  
	  <link rel="stylesheet" href="styles/app.css"/>
	  <link rel="stylesheet" href="lib/onsen/css/onsenui.css">  
	  <link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-ios7.css">

	  <script src="lib/onsen/js/angular/angular.js"></script>    
	  <script src="lib/onsen/js/onsenui.js"></script>    
	  <script src="js/app.js"></script> 
	  <script>
	    angular.module('myApp', ['onsen.directives']);
	  </script>
	  
	</head>

	<body>    
	  
	  <ons-screen page="home_navigator.html"></ons-screen>
	 
	</body>
	</html>

このHTMLでは、以下のことをやっています。

 * Onsen UIのリソースの読み込み
 * Angular.jsとOnsen UIの初期化
 * ons-screen要素の宣言

### リソースの読み込み

CSSには、アプリケーション固有のCSSファイルとOnsen UIのCSSファイルを読み込んでいます。

	  <link rel="stylesheet" href="styles/app.css"/>
	  <link rel="stylesheet" href="lib/onsen/css/onsenui.css">  
	  <link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-ios7.css">

topcoat-mobile-onsen-ios7.cssは、Onsen UIのテーマです。読み込むCSSファイルをtopcot-mobile-onsen-ios7.cssから別のものにすると、テーマを切り替えることができます。詳細は、[Theme](/guide/theme.html)のページを参照して下さい。

JavaScriptファイルは、OnsenUIとAngular.jsのJavaScriptファイルを読み込んでいます。

	  <script src="lib/onsen/js/angular/angular.js"></script>    
	  <script src="lib/onsen/js/onsenui.js"></script>    

### onsen.directivesモジュールの読み込み

	<html lang="en" ng-app="myApp">

Angular.jsの初期化のために、ng-app属性にmyAppという値を指定しています。

	  <script>
	    angular.module('myApp', ['onsen.directives']);
	  </script>

次に、myAppというモジュールがOnsen UIの提供するonsen.directivesモジュールを利用することを宣言します。これにより、ons-screenやons-navigator-toolbarなどのカスタム要素などの機能が読み込まれます。

### ons-screen要素の宣言

最後に、body要素以下にons-screen要素を宣言しています。page属性には、一番最初に表示される画面を設定します。

	  <ons-screen page="home_navigator.html"></ons-screen>

### 関連するリソース

 * [Themes](/guide/theme.html)
 * [AngularJS](http://docs.angularjs.org/guide/)
 * [Using Onsen UI without JavaScript](/guide/using_without_javascript.html)


