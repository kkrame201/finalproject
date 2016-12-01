var app = angular.module('yelpMod', []);

app.factory('yelpFactory', function($http) {
  return $http.get('/food');
})
