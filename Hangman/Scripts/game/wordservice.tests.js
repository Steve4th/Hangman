/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="wordservice.js" /> 
describe("WordServiceTests", function () {
    it("Should return a word from the getWord function", function () {
        var serv = new WordService();
        var word = serv.getWord();
        expect(word.length).toBeGreaterThan(0);
    });
    it("Should return a different word from the getWord function when called a second time", function () {
        var serv = new WordService();
        var wordOne = serv.getWord();
        expect(wordOne.length).toBeGreaterThan(0);
        var wordTwo = serv.getWord();
        expect(wordTwo.length).toBeGreaterThan(0);
        expect(wordOne).not.toEqual(wordTwo);
    });
});
//# sourceMappingURL=wordservice.tests.js.map