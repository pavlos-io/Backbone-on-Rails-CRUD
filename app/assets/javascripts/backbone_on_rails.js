window.BackboneOnRails = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BackboneOnRails.Routers.Spas();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  BackboneOnRails.initialize();
});
