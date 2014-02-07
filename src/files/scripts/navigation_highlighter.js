
(function() {
	var links = $('.directive-name');
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
	var timeoutIds = [];
	function addDelayedLoadDemo(iframe) {
		iframe = $(iframe);
		var src = iframe.data('src');
		if (iframe.attr('src') !== src) {
			timeoutIds.push(setTimeout(function() {
				iframe.attr('src', src);
			}, 200));
		}
	}
	scrollWrapper.addEventListener('scroll', function() {
		for (var i = 0; i < timeoutIds.length; i++) {
			clearTimeout(timeoutIds[i]);
		}
		timeoutIds = [];
		for (var i = sections.length - 1; i >= 0; i--) {
			var scrolled = window.scrollY + offset;
			var section = sections[i];
			var position = section.offset().top;
			
			if (scrolled > position) {
				iframes[i] && addDelayedLoadDemo(iframes[i]);
				iframes[i - 1] && addDelayedLoadDemo(iframes[i - 1]);
				iframes[i + 1] && addDelayedLoadDemo(iframes[i + 1]);

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
