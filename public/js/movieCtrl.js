var app = angular.module('dateNightMod');

app.controller('movieCtrl', function($scope, $http, apiFactory) {
  $scope.movieStuff = apiFactory.sendJSON();
  console.log($scope.movieStuff);
});
