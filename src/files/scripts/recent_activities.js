$(function() {
  // Load recent activities data from GitHub via XHR

  // Replace "loading..." place holder with actual content
  // based on the recent activities data
  new Vue({
    el: '#recent-activities-items-placeholder',
    template: '#recent-activities-items-template',
    data: {
      items: [
        {
          date: 'Today',
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
          date: '14 days ago',
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
          date: '3 weeks ago',
          title: `Website Update`,
          description: `
            <p>
              Added <a href="asdf">Component Compilation</a> section.
            </p>
          `
        }
      ]
    }
  });  
});
