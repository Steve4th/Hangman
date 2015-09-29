/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module('hangular', []);
app.controller('footerCtrl', ['$scope', function ($scope) {
        $scope.year = new Date().getFullYear();
    }]);
//# sourceMappingURL=App.js.map