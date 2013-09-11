(function(){
	var header = document.querySelector('#header-container');
	var origOffsetY = header.offsetHeight;
	
	var leftMenu = document.querySelector('.left-menu');

	function onScroll(e) {
		console.log('scrolled:' + window.scrollY);
		window.scrollY >= origOffsetY ? leftMenu.classList.add('sticky') :
			leftMenu.classList.remove('sticky');
	}

	document.addEventListener('scroll', onScroll);
})();


(function() {
	console.log('ready');
	var links = $('.link');
	console.log(links);
	var sections = [];
	var linkMap = {};

	for (var i = 0; i < links.length; i++) {
		var link = $(links[i]);
		console.log('link ' + link.html());
		var id = link.attr('href');
		console.log('href = ' + id);
		var section = $(id);
		sections.push(section);
		linkMap[id] = link;
	}

	console.log('linkMap ', linkMap);



	var scrollWrapper = document;
	var offset = 60;
	console.log('scrollerWrapper:' + scrollWrapper);
	scrollWrapper.addEventListener('scroll', function() {
		for (var i = sections.length - 1; i >= 0; i--) {
			var scrolled = window.scrollY + offset;
			var section = sections[i];
			var position = section.offset().top;
			
			if (scrolled > position ) {
				var id = '#' + section.attr('id');
				console.log('reached ' + id);
				links.removeClass('selected');
				var link = linkMap.id;
				console.log('link', link);
				linkMap[id].addClass('selected');
				break;
			}
		};

	});

})();