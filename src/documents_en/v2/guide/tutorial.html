---
title: 'Tutorial'
order: 35
tocGroup: guide
layout: docs.html.eco
description: 'Learn about Onsen UI components and common tasks while creating an
app'
---

<%- @markdown => %>

### Tutorial

#### Overview

This tutorial will show you how to build an app from scratch using Onsen UI. We
will cover solutions to common tasks in app development, including:

  - Navigating tabs and pages
  - Authenticating user login
  - Paging data from a remote API
  - Displaying large lists efficiently
  - Showing a swipeable gallery of images

The app you'll be creating displays a list of Pokémon fetched from a remote API.
The user can save Pokémon from the list and view them in a grid display. Tapping
a Pokémon in a grid will open a gallery of images. The user can swipe left and
right to move through the gallery.

#### Following this tutorial

There are a few ways you can follow along with this tutorial. Choose one of
these options:

##### 1. Monaca CLI & Debugger (Recommended)

Monaca CLI is a command line tool for developing mobile and web apps. It can be
used with Monaca Debugger, a mobile app that allows you to easily run your
project on a mobile device from your local computer. Using these tools requires
you to sign up for a free Monaca account.

Install node and npm, then run `npm install -g monaca` to install Monaca
CLI. Run `monaca login`, then create a new project with:

     monaca create tutorial --template onsenui-v2-js-minimum

To debug the project, install Monaca Debugger from the app store, then run:

     monaca debug

You can also preview your project in a web browser with `monaca preview`.

