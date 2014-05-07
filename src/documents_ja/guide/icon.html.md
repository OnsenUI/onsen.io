---
layout: 'docpad_en'
page: 'icon'
title: 'Icon'
needHelp: true
autotoc: true
---

## Icons

<img src="/images/docs/fontawesome.png">

Onsen UI has a built-in framework to easily display popular icons that are frequently used with mobile apps. App developers can quickly display the <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a> icons included with Onsen UI by using an ons-icon element.

This page will describe how to display an icon in Onsen UI and how it works.

### Displaying an Icon

By using an <a href="/guide/components.html#icon">ons-icon element</a>, you can specify and display an icon name with the icon attribute as below:

<pre><code class="js">&lt;ons-icon icon="bars" size="5x" &gt;&lt;/ons-icon&gt;</code></pre>

This code will be displayed on the screen as shown below:

<img src="/images/docs/fontawesome-bars.png">

You can also display a Font Awesome icon by inserting the below code, instead of using an ons-icon element.

    <i class="fa fa-bars fa-5x"></i>

Please refer to the <a href="http://fortawesome.github.io/Font-Awesome/examples/" target="_blank">Examples section</a> of the Font Awesome page for details.

### Specifying an Icon Name

Specify an icon name in the icon attribute of the ons-icon element. Please refer to the <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">icon list</a> of the Font Awesome page for the names and styles for each icon.

### Specifying an icon pixel size

A Font Awesome icon uses vector data that gets converted into a web font icon. Therefore, you can change an icon’s size by setting the pixel value in the font-size style property of the ons-icon element as below:

    <ons-icon name="bars" style="font-size: 90px"></ons-icon>

### Related Resources

 * <a href="/guide/components.html#icon">ons-icon element</a>
 * <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a>

