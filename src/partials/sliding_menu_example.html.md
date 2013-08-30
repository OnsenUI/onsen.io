---
encoding: 'utf8'
---

*index.html*

    <ons-sliding-menu behind-page="menu.html" above-page="page1.html">
    </ons-sliding-menu>


*menu.html*

    <ons-list>
        <ons-list-item 
            ng-click="ons.slidingMenu.toggleMenu(); ons.slidingMenu.setAbovePage('page1.html')">
            Page 1
        </ons-list-item>
        <ons-list-item 
            ng-click="ons.slidingMenu.toggleMenu(); ons.slidingMenu.setAbovePage('page2.html')">
            Page 2
        </ons-list-item>
    </ons-list>


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