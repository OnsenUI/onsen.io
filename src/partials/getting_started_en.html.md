---
encoding: 'utf-8'
---

# Starting a new project

### 1. Go to Dashboard

Go to Dashboard and click **New Project**
![dashboard](new_project.png)


### 2. Choose one Onsen UI template that best fit your project type

![template](choose_template.png)

### 3. Where to go from here
Now you have Onsen UI installed.
See examples in the [Docs page](/docs/en) page for how to use Onsen UI components.


# Adding Onsen UI to an existing project

### 1. Add Onsen UI plugin

Go to Config -> Plugin Settings...
![plugin](config_plugin_settings.png)

Select Onsen UI
![select](check_onsen_ui.png)

### 2. Activate Onsen UI plugin

Add ng-app to html tag.

    <html ng-app="myApp">

Define your app name and tell angular to load Onsen UI directives module

    angular.module('myApp', ['onsen.directives']);

![activate](add_ng_app.png)

### 3. Where to go from here
Now you have Onsen UI installed.
See examples in the [Docs page](/docs/en) page for how to use Onsen UI components.