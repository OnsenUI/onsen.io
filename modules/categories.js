/**
 * A metalsmith plugin to create category pages.
 *
 * @return {Function}
 */
function plugin(opts) {
  /**
   * Holds a mapping of tag names to an array of files with that tag.
   * @type {Object}
   */
  var categoryList = [];

  opts = opts || {};
  opts.path = opts.path || 'categories/:category/index.html';
  opts.template = opts.template || 'partials/tag.hbt';
  opts.handle = opts.handle || 'category';

  return function(files, metalsmith, done) {
    /**
     * Get a safe category
     * @param {string} a category name
     * @return {string} safe category
     */
    function safeCategory(category) {
      return category.replace(/ /g, '-');
    }

    function getFilePath(path, category) {
      return path
        .replace(/:category/g, safeCategory(category));
    }

    function getDeepValue(obj, path) {
      for (var i = 0, path = path.split('.'), len = path.length; i<len; i++) {
        obj = obj[path[i]];
      };
      return obj;
    }

    // Find all tags and their associated files.
    // Using a for-loop so we don't incur the cost of creating a large array
    // of file names that we use to loop over the files object.
    for (var fileName in files) {
      var data = files[fileName];

      if (!data) {
        continue;
      }

      var category = data[opts.handle];

      if (category) {
        try {
          categoryList[category].push(fileName);
        }
        catch (e) {
          categoryList[category] = [fileName];
        }
      }
    }

    for (var category in categoryList) {
      var posts = categoryList[category].map(function(fileName) {
        return files[fileName];
      });

      var page = {
        contents: '',
        category: category,
        posts: posts.reverse(),
        isCategory: true
      };

      files[getFilePath(opts.path, category)] = page;
    }

    // Add empty pages for categories defined in metadata but with no articles.
    for (var category in metalsmith.metadata().env.categories) {
     var path = getFilePath(opts.path, category);

      if (!files.hasOwnProperty(path)) {
        var page = {
          contents: '',
          category: category,
          posts: [],
          isCategory: true
        };

        files[path] = page;
      }
    }

    done();
  };
}

/**
 * Expose `plugin`.
 */
module.exports = plugin;
