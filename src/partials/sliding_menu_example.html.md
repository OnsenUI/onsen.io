---
encoding: 'utf8'
---

*index.html*

    <ons-sliding-menu 
        behind-page="menu.html" 
        above-page="page1.html">
    </ons-sliding-menu>


*menu.html*

    <ons-page>
        <ul class="fa-ul">

            <ons-list-item 
                ng-click="ons.slidingMenu.toggleMenu(); 
                ons.slidingMenu.setAbovePage('pages/sliding_menu/page1.html')">
                <i class="fa-li fa fa-home fa-lg" style="top: 25%"></i>
                Page 1
            </ons-list-item>

            <ons-list-item 
                ng-click="ons.slidingMenu.toggleMenu(); 
                ons.slidingMenu.setAbovePage('pages/sliding_menu/page2.html')">
                <i class="fa-li fa fa-gear fa-lg" style="top: 25%"></i>
                Page 2
            </ons-list-item>

        </ul>

    </ons-page>


*page1.html*

    <div class="page center">
        <h1>Page 1</h1>
        <ons-button 
            ng-click="ons.slidingMenu.toggleMenu()">
            Toggle Menu
        </ons-button>
        
        <p>
            To close and open menu,
        </p>
        <p>
            You can also swipe the page left and right.
        </p>
    </div>


*page2.html*

    <div class="page center">
        <h1>Page 2</h1>
        <ons-button ng-click="ons.slidingMenu.toggleMenu()">
            Toggle Menu
        </ons-button>   
    </div>