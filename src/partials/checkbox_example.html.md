---
encoding: 'utf8'
---

*index.html*

    <ons-page style="padding: 0px;">

      <section style="padding: 10px;">      
        <ons-checkbox ng-model="agree">
          True or False?
        </ons-checkbox>
        <span>{{agree}}</span>  
      </section>

      <section style="padding: 10px;">      
        <ons-checkbox 
          ng-model="answer" 
          ng-true-value="YES" 
          ng-false-value="NO">
          Yes or No?
        </ons-checkbox>
        <span>{{answer}}</span>  
      </section>
      
    </ons-page>

