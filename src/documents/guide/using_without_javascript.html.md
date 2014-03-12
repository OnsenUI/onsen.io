---
layout: 'docpad_en'
page: 'using_without_javascript'
title: 'Using Onsen UI without JavaScript'
needHelp: true
autotoc: true
---

## Using Onsen UI without JavaScript

Onsen UI uses AngularJS and custom elements to develop mobile app UIs. However, it does not necessarily mean that you must always use JavaScript or AngularJS to use UI components.

This page will describe how to load only the Onsen UI themes and use UI components without JavaScript or AngularJS.

### Loading the Onsen UI Resources

Load only the CSS file and not the JavaScript file. Load the CSS file provided from Onsen UI by inserting the below code in the head element.

	<link rel="stylesheet" href="lib/onsen/css/onsenui.css">  
	<link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-ios7.css">

### Writing Tags

Insert the below code to display the navigation toolbar at the top of the screen.

	<div class="topcoat-navigation-bar">
		<div class="topcoat-navigation-bar__item center full">
			<h1 class="topcoat-navigation-bar__title">Header Title</h1>
		</div>
	</div>

Please refer to the [Themes](/themes/) page for how to write HTML for UI components, which are provided as custom elements.

### Related Resources

 * <a href="/guide/components.html">Components</a>
 * <a href="/themes">Themes</a>
 * <a href="/guide/bootstrap.html">Bootstrap</a>

