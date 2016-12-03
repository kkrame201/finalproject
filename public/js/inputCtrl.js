var app = angular.module('dateNightMod');

app.controller('inputCtrl', function($scope, $http, apiFactory, $location, $timeout) {
$scope.findMovie = function(userSelection) {
  var userZip = userSelection.userZip;
  $http.get('http://data.tmsapi.com/v1.1/movies/showings?startDate=' + userSelection.movieDate + '&zip=' + userSelection.userZip + '&api_key=wud3ksj4patjm64jw9srnh8a').then (function successCallback(response) {
    var movieData = response;
      console.log(movieData);
      apiFactory.getMovieInfo(movieData);

      $timeout(function() {
        $location.path('/movie');
      }, 500);

    });
  };
});
