
(function() {
	var links = $('.directive-name');
	var sections = [];
	var iframes = [];
	var linkMap = {};
	var currentParent;

	(function() {
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
	})();

	var scrollWrapper = document;
	var offset = 200;

	function loadDemo(iframe) {
		var $iframe = $(iframe);
		var scrollY = window.scrollY;

		if ($iframe.attr('src') !== $iframe.data('src')) {
			setTimeout(function() {
				if (window.scrollY === scrollY) {
					$iframe.attr('src', $iframe.data('src'));
				}
			}, 300);
		}
	}

	scrollWrapper.addEventListener('scroll', function() {
		var scrolled = window.scrollY + ($(window).height() / 2);

		for (var i = sections.length - 1; i >= 0; i--) {
			var section = sections[i];
			var position = section.offset().top;
			
			if (scrolled > position) {
				iframes[i] && loadDemo(iframes[i]);

				var id = '#' + section.attr('id');
				links.removeClass('selected');
				linkMap[id].link.addClass('selected');
				linkMap[id].parent.addClass('selected');
				break;
			}
		};
	});

})();
