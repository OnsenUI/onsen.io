---
encoding: 'utf8'
---

*index.html*

    <ons-navigator title="Page 1">
        <ons-page class="center">
          <h1>Page 1</h1>
          <ons-button 
            ng-click="ons.navigator.pushPage('page2.html', {title: 'Page 2'})">
            Push Page 2
          </ons-button>

          <h1>Pop</h1>
          <ons-button 
            ng-click="ons.navigator.popPage()">
            Pop Page
          </ons-button>
        </ons-page>
    </ons-navigator>  


*page2.html*

    <ons-page class="center">
        <ons-button 
            ng-click="ons.navigator.pushPage('page2.html', {title: 'Page'})">
            Push Page
        </ons-button>

        <ons-button 
            ng-click="ons.navigator.popPage()">
            Pop Page
        </ons-button>
    </ons-page>


Another example of how to use getCurrentPage()
----------------------------------------------

    // Pass parameters to another page
    ons.navigator.pushPage("path/to/page.html", {foo: "bar"})

    // Retrieve parameters from the other page
    ons.navigator.getCurrentPage().options.foo //  "bar"

    // Retrieve the current page
    ons.navigator.getCurrentPage().options.page //  "path/to/page.html"

    // Retrieve the entire stack
    ons.navigator.getPages() //  [pageObj1, pageObg2, ... , pageObj3]

    // Example of using the stack to change the behavior of the back button
     document.addEventListener("backbutton", function (e) {
                if ($rootScope.ons.navigator.getPages().length > 1) {
                    e.preventDefault();
                    $rootScope.ons.navigator.popPage();
                }
                else
                    navigator.app.exitApp();
    }, false);