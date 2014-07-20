Trello.Views.ListsShowOne = Backbone.CompositeView.extend({
  template: JST["lists/showOne"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    this.model.cards().each(this.addCard.bind(this));
},

  events: {
    "click button.delete-list": "deleteList",
    "mouseenter .list-box" : "showButton",
    "mouseleave .list-box" : "showButton",
    "click button.add-card" : "newCardForm",
    "click button.delete-card": "deleteCard",
  },

  deleteCard: function(event) {
    var view = this;
    event.preventDefault();
    var id = $(event.currentTarget).attr('data-id');
    var card = this.model.cards().get(id);
    this.model.cards().remove(card);
  },

  removeCard: function (card) {
    var view = this;
    var subview = _.find(
      this.subviews(".cards"),
      function (subview) {
        return subview.model === card;
      }
    );
    this.removeSubview(".cards", subview);
  },

  deleteList: function(event) {
    event.preventDefault();
    this.model.destroy();
  },
  
  showButton: function() {
    this.$el.find('.add-card').toggleClass('hidden');
    this.$el.find('delete-list').toggleClass('center');
  },
  
  newCardForm: function() {
    var cardNewView = new Trello.Views.CardsNewView({ model: this.model});
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
  },

  addCard: function (card) {
    var cardsShowOne =
      new Trello.Views.CardsShowOne({ model: card });
    this.addSubview(".cards", cardsShowOne);
  },

});