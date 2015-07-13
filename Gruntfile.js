module.exports = function(grunt) {

 
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'server/**/*.js','client/app/**/*.js']
    },

    karma: {
    	unit: {
    		configFile: 'karma.conf.js',
    	}
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
 

  grunt.registerTask('test', [
  	'jshint',
  	'karma'
  	]);

  grunt.registerTask('default', 'test');
 
};