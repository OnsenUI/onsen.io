### Multiple page navigation

In Onsen UI there are three navigation patterns based on three different components: <%- @componentLink('navigator') %>, <%- @componentLink('tabbar') %> and <%- @componentLink('splitter') %>. These components supply "frames" able to change their inner content. The content of these frames will normally be <%- @componentLink('page') %> components but it is also possible to nest navigation components in order to combine them.

More information is provided in the "Docs" tab of the Live Example section of each component.

#### Navigator

The main pattern uses <%- @componentLink('navigator') %> component to provide a stack where you can push and pop pages with transition animations. This is the basic and most used navigation pattern and can be combined with the other two.

Use this pattern when you have a sequential flow where a page depends on the previous one. Data can be optionally passed from one page to another.

#### Tabbar

In this case, by using <%- @componentLink('tabbar') %> component a visible tabbar is displayed at the bottom or the top of the page with tabs associated to different pages. The component will load content depending on the selected tab (<%- @componentLink('tab') %>). This pattern is commonly used to sepparate different sections in the app.

#### Menu

A menu can be added using the <%- @componentLink('splitter') %> component. For small devices it can be used to create a swipeable menu, but for larger screens it can automatically display a column layout.

Splitter provides two frames that can load different content: <%- @componentLink('splitter-side') %> and <%- @componentLink('splitter-content') %>. A common usecase is to show a list in the side menu where each item loads a different page in the content frame. Notice that loading new content in any of these frames will completely remove the previous loaded content. For more complex navigation consider nesting `<ons-navigator>` inside `<ons-splitter-content>`.

