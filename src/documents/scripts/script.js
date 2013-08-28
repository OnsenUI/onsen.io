// /* Author:

//  */

// var topRange = 200, // measure from the top of the viewport to X pixels down
// 	edgeMargin = 20, // margin above the top or margin from the end of the page
// 	animationTime = 1200, // time in milliseconds
// 	contentTop = [];

// $(document).ready(function() {

// 	// Stop animated scroll if the user does something
// 	$('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e) {
// 		if (e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel') {
// 			$('html,body').stop();
// 		}
// 	});

// 	// Set up content an array of locations
// 	$('#sidemenu').find('a').each(function() {
// 		console.log('content array');
// 		contentTop.push($($(this).attr('href')).offset().top);
// 		console.log('contentArrays:' + contentTop.length);
// 	});

// 	// Animate menu scroll to content
// 	$('#sidemenu').find('a').click(function() {
// 		var sel = this,
// 			newTop = Math.min(contentTop[$('#sidemenu a').index($(this))], $(document).height() - $(window).height()); // get content top or top position if at the document bottom
// 		$('html,body').stop().animate({
// 			'scrollTop': newTop
// 		}, animationTime, function() {
// 			window.location.hash = $(sel).attr('href');
// 		});
// 		return false;
// 	});

// 	// adjust side menu
// 	$('.right-container').scroll(function() {
// 		console.log('on scroll');
// 		var winTop = $('.right-container').scrollTop(),
// 			bodyHt = $('document').height(),
// 			vpHt = $(window).height() + edgeMargin; // viewport height + margin
// 		$.each(contentTop, function(i, loc) {
// 			if ((loc > winTop - edgeMargin && (loc < winTop + topRange || (winTop + vpHt) >= bodyHt))) {
// 				console.log('select');
// 				var toBeSelected = $('#sidemenu a').eq(i);
// 				console.log(toBeSelected.html());

// 				$('#sidemenu a')
// 					.removeClass('selected')
// 					.eq(i).addClass('selected');
// 			}
// 		});
// 	});

// })

(function() {
	console.log('ready');
	var links = $('.link');
	console.log(links);
	var sections = [];
	var linkMap = {};

	for(var i=0; i<links.length; i++){
		var link = $(links[i]);
		console.log('link ' + link.html());		
		var id = link.attr('href');
		console.log('href = ' + id);
		var section = $(id);
		sections.push(section);
		linkMap[id] = link;
	}

	console.log('linkMap ', linkMap);



	var scrollWrapper = $('.right-container')[0];
	var offset = 0;
	console.log('scrollerWrapper:' + scrollWrapper);
	scrollWrapper.addEventListener('scroll', function() {
		// var scrollTopAndOffsetHeight = scrollWrapper.scrollTop + scrollWrapper.offsetHeight;
		// var scrollHeightMinusOffset = scrollWrapper.scrollHeight - offset;
		// console.log('scrollTopAndOffsetHeight' + scrollTopAndOffsetHeight);
		// console.log('scrollHeightMinusOffset' + scrollHeightMinusOffset);
		// var scrolled = scrollWrapper.scrollTop;
		// console.log('scrolled ' + scrolled);
		for (var i = sections.length - 1; i >= 0; i--) {
			var section = sections[i];
			var position = section.offset().top;
			// console.log( section.attr('id') + ' position ' + position);
			// if (scrolled > position) {
			// 	var id = section.attr('id');
			// 	console.log('reached ' + id);
			// 	break;
			// }
			if(position < 110){
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