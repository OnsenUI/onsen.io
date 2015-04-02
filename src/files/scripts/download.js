
$(function() {
  $('#get-latest-build').click(function(event) {
    event.preventDefault();

    var rootUrl = 'https://circleci.com/api/v1/project/OnsenUI/OnsenUI';

    $.getJSON(rootUrl + '/tree/master?shallow=true&offset=0&limit=1&filter=successful', function(res) {
      var artifactUrl = rootUrl + '/' + res[0].build_num  + '/artifacts';

      $.getJSON(artifactUrl, function(res) {
        location.href = res[0].url;
      });
    });
  });

  var template = $('<li><a href="" class="old-versions-download"></a> <a href="" class="old-versions-release-note">Release Notes</a></li>');
  $.getJSON('https://api.github.com/repos/OnsenUI/OnsenUI/releases', function(res) {
    var items = res.map(function(release) {
      var item = template.clone();

      item.find('.old-versions-download').attr('href', release.zipball_url).text('v' + release.tag_name);
      item.find('.old-versions-release-note').attr('href', release.html_url);

      return item;
    });

    var documentFragment = $(document.createDocumentFragment());
    items.forEach(function(item) {
      documentFragment.append(item);
    });

    $('.old-versions-list').append(documentFragment);
    $('.old-versions').show();
  }).error(function(xhr) {
    console.log(xhr.responseJSON.message);
  });
});
