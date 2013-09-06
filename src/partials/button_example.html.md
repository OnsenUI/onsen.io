---
utf-8
---

*index.html*

    <ons-tabbar>
        <ons-tabbar-item active="true" page="type.html">Types</ons-tabbar-item> 
        <ons-tabbar-item page="spin.html">Spin</ons-tabbar-item>     
    </ons-tabbar>

*type.html*

    <div class="table-cell align-right">
        <h3>Types</h3>
        
        <ons-button>Default</ons-button>
        
        <ons-button type="large">large</ons-button>         
        
        <ons-button type="quiet">quiet</ons-button>
        
        <ons-button type="large--quiet">large--quiet</ons-button>
        
        <ons-button type="cta">cta</ons-button>
        
        <ons-button type="large--cta">large--cta</ons-button>
    </div>

    <div class="table-cell align-left">
        <h3>Disabled</h3>
        
        <ons-button disabled="true">Default</ons-button>
        
        <ons-button type="large" disabled="true">large</ons-button>
        
        <ons-button type="quiet" disabled="true">quiet</ons-button>         
        
        <ons-button type="large--quiet" disabled="true">large--quiet</ons-button>
        
        <ons-button type="cta" disabled="true">cta</ons-button>
        
        <ons-button type="large--cta" disabled="true">large--cta</ons-button>
    </div>
    

*spin.html*

    <ons-select ng-model="animationName" ng-init=" animationName = 'slide-left' ">
        <option>slide-left</option>
        <option>slide-right</option>
        <option>slide-up</option>
        <option>slide-down</option>
        <option>expand-left</option>
        <option>expand-right</option>
        <option>expand-up</option>
        <option>expand-down</option>
        <option>zoom-in</option>
        <option>zoom-out</option>
    </ons-select>
    

    <ons-button 
        animation="{{animationName}}"
        should-spin="{{spin1}}" 
        ng-click="spin1 = !spin1">Default</ons-button>
    
    <ons-button 
        animation="{{animationName}}" 
        type="large" 
        should-spin="{{spin2}}" 
        ng-click="spin2 = !spin2">large</ons-button>
    
    <ons-button 
        animation="{{animationName}}" 
        type="quiet" 
        should-spin="{{spin3}}" 
        ng-click="spin3 = !spin3">quiet</ons-button>
    
    <ons-button 
        animation="{{animationName}}" 
        type="large--quiet" 
        should-spin="{{spin4}}" 
        ng-click="spin4 = !spin4">large--quiet</ons-button>
    
    <ons-button 
        animation="{{animationName}}" 
        type="cta" 
        should-spin="{{spin5}}" 
        ng-click="spin5 = !spin5">cta</ons-button>
    
    <ons-button 
        animation="{{animationName}}" 
        type="large--cta" 
        should-spin="{{spin6}}" 
        ng-click="spin6 = !spin6">large--cta</ons-button>