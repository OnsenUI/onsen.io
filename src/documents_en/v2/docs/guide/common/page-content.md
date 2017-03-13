### Adding page content

For a full list of components please check the [reference page](/v2/docs/<%- @framework %>.html).

#### Form elements

Onsen UI provides a rich set of form components. Apart from <%- @componentLink('button') %>, <%- @componentLink('switch') %> and <%- @componentLink('range') %>, perhaps the <%- @componentLink('input') %> component is the most common one since it supports different shapes: `checkbox`, `radio`, `password`, etc.

<% if @framework isnt 'react': %>
```
<ons-page>
  <ons-toolbar>
    <div class="center">Form</div>
  </ons-toolbar>
  <div <%- if @framework isnt 'angular2' then 'style="text-align: center; margin-top: 30px;"' else 'class="content"' %>>
    <p><ons-input type="text" placeholder="Username" float></ons-input></p>
    <p><ons-input type="password" placeholder="Password" float></ons-input></p>
    <p><ons-button>Sign in</ons-button></p>
  </div>
</ons-page>
```
<% else: %>
```
<Input
  value={this.state.text} float
  onChange={(event) => { this.setState({text: event.target.value})} }
  modifier='material'
  placeholder='Username' />

<Input type="checkbox" checked={this.state.checked} onChange={this.onChange} />
```
<% end %>

#### Lists

Lists are a very common pattern in mobile apps and thus Onsen UI provides abstraction for it. By using <%- @componentLink('list') %>, <%- @componentLink('list-item') %> and <%- @componentLink('list-header') %> you can make simple or complex lists of items. Every list item is by default divided into three sections, just like `<<%- @mapComponentName('toolbar') %>>`, and some CSS classes are provided for default styles (`list-item__icon`, `list-item__thumbnail`, `list-item__title` and `list-item__subtitle`).

<% if @framework isnt 'react': %>
```
<ons-list>
  <ons-list-header>Header</ons-list-header>
  <ons-list-item>
    <div class="left">
      <ons-icon icon="md-face" class="list-item__icon"></ons-icon>
    </div>
    <div class="center">
      <span class="list-item__title">Title</span>
      <span class="list-item__subtitle">Subtitle</span>
    </div>
    <label class="right">
      <ons-switch></ons-switch>
    </label>
  </ons-list-item>
  ...
</ons-list>
```
<% else: %>
```
<List
  dataSource={['Row 1', 'Row 2']}
  renderRow={(row, idx) => (
    <ListItem modifier={idx === this.state.data.length - 1 ? 'longdivider' : null}>
      <div className="left">
        <Icon icon="md-face" className="list-item__icon" />
      </div>
      <div className="center">
        <span className="list-item__title">{row}</span>
        <span className="list-item__subtitle">Subtitle</span>
      </div>
      <label className="right">
        <Switch />
      </label>
    </ListItem>
  )}
/>
```
<% end %>

<% if @framework isnt 'react': %>
##### Infinite scroll

Adding new items to the list whenever the user reaches the bottom of the list is a very common practice. This use case is covered in <%- @componentLink('page') %> component.

<%if @framework is 'vue': %>
An `infiniteScroll` prop can be specified in order to pass a function handler.
<% else if @framework is 'angular1': %>
For AngularJS, `ng-infinite-scroll` attribute allows to use scoped variables.
<% else: %>
This component provides a `onInfiniteScroll` property that is called every time the scroll is near the bottom.
<% end %>

##### Lazy repeat

For cases when the list can contain thousands of items, <%- @componentLink('lazy-repeat') %> component will enhance the performance by loading and unloading items depending on the current scroll.

#### Layouting

Onsen UI provides a grid system to place your elements in the screen. The grid system divides the screen into rows and columns, just like a spreadsheet. The width and height of each grid is adjustable, and you can also condense two or more grids in a row or column, into one grid.

The layout can be performed by combining <%- @componentLink('col') %> and <%- @componentLink('row') %> components. The width and height can be adjusted in a flexible way.

Grid is not necessary in general for list items. Special layout is provided for list items based on flat iOS and Material Design specification. See [list](#lists) section for more information.

#### Control and visual components

Other components from different categories are available to complete the developer needs.

##### Carousel

<%- @componentLink('carousel') %> and <%- @componentLink('carousel-item') %> components provide a simple carousel that can optionally be overscrollable and fullscreen.

##### Pull-hook

A very common way to check to get updates in apps is given by the <%- @componentLink('pull-hook') %> component, which enables a simple "pull to refresh" functionality.

##### Speed-dial

<%- @componentLink('speed-dial') %> and <%- @componentLink('speed-dial-item') %> are just a set of floating action buttons (<%- @componentLink('fab') %>) that can be shown or hidden by the user. This components are mainly used in Material Design.

##### Progress

<%- @componentLink('progress-bar') %> and <%- @componentLink('progress-circular') %> display the loading progress like it's done in Material Design. Two modes are supported: display the exact progress that is provided to the component or display an indeterminated progress.

##### Icons

Onsen UI bundles three icon packs to be used with <%- @componentLink('icon') %> component:

  * [Font Awesome](https://fortawesome.github.io/Font-Awesome/) - Prefix `fa-`
  * [Ionicons](http://ionicons.com/) - Prefix `ion-`
  * [Material Icons](https://design.google.com/icons/) - Prefix `md-`

In general, Ionicons are good for iOS apps while the Material Icons work best for apps using Material Design.

#### Gesture detector

It is a common use case to detect a finger gesture and do a specific task. Onsen UI utilizes a modified version of [Hammer.js](https://hammerjs.github.io/) for gesture detection. The Gesture Detector class (Hammer.js) is exposed in <%- @componentLink('ons.GestureDetector') %> object.

<% if @framework isnt 'angular2': %>
```
var divGD = ons.GestureDetector(document.querySelector('#my-div'));
divGD.on('dragup dragdown', function(event) {
  console.log('drag Y axis');
});
```
<% else: %>
```
@ViewChild('somediv') divGD; // <div #somediv>
this.divGD.nativeElement.on('dragup dragdown', function(event) {
  console.log('drag Y axis');
});
```
<% end %>

If you want to use another library for this purpose and have any conflict, Onsen UI gesture detectors can be disabled easily:

<% if @framework isnt 'angular2': %>
```
ons.GestureDetector(document.querySelector('#my-menu')).dispose(); // Remove event listeners from the menu
```
<% else: %>
```
@ViewChild('mymenu') myMenu; // <ons-splitter #mymenu>
ons.GestureDetector(this.myMenu.nativeElement).dispose(); // Remove event listeners from the menu
```
<% end %>


<% if @framework isnt 'react': %>
Also, <%- @componentLink('gesture-detector') %> component can be used to wrap the target DOM element that should detect the fingers in a handy way. 
<% end %>


