---
encoding: 'utf8'
---

*index.html*

    <ons-screen>
        <ons-split-view 
          secondary-page="secondary.html" 
          main-page="page1.html" 
          main-page-width="40%" 
          collapse="width 650px">
        </ons-split-view>
    </ons-screen>


*secondary.html*

    <ons-page>

      <ul class="topcoat-list">

        <ons-list-item
          class="topcoat-list__item--tappable topcoat-list__item__line-height" 
          ng-click="
            ons.splitView.toggle();
            ons.splitView.setMainPage('page1.html');">
          <i class="fa fa-home fa-lg" style="color: #666"></i>
          &nbsp; Page 1
        </ons-list-item>

        <ons-list-item 
          class="topcoat-list__item--tappable topcoat-list__item__line-height"
          ng-click="
            ons.splitView.toggle();
            ons.splitView.setMainPage('page2.html');">
          <i class="fa fa-gear fa-lg" style="color: #666"></i>
          &nbsp; Page 2
        </ons-list-item>

      </ul>
    </ons-page>



*page1.html*

    <ons-navigator title="Page 1">
      <ons-page class="center" style="padding: 10px">
        <h1>Page 1</h1>
        <p>This spitview collapses when the width is less than 650px.</p>
        <p>When in collapse mode, you can swipe left and right to close and open the secondary page.</p>
      </ons-page>
    </ons-navigator>


*page2.html*

    <ons-navigator title="Page 2">
      <ons-page class="center">
        <h1>Page 2</h1>
      </ons-page>
    </ons-navigator>
