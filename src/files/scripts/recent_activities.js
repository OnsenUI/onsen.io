$(function() {
  // Load recent activities data from GitHub via XHR

  // Replace "loading..." place holder with actual content
  // based on the recent activities data
  new Vue({
    el: '#recent-activities-placeholder',
    template: '#recent-activities-template',
    data: {
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
    methods: {
      fromNow: function(date) {
        return moment.parseZone(date).fromNow();
      },
      toReadable: function(date) {
        return moment.parseZone(date).format('lll');
      },
    }
  });  
});
