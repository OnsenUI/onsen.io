---
layout: 'docpad_en'
page: 'bootstrap'
title: 'Bootstrap'
needHelp: true
autotoc: true
---

## Bootstrap

Onsen UI is a UI framework for mobile HTML5. This page will describe the initialization processes to start using the Onsen UI framework.

### The Entry Point

For the [Minimum Project](/OnsenUI/project_templates/onsen_ui.zip) of Onsen UI, insert the below code in index.html to serve as the entry point for your app.

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

This HTML processes the following:

 * Loading the Onsen UI resources
 * Initializing AngularJS and Onsen UI
 * Declaring an ons-screen Element

### Loading Resources

Load the application-specific CSS file and the Onsen UI CSS file with the CSS.

    <link rel="stylesheet" href="styles/app.css"/>
    <link rel="stylesheet" href="lib/onsen/css/onsenui.css">  
    <link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-ios7.css">

topcoat-mobile-onsen-ios7.css is an Onsen UI theme. You can change the theme by replacing topcot-mobile-onsen-ios7.css with another file when loading the CSS file. Please refer to the [Themes](/themes/) page for details.

Load the Onsen UI and AngularJS JavaScript files with the JavaScript file.

    <script src="lib/onsen/js/angular/angular.js"></script>    
    <script src="lib/onsen/js/onsenui.js"></script>    

### Initializing Modules

Set myApp value to <a href="http://docs.angularjs.org/api/ng/directive/ngApp">ng-app</a> attribute in the html element to initialize AngularJS. Specify the ng-app attribute to boot the loaded AngularJS.

  <html lang="en" ng-app="myApp">

Next, declare that myApp module uses the onsen.directives module from Onsen UI. This declaration will load custom elements like ons-screen and the ons-navigator-toolbar.

    <script>
      angular.module('myApp', ['onsen.directives']);
    </script>

### Declaring an ons-screen Element

The final step is to declare an ons-screen element after the body element. Set the first screen to the page attribute.

    <ons-screen page="home_navigator.html"></ons-screen>

### Related Resources

 * [Getting Started](/guide/getting_started.html)
 * [Themes](/themes/)
 * [AngularJS](http://docs.angularjs.org/guide/)
 * [Using Onsen UI without JavaScript](/guide/using_without_javascript.html)