For more information about Monaca CLI, see [the official
website](https://monaca.io/cli.html).

> Monaca CLI is usually used for making Cordova projects. However, for the
> purposes of this tutorial Cordova doesn't matter, so you can safely ignore it.
> Just know for now that your project will contain some Cordova configuration
> files but that we won't be touching them.


##### 2. Onsen UI Playground

Onsen UI Playground is a web app that lets you run snippets of Onsen UI code
without having to install anything. It's great for testing out small ideas. Once
we start using multiple files though, you'll want to switch to a local setup
instead.

Try out Onsen UI Playground [here](https://onsen.io/playground/).


##### 3. CDN

Unpkg provides CDN support for Onsen UI’s CSS and JavaScript. Just use these CDN links:

```html
<link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsenui.css">
<link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsen-css-components.min.css">
<script src="https://unpkg.com/onsenui/js/onsenui.min.js"></script>
```

#### Creating a page

Let's create the first screen. Each screen in Onsen UI is called a "page". The
Onsen UI page component is called `ons-page`. Delete the contents of the
`<body>` of `index.html` (leave in everything else) and replace it with the
following:

```html
<ons-page></ons-page>
```

> For Monaca CLI users, you'll find `index.html` in the `www` directory. All
> source files go in `www`.

Run the app on your device or browser and you will see screen is a light gray
color. This is the `ons-page` component.

> `monaca debug` is the Monaca CLI command to run the project on your device.
> For this you will need Monaca Debugger installed on your device (available in
> the app store). If you just want to view the app in your browser, run `monaca
> preview`.

Typically, everything that you want to display in a page should go within
`ons-page` tags. This way Onsen UI will automatically position your elements
correctly.

##### Creating a login screen

The first thing you want to show a user when they open your app is probably a
login screen. We can create one very easily using Onsen UI's form components.
These form components work mostly the same way as regular HTML form elements
such as `input`, but the Onsen UI ones will be automatically styled to match the
device your app is running on.

Within the `<body>` tag of `index.html`, remove the `<ons-page></ons-page>` and
replace it with:

```html
<ons-page>
  <div style="text-align: center; margin-top: 200px">
  <p>
    <ons-input id="username" placeholder="Username" modifier="underbar"></ons-input>
  </p>

  <p>
    <ons-input
      id="password"
      placeholder="Password"
      type="password"
      modifier="underbar"
    >
    </ons-input>
  </p>

  <p>
    <ons-button>Sign in</ons-button>
  </p>
  </div>

</ons-page>
```

Most of this should look familiar to you as regular HTML with some styling, but
notice the two new Onsen UI components: `ons-input` and `ons-button`.

`ons-input` is an input box that can be used the same way as an HTML `input`.
For example, we have set `type` and `placeholder` attributes just like you would
with an HTML `input`. The same goes for `ons-button` which is the Onsen UI
equivalent of `button`.

#### Modifiers

Notice that we have set the `modifier` attribute of the two input boxes.
`modifier` allows you to easily change the appearance of an Onsen UI component.
In this case we are using the `underbar` modifier, which puts a horizontal line
at the bottom of the input box.

##### Next steps

Try changing the appearance of `ons-button` by setting its modifier attribute.
Available values include `quiet` and `cta` (call to action).

To see the full list of available modifiers for a component, look at the [API
pages](/v2/api/js/).

> Some modifiers are available for iOS but not Android, and vice-versa. Make
> sure to check how your app looks on multiple devices.

#### Adding JavaScript

We have a pretty login form now, but when we click the button, nothing happens.
To fix that let's add a bit of JavaScript.

Replace the contents of the `<script>` tag in `index.html` with this:

```javascript
const login = () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'user' && password === 'pass') {
    ons.notification.alert('Correct!');
  } else {
    ons.notification.alert('Wrong username/password combination');
  }
}
```

> This tutorial uses arrow functions instead of the `function` keyword.

Then set the button to run the `login` function when it is clicked by adding the
`onclick` attribute to the `ons-button` we already defined:

```html
<ons-button onclick="login()">Sign in</ons-button>
```

Run the app again. Enter a username and password and click 'Submit'. An alert
will pop up telling you whether your login was successful. (From the code, you
can see the only username and password combination that will be accepted is
'user' and 'pass'.)

> In real life, don't actually put your username and password in HTML because
> anyone can see what they are by looking at the page source. For the purposes
> of this tutorial though, it's fine.

#### Notifications

In plain JavaScript we would use `alert` to show an alert, but Onsen UI has its
own notifications. There are several different notifications available, but the
one used here is `ons.notification.alert`.

Try switching `ons.notification.alert` for something different. You could try
`ons.notification.toast` or `ons.notification.confirm`, for example.

See more about the available notifications in the API pages.


#### Templates

All well and good. But we'd like to move to a new page once the user
successfully logs in, so let's create a new page.

Add the following to `index.html`, _outside_ the `ons-page` tag but still
_inside_ the body:

```html
<template id="home.html">
  <ons-page id="home">
    Hello!
  </ons-page>
</template>
```

This is a template for a new page. Templates aren't loaded automatically when
the app starts and will only be created when the page is shown.

#### Navigating pages

To move between pages, use the `ons-navigator` component. `ons-navigator`
provides methods for pushing and popping pages to and from the **page stack**.

The page stack is a stack of screens that represents the order of pages in the
app. For example, when the first page is shown, that page is the only page in
the page stack. If you navigate to a new page, the new page is pushed on top of
the page stack, leaving two pages total on the stack. If you go back, the second
page is popped from the page stack and the first page is shown again.

`ons-navigator` wraps an initial page. This lets it know which page it should
show at startup. Put the `ons-navigator` around the login page. The body of
`index.html` should now be:

```html
<ons-navigator id="navigator">
  <ons-page>
    <div style="text-align: center; margin-top: 200px">
    <p>
      <ons-input id="username" placeholder="Username" modifier="underbar"></ons-input>
    </p>

    <p>
      <ons-input
        id="password"
        placeholder="Password"
        type="password"
        modifier="underbar"
      >
      </ons-input>
    </p>

    <p>
      <ons-button onclick="login()">Sign in</ons-button>
    </p>
    </div>

  </ons-page>
</ons-navigator>

<template id="home.html">
  <ons-page id="home">
    Hello!
  </ons-page>
</template>
```

Run the app. It looks the same as before, but now we can get the navigator to
show the second page (the one in the template) once the user has logged in.
Change the definition of the `login` function:

```javascript
const login = () => {
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');

  if (username === 'user' && password === 'pass') {
    // call the navigator to move to the new page
    const navigator = document.querySelector('#navigator');
    navigator.resetToPage('home.html');
  } else {
    ons.notification.alert('Wrong username/password combination');
  }
}
```

Run the app, enter the correct username and password, and tap the login button.
The home page will be shown.

> It's quickly going to get annoying if we have to keep typing in the username
> and password every time we want to run the app. While you're developing, set
> the correct username and password to empty strings to save time.

##### resetToPage

Let's examine the code we just added. We get a reference to the navigator and
then call its `resetToPage` method with the argument `'home.html'`.
`resetToPage` removes all pages from the page stack and then adds the home page
to the stack. We want to remove the login page from the stack so that the user
can't accidentally go back to the login page when she is already logged in.

The argument `home.html` refers to the page to reset to. The page name is the
`id` of the `template`. By convention, templates that define pages should have
an ID with the suffix `.html`. We'll see why later.

`resetToPage` is just one of the handy methods `ons-navigator` provides. To see
the others, look at the [API page](/v2/api/js/ons-navigator.html).

#### Multiple files

`index.html` is starting to get a little big now and will soon become hard to
maintain. To that end, we can move the home page template to its own file.

Create a new file called `home.html` in the `www` directory, the copy and paste
the __body__ of the home page template from `index.html` (_not including the
`template` tags themselves_).

```html
<ons-page id="home">
  Hello!
</ons-page>
```

Delete the `<template>` tag and its contents from `index.html` and the run app.
Everything should still work as before.

This brings up an important point: Onsen UI pages can be defined either as
templates using the `template` element, _or_ in their own file. When we call
`ons-navigator.resetToPage` with `home.html` as the argument, the navigator
looks in the current file for templates with `id="home.html"`, and then looks
for files called `home.html`. This is why nothing broke when we moved the home
page out of a template and into its own file.

#### Toolbars

The home page could use a little more styling. Let's add a toolbar to make it
look better. For this we need the `ons-toolbar` component. Add it to
`home.html`, so that `home.html` becomes:

```html
<ons-page id="home">
  <ons-toolbar id="home-toolbar">
    <div class="center">Home</div>
  </ons-toolbar>

  Hello!
</ons-page>
```

Here we have used `ons-toolbar` to define a toolbar. Inside it we have a `div`
with class `center`. `div.center` describes what should go in the middle of the
toolbar. You can also use `div.left` and `div.right` to position elements to the
left and right of the toolbar.

Run the app, log in to move to the Home page, and you should now see a toolbar
with the text "Home" in the center.

##### Next steps

Try adding `div.left` and `div.right` to the toolbar (in the same way as
`div.center` has already been added). Notice how using the `left` and `right`
classes automatically positions each `div` in the correct place.

#### Side menus

Now we'll see how to add a collapsible side menu. We're going to add links to
other pages in the side menu, so let's create a new page. Create a new file
`about.html` and paste this:

```html
<ons-page id="about">
  <ons-toolbar>
    <div class="center">About</div>
  </ons-toolbar>

  This is the about page.
</ons-page>
```

We'll also need a button to open the side menu, so let's add one to the left of
the home page toolbar, complete with a function `openMenu` that we'll define in
a minute. Paste the following inside the `ons-toolbar` in `home.html` (so now
there should be `div.center` and `div.left`):

```html
<div class="left">
  <ons-toolbar-button onclick="openMenu()">
    <ons-icon icon="md-menu"></ons-icon>
  </ons-toolbar-button>
</div>
```

Two new components worth mentioning here:

Firstly, `ons-toolbar-button`: This component is basically the same as
`ons-button` except that it is specifically for buttons inside a toolbar. It
adds some extra styling to make the button fit the look of the toolbar.

#### Icons

Secondly, `ons-icon`: Whenever you want to display an icon, use this component.
The specific icon is defined in the `icon` attribute.

There are Ionicons for iOS, Material Design icons for Android, and Font Awesome
icons. Each type of icon has its own prefix: `ion-`, `md-`, and `fa-`,
respectively.

The simplest usage of the `icon` attribute is to define one icon for all
platforms, such as `icon="md-menu"`. However, you probably want to display
Ionicons on iOS devices, and Material Icons on Android devices. This is easily
achieved with the following special syntax:

```html
<ons-icon
  icon="ion-navicon, material:md-menu">
</ons-icon>
```

This tells Onsen UI to show the icon with the `material:` prefix on Android
devices (in this case, `md-menu`), and the other icon for iOS devices (here
`ion-navicon`). This way your app's icons can look native on all devices.

##### Next steps

Try some different values for the `icon` attribute and see what the result is.
For example, you could try `icon="md-face"`.

Or how about `icon="fa-spinner"`? With this one you should also try setting the
`spin` attribute:

```html
<ons-icon icon="fa-spinner" spin></ons-icon>
```

For more examples of `ons-icon` usage and to see the full list of available
icons, see the [API page](/v2/api/js/ons-icon.html).

##### Splitter

Side menus are created in Onsen UI by using the `ons-splitter-` components.
There is a parent component `ons-splitter`. It has two children:
`ons-splitter-side`, which contains everything that should appear in the side
menu; and `ons-splitter-content`, which defines everything _outside_ the side
menu. This means that `ons-splitter` effectively wraps the whole app.

We're about to rewrite the body of `index.html`, so first let's move the login
page to a new file `login.html`. Create `login.html` and paste the following in
it:

```html
<ons-page id="login">
  <script>
    const login = () => {
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;

      if (username === '' && password === '') {
        // call the navigator to move to the new page
        const navigator = document.querySelector('#navigator');
        navigator.resetToPage('home.html');
      } else {
        ons.notification.alert('Wrong username/password combination');
      }
    };
  </script>

  <div style="text-align: center; margin-top: 200px">
  <p>
    <ons-input id="username" placeholder="Username" modifier="underbar"></ons-input>
  </p>

  <p>
    <ons-input
      id="password"
      placeholder="Password"
      type="password"
      modifier="underbar"
    >
    </ons-input>
  </p>

  <p>
    <ons-button onclick="login()">Sign in</ons-button>
  </p>
  </div>

</ons-page>
```

Notice that we also copied the `login` function and put it in a `<script>` tag.
Strictly speaking we could leave it in `index.html`, but it's good practice to
keep helper functions with the HTML they are called from. Delete the `login`
function from `index.html`.

Now delete the contents of `index.html`'s `<body>` tag and replace it with:

```html
<ons-splitter>
  <!-- The side menu -->
  <ons-splitter-side id="menu" collapse width="220px">
    <ons-page></ons-page>
  </ons-splitter-side>

  <!-- Everything not in the side menu -->
  <ons-splitter-content>
    <ons-navigator id="navigator" page="login.html"></ons-navigator>
  </ons-splitter-content>
</ons-splitter>
```

We've now defined the side menu, but if you open the app , you won't see it. We
need to add a way to open it. We don't want to be able to open the side menu
from the login page, but we do want to be able to open it from the home page.
Now it's time to define the `openMenu` function we called from the the toolbar
button.

Add this in `home.html`:

```html
<script>
  const openMenu = () => {
    document.querySelector('#menu').open();
  };
</script>
```

> Note that the `<script>` tag must go _inside_ `ons-page` for files that define
> a standalone page. The navigator expects each standalone page file to contain
> only one root element, so it will break if both `<script>` and `ons-page` are
> defined at the top level of a file.

Run the app, hit the login button, add the tap the menu icon at the top left of
the home page. The side menu appears!

#### Lists

But there's nothing in it, so let's remedy that now. We are going to put a list
of links in the side menu, and for that we need `ons-list` and `ons-list-item`.

`ons-list` represents a list - it's the Onsen UI equivalent of `ul`.

`ons-list-item` is a single item in a list. It is only ever used inside an
`ons-list`. It's the Onsen UI version of `li`. Like the toolbar, elements can be
position to the left, right and center of `ons-list-item` with `div.left`,
`div.right` and `div.center`. If you don't define one of these, the list item's
contents are positioned in the center by default.

Change the `ons-splitter-side` definition in `index.html` to:

```html
<ons-splitter-side id="menu" collapse>
  <ons-page>
    <ons-list>
      <ons-list-item onclick="loadPage('about.html')">
        About
      </ons-list-item>
    </ons-list>
  </ons-page>
</ons-splitter-side>
```

In the `onclick` attribute of the list item we just defined, we've called a
function `loadPage`. We need to define it in the `<script>` tag of `index.html`:

```javascript
const loadPage = (page) => {
  document.querySelector('#menu').close();
  document.querySelector('#navigator').bringPageTop(page, { animation: 'fade' });
};
```

Now when the side menu is opened, it will contain a link to the About page. Tap
the link and the About page will be loaded, then the side menu will close.

> The `loadPage` function uses `ons-navigator.bringPageTop`. This function
> pushes a page to the top of the page stack. If the page was already in the
> page stack, `bringPageTop` takes it from wherever it was and places it at the
> top. Otherwise, it creates a new instance of the page. `ons-navigator` has
> another method, `pushPage`, which creates a new instance of a page regardless
> of whether it already exists in the stack. We recommend using `bringPageTop`
> over `pushPage` to avoid the error of accidentally loading the same page
> twice, which can cause conflicts and tricky bugs.

#### Back buttons

Let's stop and see how far we've got:

  1. We can log in to the app.
  2. Once successfully logged in, the home page is shown.
  3. From the home page, we can open the side menu and navigate to the About
     page.

Very nice, but once the user is on the About page, there's no way to get back
to the home page. We could add a button and hard-wire it to go to the Home page,
but a better solution is to add a __back button__.

The back button component is `ons-back-button`. When `ons-back-button` is
tapped, it looks for a parent `ons-navigator`. Then it pops the top page off
the navigator's page stack, taking the user back to the previous page.

Add this to the `ons-toolbar` in `about.html`:

```html
<div class="left">
  <ons-back-button></ons-back-button>
</div>
```

No further work is needed; `ons-back-button` works straight out the box.

##### Next steps

Try extending the app to display different text on the home page before and
after the About page back button has been tapped. Hint: you should set
`ons-back-button`'s `options.callback` function. See the [API
page](/v2/api/js/ons-back-button.html) for more details.

#### Tabs

Along with `ons-navigator`, Onsen UI provides another component for handling
screen navigation. This is the `ons-tabbar` component. The tabbar keeps track of
one or more tabs. It looks just like the tabbar in a web browser.

Most apps will make use of both `ons-navigator` and `ons-tabbar`. As a rule of
thumb, the most commonly used pages should be tabs, and the less frequently
visited pages (such as the About page) should not be.

We're next going to create a page that displays a list of Pokémon. Create a new
file `pokemon.html` and paste the following:

```html
<ons-page id="pokemon">

  <script>
  </script>

  <ons-list id="pokemon-list">
    <ons-list-item>bulbasaur</ons-list-item>
    <ons-list-item>charmander</ons-list-item>
    <ons-list-item>squirtle</ons-list-item>
    <ons-list-item>pikachu</ons-list-item>
    <ons-list-item>trubbish</ons-list-item>
  </ons-list>

</ons-page>
```

Later we'll also add functionality to save Pokémon, so create a file
`saved.html` for that now too:

```html
<ons-page id="saved">

  <script>
  </script>

  <p>Saved Pokémon go here.</p>

</ons-page>
```

OK, now back to `home.html` for the tabbar. Remove the `"Hello!"` message and
replace it with `ons-tabbar`. (Don't miss the toolbar title changing from "Home"
to "Pokémon"). `home.html` should now be:

```html
<ons-page id="home">
  <script>
    const openMenu = () => {
      document.querySelector('#menu').open();
    };
  </script>

  <ons-toolbar id="home-toolbar">
    <div class="center">Pokémon</div>

    <div class="left">
      <ons-toolbar-button onclick="openMenu()">
        <ons-icon icon="md-menu"></ons-icon>
      </ons-toolbar-button>
    </div>
  </ons-toolbar>

  <ons-tabbar id="tabbar">
    <ons-tab page="pokemon.html" label="Pokémon"></ons-tab>
    <ons-tab page="saved.html" label="Saved"></ons-tab>
  </ons-tabbar>
</ons-page>
```

Run the app. On the home page, there is a tabbar with two tabs labelled
"Pokémon" and "Saved". Tap the tabs to switch the page content (i.e. the middle
of the screen between the toolbar and the tabbar) between the two pages
`pokemon.html` and `saved.html`.

Let's examine the tabbar markup in more detail. We defined an `ons-tabbar`
element with two `ons-tab` child elements. The only children of an `ons-tabbar`
should be `ons-tab` elements.

Then each `ons-tab` has a `page` attribute and a `label` attribute. The `page`
attribute specifies which page should be loaded when the tab is tapped (this is
the same as the `page` attribute of `ons-navigator`). The `label` attribute
specifies what text is on the tab itself. There are more `ons-tab` attributes in
the [documentation](/v2/api/js/ons-tab.html).

##### Next steps

The tabs we just made are labelled with text, but they can also be icons.

Try setting the `icon` attribute of `ons-tab` and see the effect. The usage is
the same as `ons-icon`'s `icon` attribute.


#### App structure

We have now built an app with a fairly complicated structure. Time for a quick
review:

```
At the top level, there is `ons-splitter`.
 |
 |-- The first child of `ons-splitter` is `ons-splitter-side`. Everything
 |   defined in here specifies what should be in the side menu.
 |
 |-- The second child of `ons-splitter` is `ons-splitter-content`. Everything
     apart from the side menu is defined in here.
      |
      |-- Within `ons-splitter-side` is `ons-navigator`. The navigator is used to
      |   move between any pages that aren't tabs.
      |
      |-- Within `ons-navigator` are multiple `ons-page` components. Each
          defines a page. `home.html` is the most interesting though, because it
          contains a _tabbar_. Each child of the tabbar is a _tab_.
```

One common source of confusion is mixing up pages controlled by `ons-navigator`
and tabs controlled by `ons-tabbar`. Carefully plan the structure of your app so
you are sure what should be a tab and what should be a regular page.

> If you're brave, it is possible to have a navigator and tabbar both handle the
> same page. However, you are likely to be thanked for your efforts by bugs that
> are tricky to fix, such as when you accidentally load a page in the DOM twice,
> giving you two elements with the same ID. In general, there are better ways
> to handle a page that is sometimes a normal page and sometimes a tab.


#### Events

You may have noticed something isn't quite right when you go to the "Saved" tab:
The toolbar title still says "Pokémon" when it should say "Saved". To fix this,
we need a bit of JavaScript to dynamically change the toolbar title when the tab
changes.

When the state of an Onsen UI component changes, such as when the tabbar's
focused tab is change, or when the navigator loads a page, an event is fired.
All we need to do to make use of these events is to add an event listener for
the event we're interested in.

In this instance, we want to listen for `ons-tabbar`'s `prechange` event. The
`prechange` event is fired just before the tabbar moves to a tab. We add an
event listener the same way as we would for any other JavaScript event. Append
this inside the `<script>` tag of `home.html`:

```javascript
document.addEventListener('prechange', ({ target, tabItem }) => {
  if (target.matches('#tabbar')) {
    document.querySelector('#home-toolbar .center').innerHTML = tabItem.getAttribute('label');
  }
});
```

Run the app and witness the dynamically-changing toolbar title.

Now to the code:

  1. `document.addEventListener` is called to add a listener.
  2. The first argument states we want to listen for `prechange`.
  3. The callback function receives an event object as an argument. We need the
     `target` and `tabItem` properties only.
  4. We check if the target - the element that fired the event - is the tabbar.
     This is an important step because more than one Onsen UI component can fire
     an event with the same name. You have to make sure you don't accidentally
     handle the wrong component's events.
  5. If it was actually the tabbar that fired `prechange`, we get the label of the
     new tab from `tabItem`'s `label` attribute, and set that as the center text
     of the toolbar.

In general, the pattern to add an event listener is to use
`document.addEventListener` to listen for the event, and then use
`document.querySelector` in the callback function to make sure the component
that fired the event is the one you expected.

##### Next steps

Try adding event listeners to some of the other events that are fired by Onsen
UI components.

You could try: `ons-tabbar`'s `postchange`, which is fired _after_ the tab is
changed; or `ons-tabbar`'s `reactive`, which is fired when the currently open
tab is tapped again; or maybe `ons-navigator`'s `prepop` which is fired just
before a page is popped from the page stack.

For more information on Onsen UI events and what you can do with them, check the
[API documentation](/v2/api/js).

#### Expandable list items

We breezed over the Pokémon list page earlier so we could get on to the tabbar,
but let's go back to it now.

So far there's a list of Pokémon, created using `ons-list` and `ons-list-item`.
We would like to be able to select a Pokémon from this list and save it. This is
a job for __expandable list items__.

An expandable list item is one that increases in size when it is tapped,
displaying content that was initially hidden. An `ons-list-item` is turned into
an expandable list item by adding the `expandable` attribute and adding a child
`div.expandable-content` containing the hidden content.

Make each of the existing list items expandable by replacing the existing
`ons-list` in `pokemon.html` with:

```html
<ons-list id="pokemon-list">
  <ons-list-item expandable>
    bulbasaur
    <div class="expandable-content">
      <ons-button onclick="savePokemon(1, this)">Save</ons-button>
    </div>
  </ons-list-item>

  <ons-list-item expandable>
    charmander
    <div class="expandable-content">
      <ons-button onclick="savePokemon(4, this)">Save</ons-button>
    </div>
  </ons-list-item>

  <ons-list-item expandable>
    squirtle
    <div class="expandable-content">
      <ons-button onclick="savePokemon(7, this)">Save</ons-button>
    </div>
  </ons-list-item>

  <ons-list-item expandable>
    pikachu
    <div class="expandable-content">
      <ons-button onclick="savePokemon(25, this)">Save</ons-button>
    </div>
  </ons-list-item>

  <ons-list-item expandable>
    trubbish
    <div class="expandable-content">
      <ons-button onclick="savePokemon(568, this)">Save</ons-button>
    </div>
  </ons-list-item>
</ons-list>
```

> If it's upsetting to see the same markup repeated five times, don't worry
> because later on we'll be generating all of this with JavaScript.

Tap a list item now and you'll see it expand to reveal the Save button. Tap it
again to close.

#### Compilation process

Take a look at one of the expandable list items in your browser's developer
tools.

> If you're using Monaca CLI, run `monaca preview` to see the app in browser.

Notice the list item contains two children, `div.top` and
`div.expandable-content`. We know about `div.expandable-content` but where did
`div.top` come from? The answer is that when Onsen UI compiled the list item, it
put everything that wasn't inside `div.expandable-content` into `div.top`.
`div.top` represents the part of the list item that is always shown - the _top_
of the list item.

`div.top` itself can have three children: `div.left`, `div.right` and
`div.center`. Like the toolbar, these position elements to the left, right and
center of the top part.

Almost all Onsen UI components have their structured altered in some way during
compilation. This means you can't assume that whatever is in your HTML file is
what will actually be rendered in the app. However, you can "preempt" the
compiler by writing the compiler output in your HTML file to begin with. This is
helpful whenever you want to access things that the compiler does automatically,
such as adding a top part to an expandable list item.


##### Saving Pokémon

What should happen when a user presses the Save button? Well, that's where the
Saved page we created earlier comes in.

When a Pokémon is saved, it should be added to the Saved page. The Saved page
will show the pictures of the saved Pokémon in a grid layout. When one of the
pictures is tapped, the picture will fill the whole screen in a "gallery" style.
The user can then swipe left or right to go to the previous or next saved
Pokémon.

Let's define the `savePokemon` function in the `<script>` tag of `pokemon.html`:

```javascript
const savePokemon = (pokenumber, button) => {
  addPokemonToGrid(pokenumber);
  button.parentNode.parentNode.hideExpansion();
};
```

`savePokemon` is called when a save button is pressed. It receives the number of
the Pokémon we want to save (if you're not familiar with Pokémon, each Pokémon
has a unique number), and a reference to the particular save button that was
pressed. `savePokemon` simply calls `addPokemonToGrid` (not yet defined) then
closes the expandable list item.

Now we need to define `addPokemonToGrid` in `saved.html`. For now let's just
store the Pokémon number in an array. Put this in the `<script>` tag of
`saved.html`:

```javascript
let savedPokemon = [];

const addPokemonToGrid = pokenumber => {
  // we save a list so we can pass it to the gallery
  savedPokemon.push(pokenumber);
};
```

Run the app again, tap on a Pokémon in the list, and tap the Save button that
appears. The list item will contract, and the Pokémon will be saved, although
we can't see that reflected in the app just yet.

##### Saving the Pokémon images locally

We need some images of Pokémon for the app, so we'll get some of the sprites
from an online repository.  Getting all the sprites over the internet every time
we want to see them is a bad idea. Some people will be using the app over a
mobile connection and we don't want to suck up all their data. So we download
all the sprites once and save them as static assets in our project.

Download and unzip the
[images](https://github.com/PokeAPI/sprites/archive/master.zip). Then move the
contents of `sprites/pokemon` into a new directory in the project `./www/img`.

##### Making the grid

Now to create a grid. Actually, there is no need for special Onsen UI components
here, so we'll just use some regular HTML and CSS. Replace the contents of
`saved.html` with:

```html
<ons-page id="saved">
  <style>
    #grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: 33vw;
    }

    #grid img {
      width: 100%;
      height: 100%;
    }
  </style>

  <script>
    let savedPokemon = [];

    const addPokemonToGrid = pokenumber => {
      // we save a list so we can pass it to the gallery
      savedPokemon.push(pokenumber);

      // now add the new pokemon to the grid
      const grid = document.querySelector('#grid');
      const cell = document.createElement('div');
      cell.onclick = () => document.querySelector('#navigator')
        .bringPageTop('gallery.html', { data: { pokenumber, savedPokemon } });

      const image = document.createElement('img');
      image.setAttribute('src', `img/${pokenumber}.png`);

      cell.appendChild(image);
      grid.appendChild(cell);
    };
  </script>

  <div id="content">
    <div id="grid"></div>
  </div>
</ons-page>
```

You can now save a Pokémon from the list and have its picture show up in the
grid. Tapping the image takes you to the gallery view.


#### Carousels

Onsen UI provides a component used for creating galleries and other swipeable
structures: the carousel component, `ons-carousel`. A carousel displays an item
on the screen, and then can be made to move to show the next or previous item in
the carousel.

The two components we are going to need are `ons-carousel` and
`ons-carousel-item`. In the same vein as `ons-list` and `ons-list-item`,
`ons-carousel` defines the carousel and all its children are defined by
`ons-carousel-item`.

Create `gallery.html` and add:

```html
<ons-page id="gallery">
  <style>
    .gallery-image {
      width: 100%;
    }
  </style>

  <script>
  </script>

  <ons-toolbar id="picture-toolbar">
    <div class="left">
      <ons-back-button></ons-back-button>
    </div>
  </ons-toolbar>

  <ons-carousel id="carousel" fullscreen swipeable auto-scroll auto-scroll-ratio="0.1">
  </ons-carousel>
</ons-page>
```

The only new thing here is the carousel. It has quite a few attributes set to
tweak the behaviour. Let's go over the meaning of each of these briefly:

  - `fullscreen`: The carousel should take up all of the available content
    space.
  - `swipeable`: The user can swipe left and right (or up and down for a
    vertical carousel). This moves to the next or previous item. The other way
    to move the carousel is by calling one of the methods that moves it.
  - `auto-scroll`: Snap to items. In other words, the carousel can't ever stop
    moving in between items.
  - `auto-scroll-ratio`: How much the carousel needs to be moved before it will
    snap to the next item. The value can range between 0 and 1. We have it set
    pretty low here so it doesn't take much swiping to automatically scroll.

There are plenty more carousel attributes and methods. Take a look at its [API
page](/v2/api/js/ons-carousel.html) for the full list.

##### Updating and moving the gallery

Now for the JavaScript to make this work. Two things need to happen when the
carousel is shown:

  1. The carousel needs to update its items with whatever new Pokémon have been
     saved to the grid since the last time the carousel was shown.
  2. The carousel needs to move to the correct item for the grid item that was
     tapped to show the carousel. For example, if the user taps Charizard in the
     grid, the carousel should show Charizard.

Add this in the script tags of `gallery.html`:

```javascript
document.addEventListener('show', ({ target }) => {
  if (target.matches('#gallery')) {
    const { pokenumber, savedPokemon } = document.querySelector('#navigator').topPage.data;

    const carousel = document.querySelector('#carousel');

    // figure out what new pokemon have been saved since we last showed the gallery
    // this way we don't accidentally add the same pokemon twice
    const sliceIndex = carousel.itemCount - savedPokemon.length;

    if (sliceIndex !== 0) { // if there are unadded pokemon
      const unaddedPokemon = savedPokemon.slice(sliceIndex);

      unaddedPokemon.map(number => {
        const carouselItem = ons.createElement(`
          <ons-carousel-item>
            <ons-card>
              <img class="gallery-image" src="img/${number}.png" />
            </ons-card>
          </ons-carousel-item>
        `);

        carousel.appendChild(carouselItem);
      });
    }

    // go to the selected pokemon
    carousel.setActiveIndex(savedPokemon.indexOf(pokenumber));
  }
});
```

Again we have an event listener on the page's `show` event, so the callback
function will be run every time the gallery page is shown.

The grid page will pass in some data that we need to the navigator when the
gallery page is pushed. This is accessed from `ons-navigator.topPage.data`.
`data` is an object containing whatever was passed in from the previous page. In
this case, the pushed data consists of the number of the Pokémon that was tapped
in the grid, and the list of Pokémon that have been saved.

The slice code figures out the difference between the Pokémon already in the
carousel and the list of saved Pokémon we received from the grid page, and from
that we know what Pokémon are not yet in the carousel. We add them.

Then all that remains is to move the carousel to the image of the tapped
Pokémon. `ons-carousel`'s `setActiveIndex` function is what we need here.

Run the app again and you can now swipe the gallery left and right.

#### Remote API calls

Let's go back to the list of Pokémon at `pokemon.html`. At the moment, there are
a few Pokémon hardcoded into the list, but it would be better if our list had
_all_ Pokémon in it. All 800 or so.

Luckily, there's PokeAPI to help us out. PokeAPI is a REST API that provides
information about everything to do with Pokémon. We're going to call one of its
methods to get the full list of Pokémon.

The results returned from PokeAPI are paged. This means we get the first few
results (the first 20 in this case) and URL to request the next page of results
if we want them. That way we only get the results we need as we need them, and
also don't overload the PokeAPI servers.

Since we're getting the Pokémon from the server, we don't need the hardcoded
Pokémon currently in the list. Remove the child elements of the `ons-list` in
`pokemon.html` so that the list looks like:

```html
<ons-list id="pokemon-list">
</ons-list>
```

Making the request to the API doesn't involve anything special or specific to
Onsen UI, so there won't be much in the way of explanation. Add this to
`pokemon.html` in the `<script>` tag, appending to what's already there:

```javascript
let url = 'https://pokeapi.co/api/v2/pokemon';
let nextPokenumber = 1; // use to keep track of the Pokémon numbers

const get = async () => {
  // do the API call and get JSON response
  const response = await fetch(url);
  const json = await response.json();

  const newPokemon = json.results.map(e => e.name);

  const list = document.querySelector('#pokemon-list');
  newPokemon.forEach(name => {
    list.appendChild(ons.createElement(`
      <ons-list-item expandable>
        ${nextPokenumber} ${name}
        <div class="expandable-content">
          <ons-button onclick="savePokemon(${nextPokenumber}, this)">Save</ons-button>
        </div>
      </ons-list-item>
    `));
    nextPokenumber++;
  });

  url = json.next;
};
```

Briefly, the `get` function calls the PokeAPI to get a page of results. The
response contains the next lot of Pokémon, which we append to the list. It also
contains the URL to get the next page of results, which we save to `url`. The
next time `get` is called, it will use the URL we just got.

One interesting function here is `ons.createElement`. `ons.createElement` is a
handy way to make elements dynamically if you want to add them to the DOM using
JavaScript. It takes a string representation of the element you want to create
and interprets it. See the docs for more information.

##### Loading the Pokémon as we need them

We could keep calling `get` until we have all the Pokémon and add them to the
list all at once, but that is wasteful because the user may never scroll all the
way through the list. Instead we should only call `get` when the user has seen
as much of the list as is currently loaded. Let's wrap some of the code in an
`init` event listener callback, and add some code to call the API as we need it.
The `<script>` tag of `pokemon.html` should now contain exactly:

```javascript
const savePokemon = (pokenumber, button) => {
  addPokemonToGrid(pokenumber);
  button.parentNode.parentNode.hideExpansion();
};

document.addEventListener('init', ({ target }) => {
  if (target.matches('#pokemon')) {

    let url = 'https://pokeapi.co/api/v2/pokemon';
    let nextPokenumber = 1; // use to keep track of the Pokémon numbers

    const get = async () => {
      // do the API call and get JSON response
      const response = await fetch(url);
      const json = await response.json();

      const newPokemon = json.results.map(e => e.name);

      const list = document.querySelector('#pokemon-list');
      newPokemon.forEach(name => {
        list.appendChild(ons.createElement(`
          <ons-list-item expandable>
            ${nextPokenumber} ${name}
            <div class="expandable-content">
              <ons-button onclick="savePokemon(${nextPokenumber}, this)">Save</ons-button>
            </div>
          </ons-list-item>
        `));
        nextPokenumber++;
      });

      url = json.next;

      // hide the spinner when all the pages have been loaded
      if (!url) {
        document.querySelector('#after-list').style.display = 'none';
      }
    };

    // get the first set of results as soon as the page is initialised
    get();

    // at the bottom of the list get the next set of results and append them
    target.onInfiniteScroll = (done) => {
      if (url) {
        setTimeout(() => {
          get();
          done();
        }, 200);
      }
    };
  }
});
```

Here we add a listener for the `init` event that is fired when a page is
initialised. If the page initialised was the Pokémon list page, we call `get` to
get the first 20 Pokémon and add them to the list. Then we set the page's
`infiniteScroll` property. The callback function of `infiniteScroll` is called
when we reach the end of the page's content (defined by `div.content` which
we'll add in a minute). We need to use `setTimeout` because otherwise the
results could get spliced, I think.

> `setTimeout` waits for 200ms here just so you can see the spinner in action.
> This is just an arbitrary wait, so feel free to set it to `0` to speed things
> up. However, what you _can't_ do is remove `setTimeout` altogether and just
> call `get`. This will splice the results as mentioned already.

We'll also add a spinner so that when the user reaches the end of the page, a
spinner is shown while the next results are being loaded. Add this to the body
of `pokemon.html` after the `ons-list` definition:

```html
<div id="after-list" style="margin: 20px; text-align: center;">
  <ons-icon icon="fa-spinner" size="26px" spin></ons-icon>
</div>
```

Run the app and have a look at the list again. First we see that some Pokémon
have been loaded in the list from the start. Scroll to the bottom of the list
and you should briefly see the spinner to indicate that the next results are
loading. Then the API call will finish and the next results will be added to the
list. Scroll to the bottom and repeat until we run out of results.

#### Caching data

> The code in this section will be explained piece by piece, without showing you
> where to add it in the existing code. However, the full code is shown at the
> end of the section so you can easily copy it into your `pokemon.html` file. If
> you just want to speed through this section, skip to end for the full code
> listing.

As the outstandingly moral people that we are, we should really cache the
results of the API calls so we don't put unnecessary strain on PokeAPI.
Currently when the app is closed, the whole Pokémon list is lost and we have to
get all the data all over again next time we open the app.

We can use local storage to store the Pokémon.

> Local storage is good for storing a few strings here and there. It will work
> for our purposes but for anything serious, you should look into a proper
> caching solution.

First off we'll define a couple of constants that will help us store the Pokémon
in the right place. These will be used to create the keys in local storage:

```javascript
// local storage keys
const URL = 'pokemon__url';
const PREFIX = 'pokemon__';
```

Instead of saving the next URL in the `url` variable, we'll now store it in
local storage with the key `pokemon__url`. The name of each Pokémon will also be
stored in local storage, with its key being `pokemon__` and then its number. For
example, Bulbasaur is number 1, so will be saved as `pokemon__1` in local
storage.

When the Pokémon list page is initialised, we should load all the Pokémon we
already have cached. We can do this by looping through all the Pokémon numbers
starting from 1, until we don't get a result from the cache:

```javascript
let nextPokenumber = 1;
let storedPokemon;

while ((storedPokemon = localStorage.getItem(PREFIX + nextPokenumber)) !== null) {
  console.log(`got ${storedPokemon} from local with key ${PREFIX + nextPokenumber}`);
  appendPokemon(nextPokenumber, storedPokemon);
  nextPokenumber++;
}
```

If we don't already have a URL cached at initialization, we ought to set it to
the URL for the first page of results:

```javascript
if (!localStorage.getItem(URL)) {
  localStorage.setItem(URL, 'https://pokeapi.co/api/v2/pokemon');
}
```

Right, that's it for getting the cached stuff when we initialise the app. Now to
store it in the first place. `get` has to be modified to use local storage
instead of the local _variables_ we were using before:

```javascript
const get = async () => {
  // do the API call and get JSON response
  const response = await fetch(localStorage.getItem(URL));
  const json = await response.json();

  const newPokemon = json.results.map(e => e.name);

  const list = document.querySelector('#pokemon-list');
  newPokemon.forEach((name, i) => {
    appendPokemon(nextPokenumber, name);

    const key = PREFIX + nextPokenumber;
    console.log(`Storing ${name} as ${key}`);
    localStorage.setItem(key, name)
    nextPokenumber++;
  });

  localStorage.setItem(URL, json.next);

  // hide the spinner when all the pages have been loaded
  if (!localStorage.getItem(URL)) {
    document.querySelector('#after-list').style.display = 'none';
  }
};
```

##### Adding a button to clear local storage

While we're testing the local storage functionality, it's going to be useful to
be able to clear local storage manually. This is because the app will assume
that all the data we've already stored in local storage has been stored
correctly, but mere mortals are unlikely to get the code right first time. Or
even if you're just playing about with the code it will be handy. So we should
add a button to the side menu. Add this to the list in `index.html`:

```html
<ons-list-item onclick="clearLocalStorage()">
  Clear local storage
</ons-list-item>
```

And then add the associated function in the `<script>` tag of `index.html`:

```javascript
const clearLocalStorage = () => {
  localStorage.clear();
  ons.notification.alert('Cleared local storage');
};
```

##### Full `pokemon.html` JavaScript listing

As promised, here is the full JavaScript listing for `pokemon.html`. The
contents of `pokemon.html` should exactly match this, so
copy and paste it in now:

```html
<ons-page id="pokemon">

  <script>
    const savePokemon = (pokenumber, button) => {
      addPokemonToGrid(pokenumber);
      button.parentNode.parentNode.hideExpansion();
    };

    const appendPokemon = (pokenumber, name) => {
      const list = document.querySelector('#pokemon-list');
      list.appendChild(ons.createElement(`
        <ons-list-item expandable>
          ${pokenumber} ${name}
          <div class="expandable-content">
            <ons-button onclick="savePokemon(${pokenumber}, this)">Save</ons-button>
          </div>
        </ons-list-item>
      `));
    }

    document.addEventListener('init', ({ target }) => {
      if (target.matches('#pokemon')) {
        // local storage keys
        const URL = 'pokemon__url';
        const PREFIX = 'pokemon__';

        let nextPokenumber = 1;
        let storedPokemon;

        while ((storedPokemon = localStorage.getItem(PREFIX + nextPokenumber)) !== null) {
          console.log(`got ${storedPokemon} from local with key ${PREFIX + nextPokenumber}`);
          appendPokemon(nextPokenumber, storedPokemon);
          nextPokenumber++;
        }

        if (!localStorage.getItem(URL)) {
          localStorage.setItem(URL, 'https://pokeapi.co/api/v2/pokemon');
        }

        const get = async () => {
          // do the API call and get JSON response
          const response = await fetch(localStorage.getItem(URL));
          const json = await response.json();

          const newPokemon = json.results.map(e => e.name);

          const list = document.querySelector('#pokemon-list');
          newPokemon.forEach((name, i) => {
            appendPokemon(nextPokenumber, name);

            const key = PREFIX + nextPokenumber;
            console.log(`Storing ${name} as ${key}`);
            localStorage.setItem(key, name)
            nextPokenumber++;
          });

          localStorage.setItem(URL, json.next);

          // hide the spinner when all the pages have been loaded
          if (!localStorage.getItem(URL)) {
            document.querySelector('#after-list').style.display = 'none';
          }
        };

        // get the first set of results as soon as the page is initialised
        get();

        // at the bottom of the list get the next set of results and append them
        target.onInfiniteScroll = (done) => {
          if (localStorage.getItem(URL)) {
            setTimeout(() => {
              get();
              done();
            }, 200);
          }
        };
      }
    });
  </script>

  <ons-list id="pokemon-list">
  </ons-list>

  <div id="after-list" style="margin: 20px; text-align: center;">
    <ons-icon icon="fa-spinner" size="26px" spin></ons-icon>
  </div>

</ons-page>
```

Run the app now (maybe clear local storage first with the side menu button, and
also clear the app log if you're using Monaca Debugger). You'll see that there
are no results in local storage so the API will be called. You can verify this
by checking the app log or console, and seeing the messages saying that "X
Pokémon has been stored" etc. Then restart the app, and this time see from the
log (and faster loading times) that cached Pokémon are loaded from local
storage, not from PokeAPI.

<% end %>
