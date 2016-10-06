### Creating a page

The root of a page is created using the <%- @componentLink('page') %> element. It covers the whole screen and is used as a container for the other elements.

<% if @framework is 'angular2': %>
Unlike other framework bindings, for Angular 2 you need to define extra `<div>` tags that represent page `background` and page `content` as below:
<% end %>

<% if @framework is 'angular2': %>
```
<ons-page>
  <div class="background"></div>
  <div class="content">
    Some content
  </div>
</ons-page>
```
<% else if @framework in ['js', 'angular1']: %>
```
<body>
  <ons-page>
    Some content
  </ons-page>
</body>
```
<% end %>

#### Adding a toolbar

A toolbar is defined as a <%- @componentLink('toolbar') %> or <%- @componentLink('bottom-toolbar') %> component. Here is the typical example of a toolbar.

<% if @framework isnt 'react': %>
```html
<ons-page>
  <ons-toolbar>
    <div class="left">
      <ons-back-button>Back</ons-back-button>
    </div>
    <div class="center">Title</div>
    <div class="right">
      <ons-toolbar-button>
        <ons-icon icon="md-menu"></ons-icon>
      </ons-toolbar-button>
    </div>
  </ons-toolbar>
  <% if @framework is 'angular2': %>
  <div class="background"></div>
  <div class="content">
    Some other content...
  </div><% else: %>
  Some other content...<% end %>
</ons-page>
```

<% else: %>
```
<Page renderToolbar={() =>
  <Toolbar>
    <div className="left">
      <BackButton>Back</BackButton>
    </div>
    <div className="center">Title</div>
    <div className="right">
      <ToolbarButton>
        <Icon icon="md-menu" />
      </ToolbarButton>
    </div>
  </Toolbar> }
>
  Static page app
</Page>

```
<% end %>

The toolbar is divided into 3 sections that can be specified as class names (`left`, `center`, and `right`). You can use <%- @componentLink('icon') %> to display an icon, <%- @componentLink('toolbar-button') %> or <%- @componentLink('back-button') %> to place an button, or insert any HTML content.

<% if @framework not in ['react', 'angular2']: %>
#### Page lifecycle

<%- @componentLink('page') %> provides a set of DOM events that will be fired in different moments of its life cycle. Use these events to alter the behavior on each page.

* `init` event is fired after `<<%- @mapComponentName('page') %>>` is attached to DOM. Use this event to initialize code or dynamic content of a page when it is created.
* `destroy` event is fired before `<<%- @mapComponentName('page') %>>` is destroyed and prior to DOM detachment. Use this event to clean up or save anything you need.
* `show` event is fired every time `<<%- @mapComponentName('page') %>>` comes into view, i.e. when a new page is created and shown immediately or when an existing page shows up. Use this event to run code every time a page appears.
* `hide` event is fired every time `<<%- @mapComponentName('page') %>>` disappear from view, i.e. when a visible page is destroyed or is hidden but still exists in the page stack. Use this event to run code every time a page disappears.

Page lifecycle events will be propagated to the page's descendants so they are correspondingly shown, hidden or destroyed. For example, destroying <%- @componentLink('navigator') %> will throw `hide` event only for the displayed page (navigator's top page) and `destroy` event for every page in navigator's page stack.

```html
<ons-page id="page1">This is a blank page</ons-page>

<script>
document.addEventListener('init', function(event) {
  if (event.target.matches('#page1')) {
    ons.notification.alert('Page 1 is initiated.');
    // Set up content...
  }
}, false);
</script>

```
<% end %>
