Trello.Views.ListsShowOne = Backbone.CompositeView.extend({
  template: JST["lists/showOne"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
},

  events: {
    "click button.delete-list": "deleteList",
    "mouseenter .list-box" : "showButton",
    "mouseleave .list-box" : "showButton",
    "click button.add-card" : "newCardForm",
  },


  deleteList: function(event) {
    event.preventDefault();
    this.model.destroy();
  },
  
  showButton: function() {
    this.$el.find('.add-card').toggleClass('hidden');
  },
  
  newCardForm: function() {
    var cardNewView = new Trello.Views.CardsNewView({ model: this.model });
    this.$el.append(cardNewView.render().$el);
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