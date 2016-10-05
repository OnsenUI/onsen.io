### Starting Project

Note: For more details to use Onsen UI in your project, please refer to [Getting Started](/getting-started).

<% if @framework in ['angular2', 'react']: %>
To use Onsen UI in <%- @frameworkName(@framework) %> apps, Onsen UI Core and <%- @frameworkName(@framework) %> <%- if @framework is 'react' then 'Components' else 'Bindings' %> should be installed to the project. These modules can be installed via NPM package: [`onsenui`](https://www.npmjs.com/package/onsenui) and [`<%- @framework %>-onsenui`](https://www.npmjs.com/package/<%- @framework %>-onsenui).

To quickly setup the project, Monaca CLI will solve all dependencies including TypeScript, Webpack and polyfills if necessary.
<% end %>

#### Using Onsen UI toolkit - Monaca CLI

```bash
$ npm install -g monaca # Install Monaca CLI - Onsen UI toolkit
$ monaca create helloworld # Choose <%- @frameworkName(@framework) %> template
$ cd helloworld; monaca preview # Run preview, or "monaca debug" to run on your device
```
