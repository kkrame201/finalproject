var app = angular.module('yelpSearch', []);

app.controller('foodCtrl', function($http, $scope) {

  $scope.findFood = function(userZip) {

    var userZip = userZip;

    $scope.url="https://api.yelp.com/v3/businesses/search";
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
