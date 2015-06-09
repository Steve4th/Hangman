/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe("game", function() {
    it("Should display underscore for each letter in word for a new game", function () {
        var g = new game();
        g.reset("hangman");
        expect(g.activeWord).toEqual("_______");
    });
});