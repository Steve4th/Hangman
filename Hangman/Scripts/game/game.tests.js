/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="game.js" />
describe("LetterCollection Tests", function () {
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
describe("Game Letter Guessing Tests", function () {
    it("Should display underscore for each letter in word for a new game", function () {
        var g = new Game("hangman");
        expect(g.activeWordDisplay).toEqual("_______");
    });
    it("Should include single matched letter in the display word", function () {
        var g = new Game("hangman");
        g.tryLetterForMatch("h");
        expect(g.activeWordDisplay).toEqual("h______");
    });
    it("Should include multiple matched letters in the display word", function () {
        var g = new Game("hangman");
        g.tryLetterForMatch("a");
        expect(g.activeWordDisplay).toEqual("_a___a_");
    });
    it("Should include matched letters in the display word", function () {
        var g = new Game("hangman");
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
    it("Should empty the matched letters collection on constructor", function () {
        var g = new Game("hangman");
        expect(g.matchedLetters.length()).toEqual(0);
    });
    it("Should empty the UNmatched letters collection on constructor", function () {
        var g = new Game("hangman");
        expect(g.unmatchedLetters.length()).toEqual(0);
    });
    it("Should return false when trying to match a letter in the active word", function () {
        var g = new Game("abc");
        expect(g.tryLetterForMatch("z")).toEqual(false);
    });
    it("Should return true when trying to match a letter in the active word", function () {
        var g = new Game("abc");
        expect(g.tryLetterForMatch("a")).toEqual(true);
    });
    it("Should return false when trying to match a letter in the active word Case insenseative", function () {
        var g = new Game("abc");
        expect(g.tryLetterForMatch("Z")).toEqual(false);
    });
    it("Should return true when trying to match a letter in the active word Case insenseative", function () {
        var g = new Game("abc");
        expect(g.tryLetterForMatch("A")).toEqual(true);
    });
    it("Should add a letter to the unmatched collection when trying to match a letter not in the active word", function () {
        var g = new Game("abc");
        var letterToTry = "z";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(false);
        expect(g.unmatchedLetters.containsLetter(letterToTry)).toEqual(true);
    });
    it("Should add a letter to the matched collection when trying to match a letter in the active word", function () {
        var g = new Game("abc");
        var letterToTry = "a";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(true);
        expect(g.matchedLetters.length()).toEqual(1);
    });
});
describe("Game Attempts Remiaining Tests", function () {
    it("Should have 5 attempts remaining at the start of a game", function () {
        var g = new Game("abc");
        expect(g.attemptsRemaining).toEqual(5);
    });
    it("Should decriment the attempts remaining when a letter does not match", function () {
        var g = new Game("abc");
        expect(g.attemptsRemaining).toEqual(5);
        var letterToTry = "x";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(false);
        expect(g.attemptsRemaining).toEqual(4);
    });
    it("should not change the attempts remaining when a letter does match", function () {
        var g = new Game("abc");
        expect(g.attemptsRemaining).toEqual(5);
        var letterToTry = "a";
        expect(g.tryLetterForMatch(letterToTry)).toEqual(true);
        expect(g.attemptsRemaining).toEqual(5);
    });
});
describe("Game Factory Tests", function () {
    it("Should return a game", function () {
        var factory = new GameFactory();
        var wordService = new FixedResponsePhraseService();
        var game = factory.NewGame(wordService);
        expect(game).not.toBeNull();
        expect(game.activeWordDisplay.length).toBeGreaterThan(0);
        expect(game.matchedLetters.length()).toEqual(0);
        expect(game.unmatchedLetters.length()).toEqual(0);
    });
});
describe("Fixed Response Phrase Service Tests", function () {
    it("Should return a Phrase from the getPhrase function", function () {
        var serv = new FixedResponsePhraseService();
        var phrase = serv.getPhrase();
        expect(phrase.length).toBeGreaterThan(0);
        expect(phrase).toEqual("hangman");
    });
});
//# sourceMappingURL=game.tests.js.map