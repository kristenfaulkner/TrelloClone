Trello.Models.BoardList = Backbone.Model.extend({
  urlRoot: "api/lists"
});


// cards: function () {
//   this._cards = this._cards ||
//     new Trello.Collections.ListCards([], { list: this });
//   return this._cards;
// },
//
// parse: function (payload) {
//   if (payload.comments) {
//     this.comments().set(payload.comments, { parse: true });
//     delete payload.comments;
//   }
//
//   return payload;
// }