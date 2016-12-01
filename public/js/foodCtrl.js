var app = angular.module('yelpMod');

app.controller('yelpCtrl', function($scope, yelpFactory) {
  yelpFactory.then(function(response) {
    $scope.restaurantName = response.data.businesses[0].name;
    $scope.restaurantReviewCount = response.data.businesses[0].review_count;
    console.log($scope.restaurant);
  });
});
