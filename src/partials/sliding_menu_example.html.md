---
encoding: 'utf8'
---

*index.html*

    <monaca-sliding-menu behind-page="menu.html" above-page="page1.html">
    </monaca-sliding-menu>


*menu.html*

    <monaca-list>
        <monaca-list-item 
            ng-click="monaca.toggleMenu(); monaca.setAbovePage('page1.html')">
            Page 1
        </monaca-list-item>
        <monaca-list-item 
            ng-click="monaca.toggleMenu(); monaca.setAbovePage('page2.html')">
            Page 2
        </monaca-list-item>
    </monaca-list>


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