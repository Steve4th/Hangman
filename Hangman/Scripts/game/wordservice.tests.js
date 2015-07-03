/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="wordservice.js" /> 
describe("WordServiceTests", function () {
    it("Should return a word from the getWord function", function () {
        var serv = new WordService();
        var word = serv.getWord();
        expect(word.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=wordservice.tests.js.map