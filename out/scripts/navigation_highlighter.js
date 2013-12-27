(function(){
	var header = document.querySelector('#header-container');
	var origOffsetY = header.offsetHeight;
	
	var leftMenu = document.querySelector('.left-menu');

	function onScroll(e) {
		window.scrollY >= origOffsetY ? leftMenu.classList.add('sticky') :
			leftMenu.classList.remove('sticky');
	}

	document.addEventListener('scroll', onScroll);
})();


(function() {
	var links = $('.link');
	var sections = [];
	var linkMap = {};
	var currentParent;

	for (var i = 0; i < links.length; i++) {
		var link = $(links[i]);
		var id = link.attr('href');
		var isParent = link.attr('is-parent') === "true" || false;
		if(isParent){
			currentParent = link;
		}
		var section = $(id);
		sections.push(section);
		linkMap[id] = {};
		linkMap[id].link = link;
		linkMap[id].parent = currentParent;
	}


	var scrollWrapper = document;
	var offset = 60;
	scrollWrapper.addEventListener('scroll', function() {
		for (var i = sections.length - 1; i >= 0; i--) {
			var scrolled = window.scrollY + offset;
			var section = sections[i];
			var position = section.offset().top;
			
			if (scrolled > position ) {
				var id = '#' + section.attr('id');
				links.removeClass('selected');
				var link = linkMap.id;
				linkMap[id].link.addClass('selected');
				linkMap[id].parent.addClass('selected');
				break;
			}
		};

	});

})();