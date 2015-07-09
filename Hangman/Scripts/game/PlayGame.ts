/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

$(document).ready(function () {
    var hangmanGame = new GameViewModel();
    ko.applyBindings(hangmanGame, document.getElementById("gameContainer"));
}); 


class GameViewModel {
    private currentGame: Game;

    constructor() {
        this.startGame();
    }

    private startGame() {
        var wordServ = new FixedResponsePhraseService();
        var factory = new GameFactory();
        this.currentGame = factory.NewGame(wordServ);
        
        this.phraseDisplay(this.currentGame.activeWordDisplay);
        this.letterGuess("");
    }

    public phraseDisplay = ko.observable("");
    public letterGuess = ko.observable("");

    public guessLetter() {
        this.currentGame.tryLetterForMatch(this.letterGuess());
        this.phraseDisplay(this.currentGame.activeWordDisplay);
    }
}