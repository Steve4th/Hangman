var app = angular.module('hangular', []);
app.controller('footerCtrl', ['$scope', function ($scope) {
    $scope.year = new Date().getFullYear();
}]);
