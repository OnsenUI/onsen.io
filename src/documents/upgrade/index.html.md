---
layout: 'docpad_en'
title: 'Upgrade Guide'
page: 'upgrade'
---

Upgrading from 0.6 to 1.0
-------------------------

## ons-navigator

	ons.navigator.pushPage( url, title );

is now

	ons.navigator.pushPage ( url, {
		title: 'your title'
	});


## ons-tabbar-item

	<ons-tab-bar-item>
		YOUR LABEL HERE
	</ons-tab-bar-item>

is now
	
	<ons-tab-bar-item
		label="YOUR LABEL HERE">
	</ons-tab-bar-item>