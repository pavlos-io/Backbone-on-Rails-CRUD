BackboneOnRails.Views.CreateRecord = Backbone.View.extend({

  template: JST['spas/createRecord'],

  events: {
    'submit .create-form' : 'createNewRecord'
  },

  initialize: function(){
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createNewRecord: function(event){
    event.preventDefault();
    
    this.collection.create({
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      age: $('#age').val()
    });
  }

});
