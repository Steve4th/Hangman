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
            this.matchedLetters.push(lowerCaseLetterToTryForMatch);
            //TODO update active word display
            return true;
        }
        else {
            this.unmatchedLetters.push(lowerCaseLetterToTryForMatch);
            return false;
        }
    };
    return game;
})();
//# sourceMappingURL=game.js.map