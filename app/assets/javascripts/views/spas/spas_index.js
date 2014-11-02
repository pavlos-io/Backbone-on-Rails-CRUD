BackboneOnRails.Views.SpasIndex = Backbone.View.extend({

  el: '.main',
  showAllRecordsView: null,
  createRecordView: null,

  events: {
    'click .btn-all'    : 'showAllRecords',
    'click .btn-create' : 'createRecord'
  },

  initialize: function(){
    this.createRecordView = new BackboneOnRails.Views.CreateRecord({
      el : $('.spa-container'),
      collection : this.collection
    });

    this.listenTo(this.collection, 'add destroy', this.showAllRecords);
  },

  showAllRecords: function(){
    console.log('showAllRecords')
    var fragment = document.createDocumentFragment();
    _.each(this.collection.models, function(record){
      var tmpView = this.showAllRecordsView = new BackboneOnRails.Views.ShowAllRecords({model: record});
      $(fragment).append(tmpView.render().el);
    },this);

    this.$el.find('.spa-container').html(fragment)
  },

  createRecord: function(){
    this.createRecordView.render();
  }

});
