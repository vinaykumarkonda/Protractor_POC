module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "./protractor.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            },
        },

        teamcity: {
            options: {
                // Task-specific options go here.
                suppressGruntLog: true,
                status: {
                    warning: 'WARNING',
                    failure: 'FAILURE',
                    error: 'ERROR'
                },
            },
            all: {
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-teamcity');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['protractor']);

};