Trello.Views.ListsShowFullView = Backbone.CompositeView.extend({
  template: JST["lists/showFull"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    
    // var cardsNewView =
   //    new Trello.Views.CardsNewView({ model: this.model });
   //  this.addSubview(".add-card", cardsNewView);
   //  debugger

    this.model.cards().each(this.addCard.bind(this));
  },

    // events: {
    //   "click button.add-card" : "addCard"
    // },
    //
    // addCard: function (event) {
    //   event.preventDefault();
    //   var cardsShowOne =
    //     new Trello.Views.CardsShowOne({ model: card });
    //   this.addSubview(".cards", cardsShowOne);
    // },

    removeCard: function (card) {
      var subview = _.find(
        this.subviews(".cards"),
        function (subview) {
          return subview.model === card;
        }
      );

      this.removeSubview(".cards", subview);
  },

  render: function () {
    var view = this;
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
  
});
