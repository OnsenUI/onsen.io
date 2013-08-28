---
encoding: 'utf8'
---

*index.html*

    <monaca-navigator page="page1.html"></monaca-navigator>


*page1.html*

    <div class="page">
        <h1>Hello, I am Page 1</h1>
        <monaca-button ng-click="monaca.pushpage('page2.html', 'Page 2')">
            Push Page 2
        </monaca-button>
    </div>


*page2.html*

    <div class="page">
        <h1>Hello, I am Page 2</h1>
        <monaca-button ng-click="monaca.popPage()">
            Pop Page
        </monaca-button>
    </div>