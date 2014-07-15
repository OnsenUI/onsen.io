# Table of Contents Plugin for DocPad
A [DocPad](https://docpad.org) plugin to generate tables of content from document header data

Note:

I'm very new to DocPad, CoffeeScript, and Node in general, so please consider this plugin very beta.

Your questions, feedback, and (pull) requests are greatly appreciated.

## Installation

```
npm install --save docpad-plugin-tableofcontents
```

## Configuration

### documentExtensions

Default: `["html"]`

Sets document types to parse. Only html is supported currently. 

### requireMetadata

Default: `true`

If **true**, only documents with the specified metadata parameter set as true will generate table of contents data.

### requiredMetadataField

Default: `'toc'`

If `requireMetadata` is set, this is the field that must be set true in the document metadata.

### addHeaderIds

Default: `true`

So that the table of contents may be generated with links to page sections, header ids should set. The plugin can automatically generate these ids, if one is not already present. It will not overwrite any id present.

### headerIdPrefix

Default: ``

Value will be added as a prefix to the automatically generated header ids.

### headerSelectors

Default: `'h2,h3,h4,h5,h6'`

A list of header selectors to search. By default, it is assumed H1 will contain the page title, and won't need to be included in the table of contents. 

This value is passed directly to the [Document.querySelectorAll](https://developer.mozilla.org/en-US/docs/DOM/Document.querySelectorAll) DOM function, and should contain appropriately valid selectors.

### rootHeaderLevel

Default: `2`

Integer containing header level we begin with. 

Depreciated, will be eventually determined from `headerSelectors`.


## Usage

The plugin searches the document for the specified headers, returning an array of `TableofcontentItem` objects. This object has the following properties:

- `text` Header text.
- `id` id of header, use to create links to page sections.
- `children` array of `TableofcontentItem` objects, with the next level of headers. 

Similar to [docpad-plugin-menu](https://github.com/sergeche/docpad-plugin-menu), using a partial as a template for output is the best method.

Create a `toc.html.eco` [partial](https://github.com/docpad/docpad-plugin-partials):

```
<% renderToc = (items) => %>
<ol class="toc">
    <% for item in items: %>
        <li><a href="#<%= item.id %>"><%= item.text %></a>
            <% if item.children: %>
                <%- renderToc(item.children) %>
            <% end %>
        </li>
    <% end %>
</ol>
<% end %>
<%= renderToc @tocItems %>
```

Include the partial in your template.

```
<div class="sidebar">
    <h3>Contents</h3>
    <%- @partial('toc.html.eco', {tocItems: @document.tableOfContents}) %>
</div>
```


## Limitations, Known Bugs

- This plugin only works with html. I would like to eventually add parsing of additional document types.
- This plugin runs each time an html document is rendered. This may happen several times, as partials and layouts are applied, and depending on your `headerSelectors`, the table of contents may be updated. I use `tableOfContents` in a partial, so updates on later renders do not affect me. This may be an issue or feature depending on how you use the plugin. I'd love some feedback or help with this.
- Need to enforce uniqueness in header ids. 
- Selected elements are not filtered / validated / checked.
- Determine `rootHeaderLevel` from `headerSelectors`.
- Testing.
- Better error handing and debug logs.

## History

Please review the `History.md` file.


## License

My work is built on the efforts of others, I hope mine will contribute to yours. Enjoy!
