---
encoding: 'utf8'
---

*index.html*

    <ns-tabbar>
        <ns-tabbar-item page="pages/tabbar/page1.html">
            One
        </ns-tabbar-item> 
        <ns-tabbar-item active="true" page="pages/tabbar/page2.html">
            Two
        </ns-tabbar-item> 
        <ns-tabbar-item page="pages/tabbar/page3.html">
            Three
        </ns-tabbar-item> 
    </ns-tabbar>


*page1.html*

    <div class="page center">
        <h1>Hello, I am Page 1</h1> 
    </div>


*page2.html*

    <div class="page center bg-orange">
        <h1>Hello, I am Page 2</h1> 
    </div>


*page3.html*

    <div class="page center bg-green">
        <h1>Hello, I am Page 3</h1> 
    </div>