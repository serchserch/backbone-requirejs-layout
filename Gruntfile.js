module.exports = function(grunt) {
 

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      files: ['**/*.js', '!**node_modules/**', '!**js/libs/**', '!**_releases/**'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },


    uglify: {

      prod:{
        options:{
          mangle: false,
          compress:{
            drop_console: true
          }
        },
        files:[
          {
            expand: true, 
            cwd: './',
            src: ['**/*.js', '!**node_modules/**', '!**js/libs/**', '!**/Gruntfile.js', '!**_releases/**'],
            dest: './_releases/production',
            ext: '.js'
          }
        ]
      },

      qa:{
        options:{
          mangle: false,
          beauty: true,
          compress:{
            drop_console: true
          }
        },
        files:[
          {
            expand: true, 
            cwd: './',
            src: ['**/*.js', '!**node_modules/**', '!**js/libs/**', '!**/Gruntfile.js', '!**_releases/**'],
            dest: './_releases/qa',
            ext: '.js'
          }
        ]
      }


    },


    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 9090,
          base: './',
          keepalive : true
        }
      }
    },



     htmlmin: {

      prod: { 
        options: { 
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,
            cwd: './',
            src: ['**/*.html', '!**node_modules/**', '**/templates/*.html', '!**_releases/**'],
            dest: './_releases/prod',
            ext: '.html'
          }
        ]
      },

      qa: { 
        options: { 
          removeComments: false,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,
            cwd: './',
            src: ['**/*.html', '!**node_modules/**', '**/templates/*.html', '!**_releases/**'],
            dest: './_releases/qa',
            ext: '.html'
          }
        ]
      }

    },



  });



  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('prod', ['uglify:prod', 'htmlmin:prod']);
  grunt.registerTask('qa', ['uglify:qa', 'htmlmin:qa']);



};