Trello.Views.CardsNewView = Backbone.CompositeView.extend({
  template: JST["cards/new"],
  // checkItemTemplate: JST["cards/checklistItem"],

  events: {
    "submit form": "submit"
  //   "click button.add-card-submit": "submit",
  //   "click button.add-check-item" : "addCheckRow"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  // addCheckRow: function(event) {
  //   event.preventDefault();
  //   var view = this;
  //   debugger
  //   var newItem = this.checkItemTemplate();
  //   this.$('.add-check-item').append("hello");
  // },
  //
  
  submit: function (event) {
    var cardView = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newCard = new Trello.Models.Card(params["card"]);
    newCard.set('list_id', this.model.get('id'));
    newCard.save({}, {
      success: function () {
        cardView.model.cards().add(newCard);
        //close the modal
      }
    });
  }
});