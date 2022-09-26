$(function() {
  // Key for saving "last read date" into the Local Storage
  var KEY = 'recent-activities.lastReadDate';

  var requestUrl;
  switch (location.hostname) {
    case 'onsen.io':
      // GitHub repo: OnsenUI/recent-activities
      // Branch: master
      // Path: /recent-activities-en.hjson
      requestUrl = 'https://raw.githubusercontent.com/OnsenUI/recent-activities/master/recent-activities-en.hjson';
      break;
    case 'ja.onsen.io':
      // GitHub repo: OnsenUI/recent-activities
      // Branch: master
      // Path: /recent-activities-ja.hjson
      requestUrl = 'https://raw.githubusercontent.com/OnsenUI/recent-activities/master/recent-activities-ja.hjson';
      break;
    case 's.onsen.io':
      // GitHub repo: OnsenUI/recent-activities
      // Branch: stg
      // Path: /recent-activities-en.hjson
      requestUrl = 'https://raw.githubusercontent.com/OnsenUI/recent-activities/stg/recent-activities-en.hjson';
      break;
    case 's.ja.onsen.io':
      // GitHub repo: OnsenUI/recent-activities
      // Branch: stg
      // Path: /recent-activities-ja.hjson
      requestUrl = 'https://raw.githubusercontent.com/OnsenUI/recent-activities/stg/recent-activities-ja.hjson';
      break;
    case 'localhost':
    case '127.0.0.1':
      // GitHub repo: OnsenUI/recent-activities
      // Branch: dev
      // Path: /recent-activities-en.hjson
      requestUrl = 'https://raw.githubusercontent.com/OnsenUI/recent-activities/dev/recent-activities-en.hjson';
      break;
    default:
      requestUrl = null;
  }

  // Load recent activities data from GitHub via XHR
  if (requestUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var recentActivitiesData = Hjson.parse(xhr.responseText);
        onSuccess(recentActivitiesData);
      }
      else {
        onFailure();
      }
    };
    xhr.send();
  }

  function onSuccess(recentActivitiesData) {
    // console.log(recentActivitiesData);

    // Replace "loading..." place holder with actual content
    // based on the recent activities data
    new Vue({
      el: '#recent-activities-placeholder',
      template: '#recent-activities-template',
      data: {
        lastReadDate: moment('2000-01-01T00:00:00+00:00'),
        isLocalStorageSupported: (function() {
          try {
            localStorage.setItem('test_local_storage', 'foo');
            localStorage.removeItem('test_local_storage');
            return true;
          } catch(e) {
            return false;
          }
        })(),
        items: recentActivitiesData
      },
      created: function() {
        // Read the last read date from the Local Storage
        if (this.isLocalStorageSupported) {
          var savedValue = localStorage.getItem(KEY);

          if (savedValue) {
            // Parse as a UNIX Timestamp (seconds)
            this.lastReadDate = moment.unix(savedValue);
          }
        }
      },
      methods: {
        updateLastReadDate: function() {
          // Update data
          this.lastReadDate = moment();

          // Update local storage
          if (this.isLocalStorageSupported) {
            // Save as a UNIX Timestamp (seconds)
            localStorage.setItem(KEY, this.lastReadDate.unix());
          }
        },
        fromNow: function(date) {
          return moment(date).fromNow();
        },
        format: function(date) {
          return moment(date).format('lll');
        },
        countUnreadItems: function() {
          // If Local Storage is not supported, mark all items as read
          if (!this.isLocalStorageSupported) {
            return 0;
          }

          return this.items
          .filter(this.isNew)
          .filter(this.isUnread).length;
        },
        isNew: function(item) {
          // Ignore future events
          if (moment(item.date) > moment()) {
            return false;
          }
          // If the date of item is within the past 28 days
          if (moment(item.date) > moment().subtract(28, 'day')) {
            return true;
          }
        },
        isUnread: function(item) {
          // If the date of item is after the last read date
          if (moment(item.date) > this.lastReadDate) {
            return true;
          }
        }
      }
    });
  }

  function onFailure() {
  }
});
