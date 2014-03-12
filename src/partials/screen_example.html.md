---
encoding: 'utf8'
---

*index.html*

    <ons-screen>
        <ons-navigator title="Screen">
            <ons-page class="center">
                <h1>Page 1</h1>
                <ons-button 
                    ng-click="ons.screen.presentPage('page2.html')">
                        Present Page 2
                </ons-button>
            </ons-page>
        </ons-navigator>
    </ons-screen>


*page2.html*

    <ons-page class="center">
        <h1>Page 2</h1>
        <ons-button 
            ng-click="ons.screen.dismissPage()">
                Dismiss Page
        </ons-button>
    </ons-page>
