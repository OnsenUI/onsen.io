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
