BackboneOnRails.Views.SpasIndex = Backbone.View.extend({

  el: '.main-container',
  template: JST['spas/index'],

  initialize: function(options){
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function(){
    console.log(this.collection)
    this.$el.html(this.template({records : this.collection}));
    return this;
  }

});
