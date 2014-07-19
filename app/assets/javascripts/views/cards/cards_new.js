Trello.Views.CardsNewView = Backbone.View.extend({
  template: JST["cards/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event) {
    var cardView = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newCard = new Trello.Models.Card(params["card"]);
    newCard.set('list_id', this.model.get('id'));
    newCard.save({}, {
      success: function () {
        cardView.model.cards().add(newCard);
      }
    });
  }
});