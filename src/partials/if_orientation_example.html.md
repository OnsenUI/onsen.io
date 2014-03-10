---
encoding: 'utf8'
---

*index.html*

	<ons-navigator title="Orientation Detection">
		<div ons-if-orientation="portrait">
			<p>Portrait content here!</p>
		</div>
		
		<div ons-if-orientation="landscape">
			<p>Landscape content here!</p>
		</div>
	</ons-navigator>