---
encoding: 'utf8'
---

*index.html*

    <ons-screen page="page1.html"></ons-screen>


*page1.html*

    <div class="page center">
        <h1>Hello, I am Page 1</h1>
        <ons-button ng-click="ons.screen.presentPage('page2.html')">
            Present Page 2
        </ons-button>
    </div>


*page2.html*

    <div class="page center">
        <h1>Hello, I am Page 2</h1>
        <ons-button ng-click="ons.screen.dismissPage()">
            Dismiss Page
        </ons-button>
    </div>