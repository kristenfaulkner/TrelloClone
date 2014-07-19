Trello.Views.ListsShowOne = Backbone.CompositeView.extend({
  template: JST["lists/showOne"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
},

  events: {
    "click button.delete-list": "deleteList"//,
    // "click button.add-comment": "addComment"
  },

  deleteList: function(event) {
    event.preventDefault();
    this.model.destroy();
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