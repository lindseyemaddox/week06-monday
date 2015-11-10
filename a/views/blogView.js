App.Views.BlogView = Backbone.View.extend({
  template: _.template($('#blogTemplate').html()),
  render: function() {
    this.$el.html(this.template());
    console.log('rendered the blog view');
  },
  events: {
    'click #blogSubmit'   : 'handleClick'
  },
  handleClick: function(event) {
      var blogTitle = $('#blogTitle').val();
      var blogInput = $('#blogInput').val();
      this.collection.create({
        blog: {
          body: blog
        }
      });
      console.log(this.collection);

  }
});




  // initialize: function() {
  //   this.listenTo(this.collection, 'sync', this.render);
  // }

  // render: function() {
  //   console.log('called render');
  //   this.$el.html(this.template(
  //     {tweets: this.collection.toJSON()})
  // );
  //   return this;
  // }
