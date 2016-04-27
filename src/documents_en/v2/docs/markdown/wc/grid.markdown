---
title: Grid
component: js/ons-row,js/ons-col,angular1/ons-row,angular1/ons-col
framework: js,angular1
---

## Grid (ons-row, ons-col)

Onsen UI provides a grid system to place your elements in the screen. The grid system divides the screen into rows and columns, just like a spreadsheet. The width and height of each grid is adjustable, and you can also condense two or more grids in a row or column, into one grid.

The layout can be performed by combining [`<ons-row>`](/v2/reference/js/ons-row.html) and [`<ons-col>`](/v2/reference/js/ons-col.html) components. The width and height can be adjusted in a flexible way.

By default, all [`<ons-col>`](/v2/reference/js/ons-col.html) inside a [`<ons-row>`](/v2/reference/js/ons-row.html) will have the same width. You can specify any `<ons-col>` elements to have a specific width and let others take the remaining width in a `<ons-row>`.

[`<ons-row>`](/v2/reference/js/ons-row.html) has `align` attribute, and `<ons-col>` has `align`, `size`, and `offset` attributes. For the `size` attribute, you can specify either in `px` or `%`.
