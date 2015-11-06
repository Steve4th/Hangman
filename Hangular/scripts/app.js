/// <reference path="./Game.ts" />
/// <reference path="./PhraseService.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module('hangular', []);
app.controller('footerCtrl', ['$scope', function ($scope) {
        $scope.year = new Date().getFullYear();
    }]);
app.controller('gameCtrl', ['$scope', function ($scope) {
        var wordServ = new FixedResponsePhraseService();
        var factory = new GameFactory();
        $scope.currentGame = factory.newGame(wordServ);
        $scope.letterGuess = "a";
        $scope.guessLetter = function () {
            $scope.currentGame.tryLetterForMatch($scope.letterGuess);
        };
    }]);
