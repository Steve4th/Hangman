/// <reference path="../typings/jquery/jquery.d.ts" />

$(document).ready(function () {
    var factory = new GameFactory();
    var hangmanGame = factory.NewGame();
}); 