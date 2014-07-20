Trello.Views.BoardsNewView = Backbone.View.extend({
  template: JST["boards/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON();
    var newBoard = new Trello.Models.Board(params["board"]);

    newBoard.save({}, {
      success: function () {
        Trello.Collections.boards.add(newBoard);
        var path = "#/boards/" + newBoard.get('id');
        Backbone.history.navigate(path, { trigger: true });
      }
    });
  }
});