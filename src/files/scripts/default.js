
// iframe lazy loader
$(function() {
  $.extend($.lazyLoadXT, {
    autoInit: false,
    edgeY: 0,
    srcAttr: 'data-src',
    throttle: 1000
  });

  var iframe = $('iframe');
  if (iframe.length > 0 && iframe.lazyLoadXT instanceof Function) {
    iframe.lazyLoadXT();
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

// footer newsletter
$(function() {
  $('.newsletter-signup form').submit(function(e) {
    e.preventDefault();
    var data = {email: $('input[name=email]', this).val()};

    var $submitButton = $('.newsletter-signup form [type=submit]');
    $submitButton.attr('disabled', 'disabled');

    $.post('https://monaca.mobi/ja/api/email/e458bcbcc4', data, function(data) {
      if (JSON.parse(data).status === 'success') {
        $('.newsletter-signup form').hide();
        $('.newsletter-signup-thankyou').show();
      } else {
        alert('Something wrong with the request. Sorry.');
        $submitButton.removeAttr('disabled');
      }
    });
  });
});

// header
$(function() {
  // for mobile website menu
  var header = $('.header')[0];
  $('.gnav-icon', header).click(function() {
    $('.header-navi', header).toggleClass('header-navi-open');
    $('.blog-header-navi', header).toggleClass('blog-header-navi-open');
  });
  $('.main-nav-icon').click(function() {
    $('#main-nav ul').toggleClass('open');
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
      $el.attr('href', $el.attr('href').replace(/\/$/, '') + window.location.pathname);
    }
  })($('.language-dialog-button.japanese-version'));

  if (window.SITE_ENV.lang == 'en' && window.SITE_ENV.hasAlternateLangPage) {
    if (browserLanguage() == 'ja' && !getCookie('language_dialog_accepted')) {
      $('.language-dialog-mask').show();
      $('.language-dialog').show();
    }
  }
});


// footer newsletter
$(function() {
  var info = $('#release-info');
  if (info.length) {
    var framework = info.data('framework');
    $.get('https://api.github.com/repos/OnsenUI/OnsenUI-dist/releases', function(data) {
      $('.version', info).html(data[0].name);
      $('time', info).html(moment(new Date(data[0].published_at)).fromNow());
    });
  }
});

$(function() {
  $('a[href][track-click]').on('click', function(ev) {
    ev.preventDefault();
    var $a = $(ev.currentTarget);
    var params = JSON.parse($a.attr('track-click'));
    var url = $a.attr('href');
    trackEventAndRedirect(params, url);
  });
});


var trackOutboundLink = function(url) {
  ga('send', 'event', 'outbound', 'click', url, {
    'hitCallback': function() {
      document.location = url;
    }
  });
}

var trackEventAndRedirect = function(params, url) {
  if (params) {
    ga('send', 'event', params.category, params.action, params.label, {
      'hitCallback': function() {
        url ? (window.location = url) : '';
      }
    });
  } else {
    url ? (window.location = url) : '';
  }
}

function browserLanguage() {
  try {
    return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
  } catch(e) {
    return undefined;
  }
}

function switchKeyVisualFrame() {
  var $frameIos = $('#keyvisual_ios'),
    $frameAndroid = $('#keyvisual_android');

  if ($frameIos.is(':visible')) {
    // If both the iOS and Android frames are loaded simultaneously, we end up making
    // the same requests twice, because they are pointing to the same kitchensink
    // example. So, we only set Android's src when the user wants to change to it. This
    // doesn't make it load any slower, as by the time the user switches, all the files
    // will already be cached from the iOS frame.
    var $androidIframeEl = $frameAndroid.find('#keyvisual_frame_content_android');
    if($androidIframeEl.attr('pending-src')) {
      $androidIframeEl.attr('src', $androidIframeEl.attr('pending-src'));
      $androidIframeEl.removeAttr('pending-src');
    }

    $frameIos.hide();
    $frameAndroid.css("display", "inherit");
  } else if ($frameAndroid.is(':visible')) {
    $frameAndroid.hide();
    $frameIos.css("display", "inherit");
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

$(function() {
  $('.phone.ios iframe').load(function() {
    $('.phone-placeholder').css('opacity', 0);
  });
});

$(function() {
  $('.global-nav-checkbox').change(function(event) {
    if (event.target.checked) {
      document.body.scrollTop = 0;
      document.body.classList.add('noscroll');
    }
    else {
      document.body.classList.remove('noscroll');
    }
  });

  $(window).on('resize', function() {
    document.body.classList.remove('noscroll');
    $('.global-nav-checkbox').prop('checked', false);
  });
});

$(function() {
  var events = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd';

  $('.keyvisual-image').on(events, function() {
    $(this).css('visibility', 'visible');
  });

  $('.keyvisual-switch').on(events, function() {
    $(this).css('visibility', 'visible');
  });
});

$(function() {
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 500);
});

// Set target="_blank" to all the links in the article body
$(function() {
  $('.article-content a').attr('target' , '_blank');
});

// highlight items in side menu
var sideMenuHighlight = function(getParams) {
  if (!$('.content-info').length) { // return if no side menu
    return;
  }

  var params = getParams();
  var mainLink = params.mainLink; // link of current page
  var linkMap = params.linkMap; // map of section ID -> section link
  var sections = params.sections; // stack of sections in page

  // highlight link of current page
  mainLink.addClass('current');
  mainLink.parent('li').addClass('toc-item-open');

  // update side menu on scroll
  document.addEventListener('scroll', function () {
    queueUpdate();
  }, true);

  if(mainLink.length) {
    // move view to current item
    var mainOffset = mainLink.offset();
    var menu = $('.content-info');
    if (mainOffset.top > menu.height() / 2) {
      setTimeout(function () {
        menu.scrollTop(mainOffset.top - menu.offset().top - (menu.height() / 2));
      }, 0);
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  // HELPER FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////

  // update after given time if update not already scheduled
  var queueUpdate = (function () {
    var queued = false;
    return function () {
      if (!queued) {
        queued = true;
        window.requestAnimationFrame(function() {
          update();
          queued = false;
        });
      }
    };
  })();

  // highlight section being viewed
  var update = (function () {
    var currentSection = mainLink;

    return function () {
      var scrolled = window.scrollY + 50;

      for (var i = sections.length - 1; i >= 0; i--) {
        var section = sections[i];
        var position = section.offset().top;

        if (scrolled > position) {
          var id = '#' + section.attr('id');
          currentSection.removeClass('current');
          currentSection.parent('.toc-1-item').removeClass('toc-item-open');

          currentSection = linkMap[id];
          currentSection.addClass('current');
          $(currentSection.parents('.toc-1-item')[0]).addClass('toc-item-open');
          return;
        }
      };
    };
  })();

  queueUpdate();
}

