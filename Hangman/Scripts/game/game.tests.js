/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="game.js" />
describe("letterCollectionTests", function () {
    it("Should not add a duplicate letter into the letters collection", function () {
        var collection = new LetterCollection();
        expect(collection.length()).toEqual(0);
        var letterToTry = "a";
        collection.addLetter(letterToTry);
        expect(collection.length()).toEqual(1);
        collection.addLetter(letterToTry);
        expect(collection.length()).toEqual(1);
    });
});
describe("gameTests", function () {
    it("Should display underscore for each letter in word for a new game", function () {
        var g = new Game();
        g.reset("hangman");
        expect(g.activeWordDisplay).toEqual("_______");
    });
    it("Should include single matched letter in the display word", function () {
        var g = new Game();
        g.reset("hangman");
        g.tryLetterForMatch("h");
        expect(g.activeWordDisplay).toEqual("h______");
    });
    it("Should include multiple matched letters in the display word", function () {
        var g = new Game();
        g.reset("hangman");
        g.tryLetterForMatch("a");
        expect(g.activeWordDisplay).toEqual("_a___a_");
    });
    it("Should include matched letters in the display word", function () {
        var g = new Game();
        g.reset("hangman");
        g.tryLetterForMatch("a");
        expect(g.activeWordDisplay).toEqual("_a___a_");
        g.tryLetterForMatch("n");
        expect(g.activeWordDisplay).toEqual("_an__an");
        g.tryLetterForMatch("m");
        expect(g.activeWordDisplay).toEqual("_an_man");
        g.tryLetterForMatch("h");
        expect(g.activeWordDisplay).toEqual("han_man");
        g.tryLetterForMatch("g");
        expect(g.activeWordDisplay).toEqual("hangman");
    });
    it("Should empty the matched letters collection on reset", function () {
        var g = new Game();
        g.matchedLetters.addLetter("a");
        g.matchedLetters.addLetter("b");
        expect(g.matchedLetters.length()).toBeGreaterThan(0);
        g.reset("hangman");
        expect(g.matchedLetters.length()).toEqual(0);
    });
    it("Should empty the UNmatched letters collection on reset", function () {
        var g = new Game();
        g.unmatchedLetters.addLetter("a");
        g.unmatchedLetters.addLetter("b");
        expect(g.unmatchedLetters.length()).toBeGreaterThan(0);
        g.reset("hangman");
        expect(g.unmatchedLetters.length()).toEqual(0);
    });
    it("Should return false when trying to match a letter in the active word", function () {
        var g = new Game();
        g.reset("abc");
        expect(g.tryLetterForMatch("z")).toEqual(false);
    });
    it("Should return true when trying to match a letter in the active word", function () {
        var g = new Game();
        g.reset("abc");
        expect(g.tryLetterForMatch("a")).toEqual(true);
    });
    it("Should return false when trying to match a letter in the active word Case insenseative", function () {
        var g = new Game();
        g.reset("abc");
        expect(g.tryLetterForMatch("Z")).toEqual(false);
    });
    it("Should return true when trying to match a letter in the active word Case insenseative", function () {
        var g = new Game();
        g.reset("abc");
        expect(g.tryLetterForMatch("A")).toEqual(true);
    });
    it("Should add a letter to the unmatched collection when trying to match a letter not in the active word", function () {
        var g = new Game();
        g.reset("abc");
        var letterToTry = "z";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(false);
        expect(g.unmatchedLetters.containsLetter(letterToTry)).toEqual(true);
    });
    it("Should add a letter to the matched collection when trying to match a letter in the active word", function () {
        var g = new Game();
        g.reset("abc");
        var letterToTry = "a";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(true);
        expect(g.matchedLetters.length()).toEqual(1);
    });
});
//# sourceMappingURL=game.tests.js.map