'use strict';

module.exports = function(grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var config = {
        app: 'assets',
        dist: 'public',
    };

    grunt.initConfig({
        config: config,

        watch: {
            less: {
                files: ['<%= config.app %>/less/**/*.less'],
                tasks: ['less'],
            }
        },


        // Compiles LESS to CSS and generates necessary files if requested
        less: {
            options: {
                yuicompress: true
            },
            dist: {
                options: {
                    cleancss: true,
                    report: 'gzip'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/less',
                    src: 'style.less',
                    dest: '<%= config.dist %>/css',
                    ext: '.css'
                }]
            }
        },
    });

    grunt.registerTask('default', [
        'less',
    ]);
}