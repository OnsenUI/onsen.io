---
encoding: 'utf8'
---

*index.html*

    <ons-split-view 
        secondary-page="secondary.html" 
        main-page="page1.html" 
        main-page-width="70" 
        collapse="width 650px">
    </ons-split-view>


*menu.html*

    <ons-page>
        <ul class="fa-ul">

            <ons-list-item 
                ng-click="ons.splitView.toggle();
                    ons.splitView.setMainPage('page1.html');">
                <i class="fa-li fa fa-home fa-lg" style="top: 25%"></i>
                Page 1
            </ons-list-item>

            <ons-list-item 
                ng-click="ons.splitView.toggle(); 
                    ons.splitView.setMainPage('page2.html');">
                <i class="fa-li fa fa-gear fa-lg" style="top: 25%"></i>
                Page 2
            </ons-list-item>

        </ul>

    </ons-page>


*page1.html*

    <ons-page class="center" style="padding: 10px">
        <h1>Page 1</h1>
        <p>
            This spitview collapses when the width is less than 650px.
        </p>    
        <p>
            When in collapse mode, you can swipe left and right to close and open the secondary page.
        </p>    
    </ons-page>


*page2.html*

    <ons-page class="center">
        <h1>Page 2</h1>
    </ons-page> 