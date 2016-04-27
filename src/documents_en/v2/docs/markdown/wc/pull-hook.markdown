---
title: Pull Hook
component: js/ons-tabbar,js/ons-tab,angular1/ons-tabbar,angular1/ons-tab
framework: js,angular1
---

## Pull Hook (ons-pull-hook)

The Pull Hook component adds "pull-to-refresh" behavior to an [`<ons-page>`](/v2/reference/js/ons-page.html) element. This feature is very convenient for manually fetching data from external sources (like a database, RSS feed or web API) into an application.

[`<ons-pull-hook>`](/v2/reference/js/ons-pull-hook.html) tag is used to create and display a new Pull Hook component. By default, Pull Hook will drag down all the content of the page when pulling it. The attribute `fixed-content` will prevent the page content to be dragged along with the Pull Hook.

``` html
<ons-page>
  <ons-pull-hook>
    Release to refresh
  </ons-pull-hook>
</ons-page>
<script>
  var loadStuff = function(done) {
    setTimeout(done, 1000);
  };
  document.querySelector('ons-pull-hook').setActionCallback(loadStuff);
</script>
```

The Pull Hook behavior is defined by the `setActionCallback` method. This method will be executed when the page is pulled down and released.

You can also get the state by `changestate` event. Each one associated with a customizable graphical representation:

* `initial`: default state before any user interaction, the element remains in this status until it's totally dragged down, going beyond its height limit.

* `preaction`: if the component is in this state it will execute its action if it's released. It's still possible to cancel the action by dragging the page up again.

* `action`: the pull hook will be in this state while its action is running. It will return to the `initial` state.

#### Pull Hook height parameters

[`<ons-pull-hook>`](/v2/reference/js/ons-pull-hook.html) component's height attributes are very important, since they define when a state transition should occur. The two attributes are:

* `height`: specifies the height of the component. When pulled down further than this value it will switch to the "preaction" state. The default value is "64px".

* `threshold-height`: specifies the threshold height. The component automatically switches to the "action" state when pulled further than this value. The default value is "96px". A negative value or a value less than the height will disable this property.
