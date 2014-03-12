---
encoding: 'utf8'
---

*index.html*

    <ons-navigator>
      title="Page 1"
      right-button-icon="fa fa-lg fa-bars"
      on-right-button-click="ons.navigator.pushPage('page2.html')">      
      
      <ons-page class="center">
      <h1>Page 1</h1>
      <ons-button 
        ng-click="ons.navigator.pushPage('page2.html')">
        Push Page 2
      </ons-button>
      </ons-page>
    </ons-navigator>  



*page2.html*

    <ons-page class="center">
      <ons-navigator-toolbar 
        title="Page 2" 
        right-button-icon="fa fa-lg fa-angle-right" 
        on-right-button-click="ons.navigator.pushPage('page3.html')">      
      </ons-navigator-toolbar>
      <h1>Page 2</h1>
      <p>click the top right icon to push Page 3</p>
    </ons-page>



*page3.html*

    <ons-page class="center">
      <ons-navigator-toolbar 
        title="Page 3">
      </ons-navigator-toolbar>

      <h1>Page 3</h1>
    </ons-page>
