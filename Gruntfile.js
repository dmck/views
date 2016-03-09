module.exports = function(grunt) {

grunt.initConfig({
  // compile 'bootrap'
  hub: {
    all: {
      src: ['_bootstrap/Gruntfile.js'],
      tasks: ['default'],
    },
  },
  // copy compiled 'bootstrap' to 'jekyll-site'
  copy: {
    bootstrap: {
	    expand: true,
	    cwd: '_bootstrap/dist/css/',
	    src: '**',
	    dest: 'css/',
    },
  },
  // compile jekyll-site to 'dist'
  shell: {
      build: {
          command: 'jekyll build',
      },
      serve: {
          command: 'jekyll serve',
      },
  },
});

  grunt.loadNpmTasks('grunt-hub');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  // compile bootstrap, copy, compile jekyll
  grunt.registerTask('default', ['hub', 'copy:bootstrap', 'shell']);

};	