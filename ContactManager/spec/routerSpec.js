describe("ContactManager.Router", function() {
    it(' router should be defined', function() {
        expect(ContactManager.Router).toBeDefined();
    });
  
  describe('  testing Backbone.Router ', function() {
    var MyRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'contacts': 'showContacts',
            'contacts/new': 'newContact',
            'contacts/edit/:id': 'editContact'
          
        },

        // route callback methods are just regular javascript functions.
        // we use spies for the following callback methods to make testing easier.
        home: jasmine.createSpy('home router action'),
        showContacts: jasmine.createSpy('showContacts router action'),

        newContact: jasmine.createSpy('newContact router action'),

        editContact: jasmine.createSpy('editContact router action')
    });

    var router = new MyRouter();

    Backbone.history.start({
        root: '/specrunner.html',
        silent: true
    });

      it('Routers provide a way to map url(/) to methods.', function() {
        router.navigate('/', true);

        expect(router.home).toHaveBeenCalled();
     });

      it('Router provide a way to map url(/contacts)  to methods.', function() {
        router.navigate('contacts', true);

        expect(router.showContacts).toHaveBeenCalled();
      });
      it('Router provide a way to map url(/contacts/new)  to methods.', function() {
        router.navigate('contacts/new', true);

        expect(router.newContact).toHaveBeenCalled();
      });
      it('Router provide a way to map url(/contacts/edit/:id)  to methods.', function() {
        router.navigate('contacts/edit/:id', true);

        expect(router.editContact).toHaveBeenCalled();
        expect(router.editContact).toHaveBeenCalledWith(':id');
       
    });
        it('The routes object can do token matching for a given url, passing the matched tokens to the mapped method.', function() {
            router.navigate('FIX ME', true);

         expect(router.search).toHaveBeenCalled();
            expect(router.search.mostRecentCall.args).toEqual(['restaurants', '1']);
        });

        it('The routes object can also do wildcard matching for a given url, passing the entire matched path to the mapped method.', function() {
               router.navigate('FIX ME', true);

            expect(router.articles).toHaveBeenCalled();
            expect(router.articles.mostRecentCall.args).toEqual(['2011/07/01/a_blog_post']);
        });

});
});