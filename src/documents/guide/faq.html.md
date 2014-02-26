---
layout: 'default_en'
page: 'faq'
title: 'FAQ'
needHelp: true
autotoc: true
---

## FAQ

===TOC===

----

### Q. What is ng-app, ng-controller or ng-click?

They are <a href="http://angularjs.org" target="_blank">Angular.js</a> directives. Onsen UI is based on AngularJS. Using Onsen UI means using AngularJS.

Please refer to the link below for the complete list of AngularJS directives.

 * <a href="http://docs.angularjs.org/api/" target="_blank">AngularJS API Docs</a>

----

### Q. What is the reason to use the ng-click attribute instead of the onclick attribute?

Because the ng-click attribute can reference AngularJS scopes while the onclick attribute can't.

Functions to change Onsen UI like ons.navigator.pushPage() are set with AngularJS scopes. Therefore, these need the ng-click attribute not the onclick attribute.

----

### Q. What are the advantages of using AngularJS?

<a href="http://angularjs.org/" target="_blank">Angular.js</a> is a framework for HTML5 apps developed by Google.

AngularJS offers following advantages:

 * Powerful data binding
 * Templates
 * DI containers (injectors)
 * Application code modularization

Onsen UI custom elements are implemented with the <a href="http://docs.angularjs.org/guide/directive" targte="_blank">AngularJS directive</a> framework.

 * <a href="http://angularjs.org" target="_blank">AngularJS — Superheroic JavaScript MVW Framework</a></li>

----

### Q. I can't load a page with the ons-screen element, why?

Please make sure that the Onsen UI JavaScript file is loading, that the correct ng-app attribute is set, and the Onsen UI directive is loading.

Please refer to the <a href="/guide/bootstrap.html">Bootstrap</a> page for details.

----

### Q. I can't display an icon with the ons-icon element, why?

Possible causes are either that the font-awesome CSS file is not loading, or a wrong icon name is set.

Please make sure the below CSS file has been loaded:

    <link rel="stylesheet" href="lib/onsen/css/font_awesome/css/font-awesome.min.css">

Please refer to the <a href="/guide/icon.html">Icons</a> page for how to display and name icons.

----

### Q. How can I change a look and feel of the Onsen UI themes?

Onsen UI themes are written in CSS just like normal web pages. You can change any theme's appearance by overwriting the theme’s CSS style.

Please refer to the <a href="/guide/customize.html">Customzie</a> page for details. Please refer to the <a href="/guide/theme.html">Theme</a> page for details about working with themes.

