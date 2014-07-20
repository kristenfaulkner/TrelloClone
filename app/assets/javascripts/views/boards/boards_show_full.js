Trello.Views.BoardsShowFullView = Backbone.CompositeView.extend({
  template: JST["boards/showFull"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList);
    
    var listsNewView =
      new Trello.Views.ListsNewView({ model: this.model });
    this.addSubview(".lists-new", listsNewView);

    this.model.lists().each(this.addList.bind(this));
  },

  addList: function (list) {
    var listsShowOne =
      new Trello.Views.ListsShowOne({ model: list });
    this.addSubview(".lists", listsShowOne);
  },

  removeList: function (list) {
    var subview = _.find(
      this.subviews(".lists"),
      function (subview) {
        return subview.model === list;
      }
    );

    this.removeSubview(".lists", subview);
},

  render: function () {
    var view = this;
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});


