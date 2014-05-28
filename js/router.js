define([
    'jquery',
    'underscore',
    'backbone',
    'views/SplashView'
], function($, _, Backbone, SplashView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'splashView'
        }
    });

    var initialize = function() {

  
        var Rutes = new Router;

        //
        // Splash View
        //
        Rutes.on('route:splashView', function() {
            var View = new SplashView();
            View.render();

        });

        //
        // Default View
        //
        Rutes.on('route:defaultAction', function() {
        });

        Backbone.history.start();
    };


    return {
        initialize: initialize
    };

});
