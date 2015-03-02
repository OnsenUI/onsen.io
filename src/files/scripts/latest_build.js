(function() {
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
})();
