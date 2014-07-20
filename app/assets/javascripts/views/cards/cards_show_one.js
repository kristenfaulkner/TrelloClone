Trello.Views.CardsShowOne = Backbone.CompositeView.extend({
  template: JST["cards/showOne"],
  // editTemplate: JST["cards/formEdit"],
  
  // events: {
  //   'dblclick .card-with-x': "editCard"
  // },
  //
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
},

  render: function () {
    var view = this;
    var renderedContent = this.template({
      card: this.model
    });

    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  
  editCard: function() {
    
  }
});