
(function() {
	var links = $('.link');
	var sections = [];
	var iframes = [];
	var linkMap = {};
	var currentParent;

	var directiveContainers = $('div.directive-container');

	for (var i = 0; i < links.length; i++) {
		var link = $(links[i]);
		var id = link.attr('href');
		var isParent = link.attr('is-parent') === "true" || false;
		if (isParent) {
			currentParent = link;
		}
		var section = $(id);
		sections.push(section);
		iframes[i] = $(directiveContainers[i]).find('iframe')[0];
		linkMap[id] = {};
		linkMap[id].link = link;
		linkMap[id].parent = currentParent;
	}

	directiveContainers = null;

	var scrollWrapper = document;
	var offset = 60;
	scrollWrapper.addEventListener('scroll', function() {
		for (var i = sections.length - 1; i >= 0; i--) {
			var scrolled = window.scrollY + offset;
			var section = sections[i];
			var position = section.offset().top;
			
			if (scrolled > position) {
				if (iframes[i]) {
					var iframe = $(iframes[i]);
					var src = iframe.data('src');
					if (iframe.attr('src') !== src) {
						setTimeout(function() {
							iframe.attr('src', src);
						}, 0);
					}
				}

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
