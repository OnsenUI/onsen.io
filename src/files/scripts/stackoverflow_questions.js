$(function() {
  var $model = $('.forum-item').first().hide();

  var timeSince = function(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }

  var abbreviateQuestion = function(q, count) {
    var div = document.createElement('div');
    div.innerHTML = q;
    var text = div.textContent || div.innerText || '';

    if(text.length > count) {
      return text.slice(0, count) + '... ';
    } else {
      return text;
    }
  }

  var site = $('html.lang-ja').length > 0 ? 'ja.stackoverflow' : 'stackoverflow';

  $.ajax({
    url: 'https://api.stackexchange.com/2.2/questions?page=1&pagesize=4&order=desc&sort=creation&tagged=onsen-ui&site=' + site + '&filter=!9YdnSJBlX',
    dataType: 'jsonp',
    success: function(res) {
      $.each(res.items.reverse(), function(index, item) {
        var $copy = $model.clone();

        $copy.find('.forum-item-answers-num').text(item.answer_count);
        $copy.find('.forum-item-title').html(item.title)
          .attr('href', item.link);

        $copy.find('.forum-item-footer img').attr('src', item.owner.profile_image);
        $copy.find('.forum-item-time').text(timeSince(new Date(1000*parseInt(item.creation_date))));

        $copy.find('.forum-item-description').text(abbreviateQuestion(item.body, 300))
          .append($('<a></a>').attr('href', item.link).text('read more'));

        $copy.prependTo($('.forum-widget')).show();
      });
    }
  });
});
