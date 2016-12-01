var app = angular.module('weatherMod', []);

app.controller('weatherCtrl', function($http, $scope) {

  $scope.findWeather = function(userCity) {

    

      $http({
        method:'GET',
        url: 'http://api.yelp.com/v2/searchterm=donut&location=detroit',
      }).then(function(response){
        console.log(response);
      });

     //+ '=' + userCity + '.json')
    //.then(function successCallback(response) {
    //  console.log(response)
      // var weatherData = response;
      // console.log(weatherData.data.current_observation);
      //
      // $scope.tempF = weatherData.data.current_observation.temp_f;
      // $scope.weather = weatherData.data.current_observation.weather;
      // $scope.windspeed = weatherData.data.current_observation.wind_mph;


  //  });

  }

});
