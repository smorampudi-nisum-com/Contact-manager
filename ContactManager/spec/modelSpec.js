
describe('ContactManager.Models.Contact', function() {
    it(' model should be defined', function() {
        expect(ContactManager.Models.Contact).toBeDefined();
    });

    it(' ep instantiates the model', function() {
        var contact = new ContactManager.Models.Contact();
        expect(contact).not.toBeNull();
    });
    beforeEach(function() {
        this.contact = new ContactManager.Models.Contact();
    });

    
    describe('model has set to default values', function() {
        it('check the default value for the .name attribute', function() {
            expect(this.contact.get('name')).toBeNull();
        });

        it('check the default value for the .tel attribute', function() {
            expect(this.contact.get('tel')).toBeNull();
        });
        it('check the default value for the .email attribute', function() {
            expect(this.contact.get('email')).toBeNull();
        });
        it('the default value is sme for the .email attribute', function(){
            expect(this.contact.get('email')).toBeTruthy();
        })
         
         it('check the default value is already set this test case fails for the .image attribute', function() {
            expect(this.contact.get('avatar')).toBeNull();
         });
         it('check the default value for the .image attribute used toBeTruthy', function() {
            expect(this.contact.get('avatar')).toBeTruthy();
         });
        it('set the passed attributes on the model instance when created.', function() {
            var contact = new ContactManager.Models.Contact({
                name:"sam",
                tel:"201-565-5963",
                email:"sme@gmail.com",
                avatar:"1.jpg"
            });
            expect(contact.get('name')).toBe('sam');
            expect(contact.get('tel')).toBe('201-565-5963');
            expect(contact.get('email')).toBe('sme@gmail.com');
            expect(contact.get('avatar')).toBe('1.jpg');
        });
       
    });
    it('initialize function in the model  to be instantiated ',function(){
        expect(this.contact.initialize).toBeDefined();
    })
    it("will set the image to an image defined in the modal once it is instantiated", function() {
        this.contact.initialize();
        this.contact.set('avatar','1.jpg');
        expect(this.contact.get('avatar')).toBeDefined();
        expect(this.contact.get('avatar')).toBe('1.jpg');
      });
  
});
describe("Tests for a app.js", function() {
    
       it('ContactManager should be defined', function() {
        
           expect(window.ContactManager).toBeDefined();
         
       });
       describe("Test case 1 for router method", function() {
        
           it('check whether there is start method in router', function() {
            
               expect(window.ContactManager.start).toBeDefined();
             
           });
        
         });
    
     });