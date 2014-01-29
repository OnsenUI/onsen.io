---
encoding: 'utf8'
---

*index.html*

	<ons-page class="center">    
	  	<h2>Choose Level</h2>
	  	<ons-radio-button ng-model="level" value="Easy" right-label="Easy" name="level-group"></ons-radio-button>

	  	<ons-radio-button ng-model="level" value="Medium" right-label="Medium" name="level-group"></ons-radio-button>
	  	
	  	<ons-radio-button ng-model="level" value="Hard" right-label="Hard" name="level-group"></ons-radio-button>
	  	
	  	<h3>{{level}}</h3>
  	</ons-page>