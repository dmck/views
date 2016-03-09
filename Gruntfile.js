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
	    cwd: '_bootstrap/dist',
	    src: '**',
	    dest: '/',
    },
  },
  // compile jekyll-site to 'dist'
  shell: {
      build: {
          command: 'jekyll build --verbose',
      },
  },
  'http-server': {
    dev: {
      root: '_site',
      port: '80',
      host: '192.168.1.4',
    }
  }
});

  grunt.loadNpmTasks('grunt-hub');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-http-server');

  // compile bootstrap, copy, compile jekyll
  grunt.registerTask('default', ['hub', 'copy:bootstrap', 'shell', 'http-server']);

};	