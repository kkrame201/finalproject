var app = angular.module('dateNightMod', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'inputCtrl',
    templateUrl: 'views/input.html'
  })

    .when('/movie', {
      controller: 'movieCtrl',
      templateUrl: 'views/movie.html'
    })

  .when('/food', {
    controller: 'foodCtrl',
    templateUrl: 'views/food.html'
  })

  .when('/yourdate', {
    controller: 'yourDateCtrl',
    templateUrl: 'views/yourdate.html'
  })

});
