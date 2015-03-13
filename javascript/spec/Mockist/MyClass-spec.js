var MyClass = require('../../src/Mockist/MyClass.js');

describe('Basic config', function () {

    beforeEach(function () {
    });

    it('mocks', function () {
        var collaborator = jasmine.createSpyObj('Collaborator', ['collaborate']);
        var myClassObject = new MyClass(collaborator);

        myClassObject.run();

        expect(collaborator.collaborate).toHaveBeenCalled();
    });

    it('stubs', function () {
        var expectedResponse = 'collaborator response';
        var collaborator = {
            collaborate: null
        };
        spyOn(collaborator, 'collaborate').and.returnValues(expectedResponse);
        var myClassObject = new MyClass(collaborator);

        var response = myClassObject.run();

        expect(response).toBe(expectedResponse);
        //expect(collaborator.collaborate).toHaveBeenCalled();
    });
})
;
