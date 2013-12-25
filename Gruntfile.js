module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  var gruntConfig = require('./grunt-config.json');
  grunt.initConfig(gruntConfig);
  grunt.registerTask('css', ["compass:prod"]);
  grunt.registerTask('default', Object.keys(gruntConfig).join(' '));
};
