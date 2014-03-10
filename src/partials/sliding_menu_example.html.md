---
encoding: 'utf8'
---

*index.html*

    <ons-sliding-menu 
        behind-page="menu.html" 
        above-page="page1.html">
    </ons-sliding-menu>


*menu.html*

    <ons-page style="background-color: white">

        <ul class="topcoat-list">

            <ons-list-item
                class="topcoat-list__item--tappable topcoat-list__item__line-height" 
                ng-click="ons.slidingMenu.toggleMenu(); 
                ons.slidingMenu.setAbovePage('page1.html')">
                <i class="fa fa-home fa-lg" style="color: #666"></i>
                &nbsp; Page 1
            </ons-list-item>

            <ons-list-item 
                class="topcoat-list__item--tappable topcoat-list__item__line-height"
                ng-click="ons.slidingMenu.toggleMenu(); 
                ons.slidingMenu.setAbovePage('page2.html')">
                <i class="fa fa-gear fa-lg" style="color: #666"></i>
                &nbsp; Page 2
            </ons-list-item>

        </ul>

    </ons-page>



*page1.html*

    <ons-page class="center">
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
    </ons-page>


*page2.html*

    <ons-page class="center">
        <h1>Page 2</h1>
        <ons-button ng-click="ons.slidingMenu.toggleMenu()">
            Toggle Menu
        </ons-button>   
    </ons-page>