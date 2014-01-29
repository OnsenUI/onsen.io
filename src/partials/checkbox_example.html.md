---
encoding: 'utf8'
---

*index.html*


    <ons-page class="center">    
      <section>      
        <ons-checkbox ng-model="agree">
          True or False?
        </ons-checkbox>
        <h3>{{agree}}</h3>  
      </section>

      <section>      
        <ons-checkbox ng-model="answer" ng-true-value="YES" ng-false-value="NO">
          Yes or No?
        </ons-checkbox>
        <h3>{{answer}}</h3>  
      </section> 
    </ons-page>

