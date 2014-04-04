---
layout: 'docpad_en'
page: 'theme'
title: 'Theme'
needHelp: true
autotoc: true
---

## Working with Themes

Onsen UI offers several themes to provide different styles for the UI components. App developers can choose a theme that best fits your app.

This page will describe how to use the <a href="/themes">Onsen UI themes</a>.

### Available Themes

Onsen UI currently has three available themes:

 * ios7
 * android4_4
 * onsen

### Changing Themes

Onsen UI provides each theme in a single CSS file. All you need to do to switch the theme is change the CSS file when loading it with the HTML.

    <!-- case for using ios7 theme -->
    <link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-ios7.css">

    <!-- case for using android4_4 theme -->
    <link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-android4_4.css">

    <!-- case for using onsen-blue theme -->
    <link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-blue.css">

### Applying Dynamic Themes

You can also change themes dynamically, specific to the device or browser currently running the app.

    <script type="text/javascript">
    if ($.os.iphone) {
        document.write('<link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-ios7.css">');
    } else {
        document.write('<link rel="stylesheet" href="lib/onsen/css/topcoat-mobile-onsen-blue.css">');
    }
    </script>

### Expanding Themes

You can expand on existing themes by overwriting styles with CSS, just as you would do with a normal web page.

Please refer to the theme customization section of the <a href="/guide/customize.html">Customize</a> page and <a href="/themes/">Themes</a> page for details.

### Related resources

 * <a href="/guide/customize.html">Customize</a>
 * <a href="/themes/">Themes</a>

