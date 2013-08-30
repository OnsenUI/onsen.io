---
encoding: 'utf8'
---

*index.html*

    <ons-navigator page="page1.html" title="Page 1"></ons-navigator>


*page1.html*

    <div class="page center">
        <h1>Hello, I am Page 1</h1>
        <ons-button ng-click="ons.navigator.pushpage('page2.html', 'Page 2')">
            Push Page 2
        </ons-button>
    </div>


*page2.html*

    <div class="page center">
        <h1>Hello, I am Page 2</h1>
        <ons-button ng-click="ons.navigator.popPage()">
            Pop Page
        </ons-button>
    </div>