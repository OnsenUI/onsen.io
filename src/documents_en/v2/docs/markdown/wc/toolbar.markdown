---
title: Toolbar
component: js/ons-toolbar,angular1/ons-toolbar
framework: js,angular1
---

### Toolbar component (ons-toolbar, ons-bottom-toolbar)

A toolbar is defined as a [`<ons-toolbar>`](/v2/reference/js/ons-toolbar.html) or [`<ons-bottom-toolbar>`](/v2/reference/js/ons-bottom-toolbar.html) component. Here is the typical example of a toolbar.

```html
<ons-toolbar>
  <div class="left">
    <ons-back-button>Back</ons-back-button>
  </div>
  <div class="center">Title</div>
  <div class="right">
    <ons-toolbar-button>
      <ons-icon icon="fa-bars">
    </ons-toolbar-button>
  </div>
 </ons-toolbar>
```

The toolbar is divided into 3 sections (left, center, and right), and they can be specified as class names (`left`, `center`, and `right`). You can use [`<ons-icon>`](/v2/reference/js/ons-icon.html) to display an icon, [`<ons-toolbar-button>`](/v2/reference/js/ons-toolbar-button.html) or [`<ons-back-button>`](/v2/reference/js/ons-back-button.html) to place an button, or insert any HTML content.
