BackboneOnRails.Views.ShowAllRecords = Backbone.View.extend({

  template: JST['spas/showAllRecords'],
  tagName: 'li',

  events:{
    'click .record'     : 'recordClicked',
    'click .btn-delete' : 'deleteRecord'
  },

  initialize: function(opt){
  },

  render: function(){
    this.$el.html(this.template({record:this.model}));
    return this;
  },

  recordClicked: function(event){
    var $record = $(event.currentTarget);
    $record.find('.btn-delete').show();

    this.$el.find('.record').removeClass('for-deletion')
    $record.addClass('for-deletion')
  },

  deleteRecord: function(){
    this.model.destroy({
      wait: true,

      error: function(model, response){
        console.log(response)
      }

    });
  }

});
