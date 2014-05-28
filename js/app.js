define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router) {

    var initialize = function() {
        Router.initialize();
    };
    
    return {
        initialize: initialize
    };
    
});

/**
 * ENV dev
 * @param {type} param
 * @returns {undefined}
 */
function c(param) {
    console.log(param);
}

