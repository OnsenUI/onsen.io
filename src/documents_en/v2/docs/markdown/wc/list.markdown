---
title: List
component: js/ons-list,js/ons-list-item,js/ons-list-header,angular1/ons-list,angular1/ons-list-item,angular1/ons-list-header
framework: js,angular1
tutorial: vanilla/Reference/list
---

## List (ons-list)

List is a very popular pattern to display a set of data in a scrollable view. Onsen UI supports scrollable lists by using [`<ons-list>`](/v2/docs/js/ons-list.html) and [`<ons-list-item>`](/v2/docs/js/ons-list-item.html) tags. `<ons-lazy-repeat>` is also provided if you want a list with a large number of items.

To create a list, place a [`<ons-list>`](/v2/docs/js/ons-list.html) tag and [`<ons-list-item>`](/v2/docs/js/ons-list-item.html) tags. Also, [`<ons-list-header>`](/v2/docs/js/ons-list-header.html) can be used to represent grouped list items.

#### Basic list

Here is an example of a basic list having a header and three items.

``` html
<ons-list>
  <ons-list-header>My friends</ons-list-header>
  <ons-list-item>Alice</ons-list-item>
  <ons-list-item>Bob</ons-list-item>
  <ons-list-item>Eve</ons-list-item>
</ons-list>
```

#### More complicated list

Onsen UI list items provide a secondary syntax where the list item is divided into three sections. This can be used to add icons, thumbnails or even form elements to your list items:

``` html
<ons-list-item>
  <div class="list__item__left">
    <ons-icon icon="md-face" class="list__item__icon"></ons-icon>
  </div>
  <div class="list__item__center">
    Icon and switch
  </div>
  <div class="list__item__right">
    <ons-switch></ons-switch>
  </div>
</ons-list-item>
```

#### Tappable item

The `tappable` attribute is used to give the user an indication when they tap a list item. In iOS the background color will change when tapped, and on Android it will display the Material Design ripple effect.

``` html
<ons-list-item tappable>Tap me!</ons-list-item>
```

#### Modifiers

`<ons-list>` and `<ons-list-item>` has several modifiers to customize the visual appearance. More than one modifiers can be added by separating them with spaces.

##### Inset lists

To create an inset list you can use the `inset` modifier on the `<ons-list>` element.

``` html
<ons-list modifier="insert">
  ...
</ons-list>
```

##### Changing the divider

The `longdivider` and `nodivider` modifiers can be used to change the length, or remove the divider (horizontal line) between list items completely. The default style for list items is a divider that doesn’t completely cover the whole screen. Instead it has some padding on the left to make it look more similar to native lists.

By adding the nodivider modifier the divider can be removed.

``` html
<ons-list>
  <ons-list-item modifier="nodivider">Item A</ons-list-item>
  <ons-list-item modifier="nodivider">Item B</ons-list-item>
</ons-list>
```
