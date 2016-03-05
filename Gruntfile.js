module.exports = function(grunt) {

grunt.initConfig({
	// compile 'bootrap'
    hub: {
      all: {
        src: ['bootstrap/Gruntfile.js'],
        tasks: ['default'],
      },
    },
    // copy compiled 'bootstrap' to 'jekyll-site'
    copy: {
      bootstrap: {
		expand: true,
		cwd: 'bootstrap/dist',
		src: '**',
		dest: 'jekyll-site/',
	  },
    },
    // compile jekyll-site to 'dist'
    shell: {
        target: {
            command: 'jekyll build --verbose -s, --source jekyll-site -d dist',
        },
    },

});

  grunt.loadNpmTasks('grunt-hub');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  // compile bootstrap, copy, compile jekyll
  grunt.registerTask('default', ['hub', 'copy:bootstrap', 'shell']);

};	