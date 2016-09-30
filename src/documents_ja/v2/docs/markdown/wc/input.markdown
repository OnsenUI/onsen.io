---
title: Input
component: js/ons-input,angular1/ons-input
framework: js,angular1
tutorial: vanilla/Reference/input
---

## Text input (ons-input)

`<ons-input>` is an alternative to `<input>` tag, with Material Design floating label and animation effect. To enable floating label style, use `placeholder` attribute and `float` attribute together.

It also supports checkboxes and radio buttons through the `type` attribute.

The component will automatically switch its style based on the platform. On Android it will display as a Material Design text input, radio button or checkbox.

- Text input

  ```html
  <ons-input placeholder="Name" float>
  ```

- Password

  ```html
  <ons-input type="password" placeholder="Name" float>
  ```

- Number

  ```html
  <ons-input type="number" min="0" max="100" placeholder="Age" float>
  ```

- Checkbox
  ```html
  <ons-input type="checkbox" checked></ons-input>
  ```

- Radio button
  ```html
  <ons-input type="radio" name="radio"></ons-input>
  <ons-input type="radio" name="radio"></ons-input>
  ```
