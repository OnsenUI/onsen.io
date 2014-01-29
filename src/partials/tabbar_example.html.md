---
encoding: 'utf8'
---

*index.html*

    <ons-tabbar>
        <ons-tabbar-item 
          icon="home"
          label="Home"
          page="pages/tabbar/page1.html"
          active="true"></ons-tabbar-item> 
        <ons-tabbar-item 
          icon="comment"
          label="Comments"          
          page="pages/tabbar/page2.html"></ons-tabbar-item> 
        <ons-tabbar-item 
          icon="gear"
          label="Settings"
          page="pages/tabbar/page3.html"></ons-tabbar-item> 
    </ons-tabbar>


*page1.html*

    <ons-page class="center">
        <h1>Hello, I am Page 1</h1> 
    </ons-page>


*page2.html*

    <ons-page class="center bg-orange">
        <h1>Hello, I am Page 2</h1> 
    </ons-page>


*page3.html*

    <ons-page class="center bg-green">
        <h1>Hello, I am Page 3</h1> 
    </ons-page>