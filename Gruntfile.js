module.exports = function(grunt) {
 

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'js/main.js'],
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
          banner: '/*! www.ktc.mx <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          mangle: false,
          compress:{
            drop_console: true
          }
        },
        files:[
          {
            expand: true, 
            cwd: './',
            src: ['**/*.js', '!**node_modules/**', '!**js/libs/**', '!**/Gruntfile.js'],
            dest: './_releases/production',
            ext: '.js'
          }
        ]
      },


      qa:{
        options:{
          banner: '/*! www.ktc.mx <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
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
            src: ['**/*.js', '!**node_modules/**', '!**js/libs/**', '!**/Gruntfile.js'],
            dest: './_releases/qa',
            ext: '.js'
          }
        ]
      }




    },


     htmlmin: {
      dev: { 
        options: { 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.src.html'
        }
      },
      prod: { 
        options: { 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.src.html'
        }
      }
    },



  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('prod', ['uglify:prod']);

  grunt.registerTask('qa', ['uglify:qa']);



};