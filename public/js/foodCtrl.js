var app = angular.module('dateNightMod');

app.controller('foodCtrl', function($scope, $http, $timeout, apiFactory) {

  var foodStuff;

  $scope.sendFoodStuff = function(searchterm, searchZip) {
    console.log('sending food stuff done ' + searchterm + ' ' + searchZip);
    apiFactory.sendYelp(searchterm, searchZip);


    $timeout(function() {
      foodStuff = apiFactory.retrieveYelp();
      $scope.restaurantSparklePony = foodStuff.data.businesses[0].name;
    }, 1000);

  };



});

  // apiFactory.getFoodInfo().then(function successCallback(response) {
  //     foodStuff = response;
  // });
  //
  // console.log(foodStuff);
  // $scope.foodName = foodStuff.food.data.businesses[0].name;
  // $scope.foodPhone = foodStuff.food.data.businesses[0].display_phone;
  // $scope.foodRating = foodStuff.food.data.businesses[0].rating;
  // $scope.foodClosed = foodStuff.food.data.businesses[0].is_closed;
  // yelpFactory.then(function(response) {
  //   $scope.restaurantName = response.data.businesses[0].name;
  //   $scope.restaurantReviewCount = response.data.businesses[0].review_count;
  //   console.log($scope.restaurant);
  // });
