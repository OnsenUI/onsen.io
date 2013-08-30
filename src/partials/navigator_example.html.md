---
encoding: 'utf8'
---

*index.html*

    <ns-navigator page="page1.html" title="Page 1"></ns-navigator>


*page1.html*

    <div class="page center">
        <h1>Hello, I am Page 1</h1>
        <ns-button ng-click="ns.navigator.pushpage('page2.html', 'Page 2')">
            Push Page 2
        </ns-button>
    </div>


*page2.html*

    <div class="page center">
        <h1>Hello, I am Page 2</h1>
        <ns-button ng-click="ns.navigator.popPage()">
            Pop Page
        </ns-button>
    </div>