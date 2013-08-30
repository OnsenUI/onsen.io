---
encoding: 'utf8'
---

*index.html*

    <ns-screen page="page1.html"></ns-screen>


*page1.html*

    <div class="page center">
        <h1>Hello, I am Page 1</h1>
        <ns-button ng-click="ns.screen.presentPage('page2.html')">
            Present Page 2
        </ns-button>
    </div>


*page2.html*

    <div class="page center">
        <h1>Hello, I am Page 2</h1>
        <ns-button ng-click="ns.screen.dismissPage()">
            Dismiss Page
        </ns-button>
    </div>