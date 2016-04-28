---
title: Modal
component: js/ons-modal,angular1/ons-modal
framework: js,angular1
---

## Modal (ons-modal)

[`<ons-modal>`](/v2/docs/js/ons-modal.html) is useful when showing a dialog that needs to forbid any user interaction while the modal is shown. Typically a modal is used to display progress indicators or to request a user action explicitly.

[`<ons-modal>`](/v2/docs/js/ons-modal.html) component can have any HTML content inside the tag. The content will be shown with a black mask when `toggle()` or `show()` method is called.

``` html
<ons-modal id="myModal">
Modal content
</ons-modal>
<script>
  document.querySelector("#myModal").toggle();
</script>
```
