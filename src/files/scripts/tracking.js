$(function() {
  $('[data-track-event]').click(function() {
    var eventName = '' + $(this).data('track-event');

    if (eventName.length > 0) {
      ga('send', 'event', 'website', eventName);
    }
  });
});
