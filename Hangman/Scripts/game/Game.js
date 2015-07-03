/// <reference path="../typings/jasmine/jasmine.d.ts" />
var game = (function () {
    function game() {
        this.reset("");
    }
    game.prototype.resetLetterCollections = function () {
        this.matchedLetters = [];
        this.unmatchedLetters = [];
    };
    game.prototype.replaceLettersWithUnderscores = function (inputString) {
        var replacementRegEx = new RegExp('/[A-Z]');
        return inputString.replace(/[a-zA-Z]+/g, "_");
        ;
    };
    game.prototype.reset = function (newWord) {
        this.activeWord = newWord;
        this.activeWordDisplay = this.replaceLettersWithUnderscores(newWord);
        this.resetLetterCollections();
    };
    game.prototype.tryLetterForMatch = function (letterToTryForMatch) {
        var lowerCaseActiveWord = this.activeWord.toLowerCase();
        var lowerCaseLetterToTryForMatch = letterToTryForMatch.toLowerCase();
        if (lowerCaseActiveWord.indexOf(lowerCaseLetterToTryForMatch) >= 0) {
            this.addLetterToMatchedLetters(lowerCaseLetterToTryForMatch);
            //TODO update active word display
            return true;
        }
        else {
            this.addLetterToUnMatchedLetters(lowerCaseLetterToTryForMatch);
            return false;
        }
    };
    game.prototype.addLetterToUnMatchedLetters = function (letterToAdd) {
        if (this.unmatchedLetters.indexOf(letterToAdd) < 0) {
            this.unmatchedLetters.push(letterToAdd);
        }
    };
    game.prototype.addLetterToMatchedLetters = function (letterToAdd) {
        if (this.matchedLetters.indexOf(letterToAdd) < 0) {
            this.matchedLetters.push(letterToAdd);
        }
    };
    return game;
})();
//# sourceMappingURL=game.js.map