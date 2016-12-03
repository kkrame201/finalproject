var app = angular.module('dateNightMod', []);

app.factory('yelpFactory', function($http) {
  return $http.get('/food');
})
