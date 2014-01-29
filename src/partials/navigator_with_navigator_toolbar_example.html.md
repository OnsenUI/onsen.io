---
encoding: 'utf8'
---

*index.html*

    <ons-navigator page="page1.html">
    </ons-navigator>


*page1.html*

    <ons-page class="center">
        <ons-navigator-toolbar title="Page 1">      
        </ons-navigator-toolbar>
        <h1>Page 1</h1>
        <ons-button ng-click="ons.navigator.pushPage('pages/navigator_with_navigator_toolbar/page2.html')">push Page 2</ons-button>
    </ons-page>


*page2.html*

    <ons-page>
        <ons-navigator-toolbar 
            title="Page 2" 
            right-button-icon="fa fa-lg fa-angle-right" 
            on-right-button-click="ons.navigator.pushPage('pages/navigator_with_navigator_toolbar/page3.html')">      
        </ons-navigator-toolbar>
        <h1>Page 2</h1>
        <p>
            click the top right icon to push Page 3
        </p>
    </ons-page>


*page3.html*

    <ons-page>
        <h1>Page 3</h1>
    </ons-page>