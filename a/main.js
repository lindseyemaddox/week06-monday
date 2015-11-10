var App = {};
App.Models = {};
App.Views = {};
App.Collections = {};

App.Router = Backbone.Router.extend({
  routes: {
    '' : 'blog'
  },
  blog: function() {
    var blogView = new App.Views.BlogView({
      collection: new App.Collections.Blog()
    });
    blogView.collection.fetch({
      success: function(collection, data, options){
        blogView.render();
        $('main').html(blogView.el);
        console.log('blog route')
      },
      error: function() {}})    
  },
});


$('document').ready(function() {
  App.router = new App.Router();
  Backbone.history.start();
})
