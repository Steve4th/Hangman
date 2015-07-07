var LetterCollection = (function () {
    function LetterCollection() {
        this.letters = [];
    }
    LetterCollection.prototype.addLetter = function (letterToAdd) {
        if (this.containsLetter(letterToAdd) === false) {
            this.letters.push(letterToAdd);
        }
    };
    LetterCollection.prototype.containsLetter = function (letterToTest) {
        return this.letters.indexOf(letterToTest) >= 0;
    };
    LetterCollection.prototype.length = function () {
        if (this.letters) {
            return this.letters.length;
        }
        else {
            return 0;
        }
    };
    return LetterCollection;
})();
var Game = (function () {
    function Game(newWord) {
        this.reset(newWord);
    }
    Game.prototype.resetLetterCollections = function () {
        this.matchedLetters = new LetterCollection();
        this.unmatchedLetters = new LetterCollection();
    };
    Game.prototype.formatDisplayedWord = function () {
        var displayWord = "";
        for (var i = 0; i < this.activeWord.length; i++) {
            var letterToCheck = this.activeWord[i];
            if (this.matchedLetters.containsLetter(letterToCheck)) {
                displayWord += letterToCheck;
            }
            else {
                displayWord += "_";
            }
        }
        this.activeWordDisplay = displayWord;
    };
    Game.prototype.reset = function (newWord) {
        this.resetLetterCollections();
        this.activeWord = newWord;
        this.formatDisplayedWord();
    };
    Game.prototype.tryLetterForMatch = function (letterToTryForMatch) {
        var lowerCaseActiveWord = this.activeWord.toLowerCase();
        var lowerCaseLetterToTryForMatch = letterToTryForMatch.toLowerCase();
        if (lowerCaseActiveWord.indexOf(lowerCaseLetterToTryForMatch) >= 0) {
            this.matchedLetters.addLetter(lowerCaseLetterToTryForMatch);
            this.formatDisplayedWord();
            return true;
        }
        else {
            this.unmatchedLetters.addLetter(lowerCaseLetterToTryForMatch);
            return false;
        }
    };
    return Game;
})();
var GameFactory = (function () {
    function GameFactory() {
    }
    GameFactory.prototype.NewGame = function (wordServ) {
        var wordToGuess = wordServ.getWord();
        var game = new Game(wordToGuess);
        return game;
    };
    return GameFactory;
})();
var FixedResponseWordService = (function () {
    function FixedResponseWordService() {
    }
    FixedResponseWordService.prototype.getWord = function () {
        return "hangman";
    };
    return FixedResponseWordService;
})();
var AjaxWordService = (function () {
    function AjaxWordService() {
    }
    AjaxWordService.prototype.getWord = function () {
        return "TODO Get Word from Ajax";
    };
    return AjaxWordService;
})();
//# sourceMappingURL=game.js.map