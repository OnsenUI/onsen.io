---
encoding: 'utf8'
---

*index.html*

    <monaca-screen page="page1.html"></monaca-screen>


*page1.html*

    <div class="page">
        <h1>Hello, I am Page 1</h1>
        <monaca-button ng-click="monaca.presentPage('page2.html')">
            Present Page 2
        </monaca-button>
    </div>


*page2.html*

    <div class="page">
        <h1>Hello, I am Page 2</h1>
        <monaca-button ng-click="monaca.dismissPage()">
            Dismiss Page
        </monaca-button>
    </div>