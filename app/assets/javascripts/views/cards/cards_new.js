Trello.Views.CardsNewView = Backbone.CompositeView.extend({
  template: JST["cards/form"],
  checkItemTemplate: JST["cards/checklistItem"],
  // checkItemTemplate: JST["cards/checklistItem"],

  events: {
    "submit form": "submit",
    "click #addMoreChecks" : "addChecks"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  addChecks: function(event) {
    event.preventDefault();
    var view = this;
    var newItem = this.checkItemTemplate();
    this.$('#card-checklist').append(newItem);
  },


  submit: function (event) {
    event.preventDefault();
    var cardView = this;
    var params = $(event.currentTarget).serializeJSON();
    var newCard = new Trello.Models.Card(params["card"]);
    newCard.set('list_id', cardView.model.get('id'));
    newCard.save({}, {
      success: function () {
        cardView.model.cards().add(newCard);
        cardView.$('#myModal').modal('hide');
        $('.modal-backdrop').remove();
      }
    });
  }
});