
module.exports = function() {
  return function(files, metalsmith, done) {
    setImmediate(done);

    for (var path in files) {
      var file = files[path];
      file.path = path.replace(/\/index\.html$/, '/').replace(/^index\.html$/, '');
    }
  };
};
