/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="game.js" />
describe("gameTests", function () {
    it("Should set the active word to the specified string on reset", function () {
        var g = new game();
        g.reset("hangman");
        console.log('ActiveWord is ' + g.activeWord);
        expect(g.activeWord).toEqual("hangman");
    });

    it("Should display underscore for each letter in word for a new game", function () {
        var g = new game();
        g.reset("hangman");
        console.log('ActiveWordDisplay is ' + g.activeWordDisplay);
        expect(g.activeWordDisplay).toEqual("______");
    });

    it("Should empty the matched letters collection on reset", function () {
        var g = new game();
        g.matchedLetters.push("a");
        g.matchedLetters.push("b");
        expect(g.matchedLetters.length).toBeGreaterThan(0);

        g.reset("hangman");
        expect(g.matchedLetters.length).toEqual(0);
    });

    it("Should empty the UNmatched letters collection on reset", function () {
        var g = new game();
        g.unmatchedLetters.push("a");
        g.unmatchedLetters.push("b");
        expect(g.unmatchedLetters.length).toBeGreaterThan(0);

        g.reset("hangman");
        expect(g.unmatchedLetters.length).toEqual(0);
    });

    it("Should return false when trying to match a letter in the active word", function () {
        var g = new game();
        g.reset("abc");
        expect(g.tryLetterForMatch("z")).toEqual(false);
    });

    it("Should return true when trying to match a letter in the active word", function () {
        var g = new game();
        g.reset("abc");
        expect(g.tryLetterForMatch("a")).toEqual(true);
    });

    it("Should return false when trying to match a letter in the active word Case insenseative", function () {
        var g = new game();
        g.reset("abc");
        expect(g.tryLetterForMatch("Z")).toEqual(false);
    });

    it("Should return true when trying to match a letter in the active word Case insenseative", function () {
        var g = new game();
        g.reset("abc");
        expect(g.tryLetterForMatch("A")).toEqual(true);
    });

    it("Should add a letter to the unmatched collection when trying to match a letter not in the active word", function () {
        var g = new game();
        g.reset("abc");
        var letterToTry = "z";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(false);
        expect(g.unmatchedLetters).toContain(letterToTry);
    });

    it("Should add a letter to the matched collection when trying to match a letter in the active word", function () {
        var g = new game();
        g.reset("abc");
        var letterToTry = "a";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(true);
        expect(g.matchedLetters).toContain(letterToTry);
    });


});