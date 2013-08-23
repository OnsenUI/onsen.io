---
layout: 'default'
title: 'Home'
---

for page in @getCollection('pages').toJSON()
	h2 ->
		page.title