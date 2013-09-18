---
encoding: 'utf-8'
---

# How things is put together

Onsen UI make building application simple using one concept every web developer already know, the tag.


# Page management

Onsen UI provides some tags for managing pages. Those tags include screen, navigator, tabbar, and sliding-menu. Each have different UI and page placeholders. For illustration, see how to use navigator below.


# How to use Navigator

Navigator provides a toolbar and a page placeholder. The toolbar has left button, right button, and title accessible via attributes. 


E.g. to set the title to "Page 1", we would write:

    <ons-navigator title="Page 1" />


To link a page to the placeholder, we would add **page="PAGE_URL"**:

    <ons-navigator title="Page 1" page="page1.html" />

To push another page to the navigator's page stack, we would use:

    ons.navigator.pushPage('page2.html', 'Page 2');

*Notice:*
Notice how Navigator provice transition animation, toolbar's title and back button management for free.

To pop the last page out of navigator's page stack, we would use:

    ons.navigator.popPage();

#### See it in action

<iframe width="100%" height="650px" src="navigator_animation"></iframe>

# Creating complex UI easily by combining page management tags

In the **How to use Navigator** section, we showed you how easy it is to use Navigator to manage pages and toolbar.

But you are not limitted to that. You may combine Navigator with other page management tags to create complex UI with ease.

To illustrate that, let's look at example below where we put a page inside Navigator, and put Navigator inside Tabbar.

### Tabbar, Navigator, and Page

*index.html*

    <ons-tabbar>
        <ons-tabbar-item active="true" page="navigator.html">
            One
        </ons-tabbar-item> 
        <ons-tabbar-item  page="">
            Two
        </ons-tabbar-item> 
        <ons-tabbar-item page="">
            Three
        </ons-tabbar-item> 
    </ons-tabbar>


*navigator.html*

    <ons-navigator title="Title" page="page1.html" />


*company_list.html*

    <div class='page'>
        <ons-list class="center">
            <ons-list-item>
                <h3><i class="icon-apple"></i> Apple</h3>
            </ons-list-item>

            <ons-list-item>
                <h3><i class="icon-android"></i> Android</h3>
            </ons-list-item>

            <ons-list-item>
                <h3><i class="icon-windows"></i> Winows</h3>
            </ons-list-item>         

            <ons-list-item>
                <h3><i class="icon-html5"></i> HTML5</h3>
            </ons-list-item>

            <ons-list-item>
                <h3><i class="icon-css3"></i> CSS3</h3>
            </ons-list-item>         

            <ons-list-item>
                <h3><i class="icon-github"></i> GitHub</h3>
            </ons-list-item>             
        </ons-list>      
    </div>

#### See it in action

<iframe width="100%" height="650px" src="tabbar_navigator_page_animation"></iframe>


### Try other combinations

Different combination, produces different UI. In the example above, instead of putting the Navigator inside Tabbar, you may instead put the Tabbar inside Navigator. 

You will see the different when you push a new page to the navigator.
