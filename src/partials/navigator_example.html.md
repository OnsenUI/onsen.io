---
encoding: 'utf8'
---

*index.html*

    <ons-navigator page="page1.html" title="Page 1">
    </ons-navigator>


*page1.html*

    <ons-page class="center">
        <h1>Page 1</h1>
        <ons-button 
            ng-click="ons.navigator.pushPage('pages/navigator/page2.html', { title: 'Page 2' })">
            Push Page 2
        </ons-button>

        <h1>Pop</h1>
        <ons-button 
            ng-click="ons.navigator.popPage()">
            Pop Page
        </ons-button>
    </ons-page>


*page2.html*

    <ons-page class="center">
        <h1>Page 2</h1>
        <ons-button 
            ng-click="ons.navigator.pushPage('pages/navigator/page1.html', { title: 'Page 1' })">
            Push Page 1
        </ons-button>
        
        <h2>Pop</h2>
        <ons-button 
            ng-click="ons.navigator.popPage()">
            Pop Page
        </ons-button>
    </ons-page>