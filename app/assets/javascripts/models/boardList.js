Trello.Models.BoardList = Backbone.Model.extend({
  urlRoot: "api/lists",
  

  cards: function () {
    this._cards = this._cards ||
      new Trello.Collections.Cards([], { list: this });
    return this._cards;
  },
  
  parse: function (payload) {
    if (payload.cards) {
      this.cards().set(payload.cards, { parse: true });
      delete payload.cards;
    }

    return payload;
  }
  
});
