---
encoding: 'utf8'
---

*index.html*

    <ns-sliding-menu behind-page="menu.html" above-page="page1.html">
    </ns-sliding-menu>


*menu.html*

    <ns-list>
        <ns-list-item 
            ng-click="ns.slidingMenu.toggleMenu(); ns.slidingMenu.setAbovePage('page1.html')">
            Page 1
        </ns-list-item>
        <ns-list-item 
            ng-click="ns.slidingMenu.toggleMenu(); ns.slidingMenu.setAbovePage('page2.html')">
            Page 2
        </ns-list-item>
    </ns-list>


*page1.html*

    <div class="page center bg-gray">
        <h1>Hello, I am Page 1</h1>
        <monaca-button ng-click="monaca.toggleMenu()">
            Toggle Menu
        </monaca-button>
    </div>


*page2.html*

    <div class="page center bg-orange">
        <h1>Hello, I am Page 2</h1>
        <monaca-button ng-click="monaca.toggleMenu()">
            Toggle Menu
        </monaca-button>    
    </div>