App.Collections.Blog = Backbone.Collection.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/postsoflindsey',
  model: App.Models.Blog
});
