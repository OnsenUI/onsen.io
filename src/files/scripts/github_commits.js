function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}


$(function() {
  var $model = $(".github-widget-commit").hide(),
    base_url = "https://api.github.com/repos/OnsenUI/OnsenUI";

  $.ajax({
    url: base_url + "/commits",
    dataType: "jsonp",
    success: function(res) {
      var $num = $(".github-widget-header-num");
  
      $num.first().text(res.data.stargazers_count);
      $num.last().text(res.data.forks_count);
    }
  });
  
  $.ajax({
    url: base_url + "/commits",
    dataType: "jsonp",
    success: function(res) {
      $.each(res.data.slice(0, 4), function(k, commit) {
        var $copy = $model.clone();

        $copy.find(".github-widget-commit-message").text(commit.commit.message);
        $copy.find(".github-widget-commit-author").text(commit.commit.author.name);

        $copy.find(".github-widget-commit-info a")
        .text(timeSince(new Date(commit.commit.author.date)) + " ago")
        .attr("href", commit.html_url);

      $copy.appendTo($(".github-widget")).show();
      });
    }
  });    
});
