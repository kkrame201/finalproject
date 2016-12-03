var app = angular.module('dateNightMod')


app.controller('movieCtrl', function($scope, $http) {

  $scope.findMovie = function(userZip, movieDate) {

    var twenty = 20;
    var movieDateVal = twenty + movieDate;
    var userZip = userZip;
    console.log(userZip);
    console.log(movieDate);

    $http.get('http://data.tmsapi.com/v1.1/movies/showings?startDate=' + movieDateVal + '&zip=' + userZip + '&api_key=wud3ksj4patjm64jw9srnh8a').then (function successCallback(response) {

      var movieData = response;
      console.log(movieData);

    });

  };

});
