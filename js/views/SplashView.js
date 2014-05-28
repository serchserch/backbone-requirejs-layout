define(['jquery',
    'underscore',
    'backbone',
    'text!templates/SplashTemplate.html'
], function($, _, Backbone, SplashTemplate) {

    var HomeView = Backbone.View.extend({
        el: '#container',
        initialize: function() {
            var Data = {
                hello: 'Hello Word'
            };
            var CompiledTemplate = _.template(SplashTemplate, Data);
            this.$el.append(CompiledTemplate);
        },
        events: {
        },
        render: function() {
        },
    });

    return HomeView;

});
