ContactManager.Models.Contact = Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: 'sme',
    avatar:'C:\Users\Nisum\Documents\b\img\faces\6.jpg'
     },

  initialize: function() {
    this.set('avatar', '1.jpg');
    // _.random(1, 15) + '
  }
});
