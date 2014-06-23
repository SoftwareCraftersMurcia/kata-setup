var FileToTest = require('../src/FileToTest.js').FileToTest;

describe('Basic config', function() {
    beforeEach(function() {
    });

    it('tests are working', function() {
        expect(true).toBe(true);
    });

    it('classes are working', function() {
        var f = new FileToTest();
        expect(f.myFirstFunction()).toBe(true);
    });
});