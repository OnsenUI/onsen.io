$(function() {
  var $model = $('.github-widget-commit').hide(),
    base_url = 'https://api.github.com/repos/OnsenUI/OnsenUI';

  $.ajax({
    url: base_url,
    dataType: 'jsonp',
    success: function(res) {
      var $num = $(".github-widget-header-num");
  
      $num.first().text(res.data.stargazers_count);
      $num.last().text(res.data.forks_count);
      
      $('div.social a.github-star strong').text(res.data.stargazers_count);
    },
    error: function() {
      $('div.social img.github-icon-mini').remove();
      $('div.social a.github-star').remove();
    }
  });
  
  $.ajax({
    url: base_url + '/commits',
    dataType: 'jsonp',
    success: function(res) {
      $.each(res.data.slice(0, 4), function(k, commit) {
        var $copy = $model.clone(),
            avatar_url;

        $copy.find('.github-widget-commit-message').text(commit.commit.message);
        $copy.find('.github-widget-commit-author').text(commit.commit.author.name);

        $copy.find('.github-widget-commit-info a')
          .text(moment(new Date(commit.commit.author.date)).fromNow())
          .attr('href', commit.html_url);

        if(commit.author) {
          avatar_url = commit.author.avatar_url;
        } else {
          avatar_url = 'https://avatars.githubusercontent.com/u/0?v=2'; 
        }

        $copy.find('.github-widget-commiter-image').attr('src', avatar_url + '&s=56')
          .parent().attr('href', commit.html_url);

        $copy.appendTo($('.github-widget')).show();
      });
    }
  });    
});
