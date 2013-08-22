---
layout: 'default'
title: 'Home'
---

for page in @getCollection('pages').toJSON()
	ul ->
		li ->		
			h1 ->
				page.title