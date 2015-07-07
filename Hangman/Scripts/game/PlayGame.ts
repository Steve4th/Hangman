/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

$(document).ready(function () {
    var wordServ = new FixedResponseWordService();
    var factory = new GameFactory();
    var hangmanGame = factory.NewGame(wordServ);
    ko.applyBindings(hangmanGame, document.getElementById("gameContainer"));
}); 


class GameViewModel {
     public wordDisplay = ko.observable("");

    
}