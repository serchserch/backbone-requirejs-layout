require.config({paths:{jquery:"libs/jquery/jquery.min",underscore:"libs/underscore.js/underscore-min",backbone:"libs/backbone.js/backbone-min",text:"libs/require-text/text.min",templates:"../templates"},shim:{backbone:{deps:["underscore","jquery"],exports:"Backbone"},underscore:{exports:"_"}}}),require(["app"],function(App){App.initialize()});