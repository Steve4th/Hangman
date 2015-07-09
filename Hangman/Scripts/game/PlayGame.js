/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
$(document).ready(function () {
    var hangmanGame = new GameViewModel();
    ko.applyBindings(hangmanGame, document.getElementById("gameContainer"));
});
var GameViewModel = (function () {
    function GameViewModel() {
        this.phraseDisplay = ko.observable("");
        this.letterGuess = ko.observable("");
        this.attemptsRemaining = ko.observable(5);
        this.startGame();
    }
    GameViewModel.prototype.startGame = function () {
        var wordServ = new FixedResponsePhraseService();
        var factory = new GameFactory();
        this.currentGame = factory.NewGame(wordServ);
        this.phraseDisplay(this.currentGame.activeWordDisplay);
        this.letterGuess("");
    };
    GameViewModel.prototype.guessLetter = function () {
        this.currentGame.tryLetterForMatch(this.letterGuess());
        this.phraseDisplay(this.currentGame.activeWordDisplay);
        this.attemptsRemaining(this.currentGame.attemptsRemaining);
    };
    return GameViewModel;
})();
//# sourceMappingURL=PlayGame.js.map