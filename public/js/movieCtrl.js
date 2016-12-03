app.controller('MovieCtrl', function($scope, $http) {

  $scope.findMovie = function() {

    var userZip = userZip;

    $http.get('http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-12-03&zip=48084&api_key=wud3ksj4patjm64jw9srnh8a').then (function successCallback(response) {

      var movieData = response;
      console.log(movieData);


    });

  };
