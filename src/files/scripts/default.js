
// iframe lazy loader
$(function() {
  $.extend($.lazyLoadXT, {
    autoInit: false,
    edgeY: 0,
    srcAttr: 'data-src',
    throttle: 1000
  });

  var iframe = $('iframe');
  if (iframe.length > 0) {
    iframe.lazyLoadXT();
  }
});

// sticky menu
$(function() {
  var sticked = $('.content-info');

  if (sticked.length === 0) {
    return;
  }

  var elementTop = sticked.offset().top;
  var footerHeight = $('.footer-container').height();

  $(window).scroll(update);
  
  function update() {
    var scrollTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      documentHeight = $(window.document).height();

    if (scrollTop > elementTop) {
      if (scrollTop > documentHeight - windowHeight - footerHeight) {
        sticked.removeClass('content-info-fixed');
        sticked.addClass('content-info-bottom');
        sticked.css({
          top: (documentHeight - windowHeight - footerHeight) + 'px'
        });
      } else {
        sticked.removeClass('content-info-bottom');
        sticked.addClass('content-info-fixed');
        sticked.attr('style', '');
      } 
    } else {
      sticked.removeClass('content-info-bottom content-info-fixed');
      sticked.attr('style', '');
    }
  }
});

// tracking
$(function() {
  $('[data-track-event]').click(function() {
    var eventName = '' + $(this).data('track-event');

    if (eventName.length > 0) {
      ga('send', 'event', 'website', eventName);
    }
  });
});

// side menu highlight
(function() {
  var links = $('.content-info a');
  var sections = [];
  var linkMap = {};
  var toc1Items = $('.toc-1-item');

  var scrollWrapper = document;
  var offset = 200;

  if (links.length > 0) {
    prepare();
    setTimeout(update, 400);
    scrollWrapper.addEventListener('scroll', queueUpdate, true);
  }

  var queued = false;
  function queueUpdate() {
    if (!queued) {
      queued = true;
      setTimeout(function() {
        update();
        queued = false;
      }, 80);
    }
  }

  function update() {
    var scrolled = window.scrollY + 50;

    for (var i = sections.length - 1; i >= 0; i--) {
      var section = sections[i];
      if (typeof section.offset() == 'undefined') {

      } else {
        var position = section.offset().top;
      }
      
      if (scrolled > position) {
        var id = '#' + section.attr('id');
        links.removeClass('current');
        toc1Items.removeClass('toc-item-open');
        linkMap[id].link.addClass('current');
        $(linkMap[id].link.parents('.toc-1-item')[0]).addClass('toc-item-open');
        return;
      }
    };
  }

  function prepare() {
    for (var i = 0; i < links.length; i++) {
      var link = $(links[i]);
      var id = link.attr('href');
      try {
        var section = $(id);
        if (section) {
          sections.push(section);
          linkMap[id] = {};
          linkMap[id].link = link;
        }
      } catch (e) {
        // ignore
      }
    }
  }

})();

// footer newsletter
$(function() {
  $('.newsletter form').submit(function() {
    var email = $('input[name=email]', this).val();

    $.post('https://monaca.mobi/ja/api/email/e458bcbcc4', {email: email})
      .success(function(data) {
        var ret = JSON.parse(data);

        if (ret.status !== undefined && ret.status === 'success') {
          $('.newsletter form').hide();
          $('.newsletter-thankyou').show();
        } else {
          alert('Something wrong with the request. Sorry.');
        }
      });
    return false;
  });
});

// header
$(function() {
  // for mobile website menu
  var header = $('.header')[0];
  $('.gnav-icon', header).click(function() {
    $('.header-navi', header).toggle();
  });

  // for language switch dialog
  $('.language-dialog-button.close').click(function() {
    setCookie('language_dialog_accepted', 'true', 1);
    $('.language-dialog-mask').hide();
    $('.language-dialog').hide();

    return false;
  });
 
  (function($el) {
    if ($el.length) {
      $el.attr('href', $el.attr('href').replace(/\/$/, "") + window.location.pathname);
    }
  })($('.language-dialog-button.japanese-version'));    

  if (window.SITE_ENV.lang == 'en' && window.SITE_ENV.hasAlternateLangPage) {
    if (browserLanguage() == 'ja' && !getCookie('language_dialog_accepted')) {
      $('.language-dialog-mask').show();
      $('.language-dialog').show();
    }
  }
});

var trackOutboundLink = function(url) {
  ga('send', 'event', 'outbound', 'click', url, {
    'hitCallback': function() {
      document.location = url;
    }
  });
}

function browserLanguage() {
  try {
    return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
  } catch(e) {
    return undefined;
  }
}

function setCookie(c_name, value, expiredays) {
  var path = location.pathname;
  var paths = new Array();
  paths = path.split('/');
  if(paths[paths.length - 1] != ''){
    paths[paths.length - 1] = '';
    path = paths.join('/');
  }
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60 * 60 * 24 * 1000 * expiredays));
  var exdate = cltime.toUTCString();
  var s = '';
  s += c_name + '=' + escape(value);
  s += '; path='+ path;
  if (expiredays) {
    s += '; expires=' +exdate+'; ';
  } else {
    s += '; ';
  }
  document.cookie=s;
} 

function getCookie(c_name) {
  var st = '';
  var ed = '';
  if (document.cookie.length > 0) {
    st = document.cookie.indexOf(c_name + '=');
    if (st != -1) {
      st = st + c_name.length + 1;
      ed = document.cookie.indexOf(';', st);
      if (ed == -1) {
        ed = document.cookie.length;
      }
      return unescape(document.cookie.substring(st, ed));
    }
  }
  return '';
}
