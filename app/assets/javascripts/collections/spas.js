BackboneOnRails.Collections.Spas = Backbone.Collection.extend({

  model: BackboneOnRails.Models.Spa,
  url:   'api/records',

  initialize: function(){    
    this.fetch();
  }

});
