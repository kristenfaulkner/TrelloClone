Trello.Views.CardsShowOne = Backbone.CompositeView.extend({
  template: JST["cards/showOne"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
},

  events: {
    "click button.delete-card": "deleteCard"
  },

  deleteCard: function(event) {
    event.preventDefault();
    this.model.destroy();
  },
  
  render: function () {
    var view = this;
    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});