Trello.Views.BoardsShowOne = Backbone.CompositeView.extend({
  template: JST["boards/showOne"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
},

  events: {
    "click button.delete-board": "deleteBoard"
  },

  deleteBoard: function(event) {
    event.preventDefault();
    this.model.destroy();
  },
  
  render: function () {
    var view = this;
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
});