/*! www.ktc.mx Backbone-require-layout 27-05-2014 */
define(["jquery","underscore","backbone","text!templates/SplashTemplate.html"],function($,_,Backbone,SplashTemplate){var HomeView=Backbone.View.extend({el:"#container",initialize:function(){var Data={hello:"Hello Word"},CompiledTemplate=_.template(SplashTemplate,Data);this.$el.append(CompiledTemplate)},events:{},render:function(){}});return HomeView});