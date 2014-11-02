BackboneOnRails.Routers.Spas = Backbone.Router.extend({

  routes: {
    '' : 'index'
  },

  initialize: function(){
    this.collection = new BackboneOnRails.Collections.Spas();
    this.collection.fetch({reset:true});
  },

  index: function(){
    new BackboneOnRails.Views.SpasIndex({collection : this.collection});
  }

});
