var app = angular.module('dateNightMod');

app.controller('foodCtrl', function($scope, $http, apiFactory) {

  var foodStuff;

  apiFactory.getFoodInfo().then(function successCallback(response) {
      foodStuff = response;
  });
  console.log(foodStuff);
  $scope.foodName = foodStuff.food.data.businesses[0].name;
  $scope.foodPhone = foodStuff.food.data.businesses[0].display_phone;
  $scope.foodRating = foodStuff.food.data.businesses[0].rating;
  $scope.foodClosed = foodStuff.food.data.businesses[0].is_closed;
  // yelpFactory.then(function(response) {
  //   $scope.restaurantName = response.data.businesses[0].name;
  //   $scope.restaurantReviewCount = response.data.businesses[0].review_count;
  //   console.log($scope.restaurant);
  // });
});
