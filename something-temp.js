var app = angular.module('weatherMod', []);

app.controller('weatherCtrl', function($http, $scope) {

  $scope.findWeather = function(userCity) {

    var userState = userState;
    var userCity = userCity;
    //http://api.fandango.com/v1/?op=theatersbypostalcodesearch&postalcode=94105&apikey=1234abcd5678efgh1235813&sig=9a2a8a9c7cfd5fc050281bb52e27802576d3c4e5449a000d27503ae2645a7b40

    //$http.get('https://api.fandango.com/v1/?op=moviesbypostalcodesearch&postalcode=94105&apikey=ha224zkt9qkf3qrumthe4da8&sig=d581d4bb5e30fba59ba11451bf525176cfaa8deec9051d346dd49d39203b2f1e')
    $scope.url="https://api.fandango.com/v1/?op=moviesbypostalcodesearch&postalcode=94105&apikey=ha224zkt9qkf3qrumthe4da8&sig=d581d4bb5e30fba59ba11451bf525176cfaa8deec9051d346dd49d39203b2f1e";
      $http({
        method:'GET',
        url: $scope.url,
        params:{
          format: 'xml',
          name: 'Super Hero',
          callback: 'JSON_CALLBACK'
        }
      }).then(function(response){
        console.log(response.data);
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

  $scope.searchGify = function(userSearch) {

    var ourSearch = userSearch;

    $http.get('http://api.giphy.com/v1/gifs/search?q=' + ourSearch + '&api_key=dc6zaTOxFJmzC').then(function successCallback(response) {

      $scope.ourGify = response;
      console.log($scope.ourGify.data.data);
      $scope.funTimes = $scope.ourGify.data.data;

    })


  }



})
