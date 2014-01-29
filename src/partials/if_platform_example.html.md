---
encoding: 'utf8'
---

*index.html*

	<ons-page class="center">    
		<div ons-if-platform="Android">
			<h1>Show me only if run in Android.</h1>
		</div>

		<div ons-if-platform="iOS">
			<h1>Show me only if run in iOS.</h1>
		</div>

		<div ons-if-platform="BlackBerry">
			<h1>Show me only if run in BlackBerry.</h1>
		</div>

		<div ons-if-platform="chrome">
			<h1>Show me only if run in Chrome.</h1>
		</div>

		<div ons-if-platform="safari">
			<h1>Show me only if run in Safari.</h1>
		</div>

		<div ons-if-platform="firefox">
			<h1>Show me only if run in Firefox.</h1>
		</div>

		<div ons-if-platform="Opera">
			<h1>Show me only if run in Opera.</h1>
		</div>
  	</ons-page>