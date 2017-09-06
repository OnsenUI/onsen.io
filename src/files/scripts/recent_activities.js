$(function() {
  // Key for saving "last read date" into the Local Storage
  var KEY = 'recent-activities.lastReadDate';

  // Load recent activities data from GitHub via XHR

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
      items: [
        {
          date: '2017-09-01T00:00:00+09:00',
          title: `<a href="/react/" style="color: #444;">react-onsenui</a> 1.7.0 Released`,
          description: `
            <p>
                Supported React Fiber (React 16).
                <a href="asdf">Release Note</a>
                <br>
                <code>npm install react-onsenui --save</code>
            </p>
          `
        },
        {
          date: '2017-08-14T00:00:00+09:00',
          title: `Onsen UI 2.6.0 Released`,
          description: `
            <p>
              New features are available.
              <a href="asdf">Release Note</a>
            </p>
            <ul>
              <li>Swiping tabbar</li>
              <li>Segment</li>
              <li>New color scheme for iOS</li>
            </ul>
            <p>
              <code>npm install onsenui --save</code>
            </p>
          `
        },
        {
          date: '2017-08-02T00:00:00+09:00',
          title: `Website Update`,
          description: `
            <p>
              Added <a href="asdf">Component Compilation</a> section.
            </p>
          `
        }
      ]
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
        return moment.parseZone(date).fromNow();
      },
      format: function(date) {
        return moment.parseZone(date).format('lll');
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
          if (moment.parseZone(item.date) > moment()) {
            return false;
          }
        // If the date of item is within the past 7 days
        if (moment.parseZone(item.date) > moment().subtract(7, 'day')) {
          return true;
        }
      },
      isUnread: function(item) {
        // If the date of item is after the last read date
        if (moment.parseZone(item.date) > this.lastReadDate) {
          return true;
        }
      }
    }
  });  
});
