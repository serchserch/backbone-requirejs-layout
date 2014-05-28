require.config({
    paths: {
        jquery: 'libs/jquery/jquery.min',
        underscore: 'libs/underscore.js/underscore-min',
        backbone: 'libs/backbone.js/backbone-min',
        text: 'libs/require-text/text.min',
        templates: '../templates'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

require([
    // Load our app module and pass it to our definition function
    'app'
], function(App) {
    // The app dependency is passed in as "App
    App.initialize();
});