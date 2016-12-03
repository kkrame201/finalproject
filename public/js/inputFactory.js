var app = angular.module('dateNightMod');

app.factory('apiFactory', function($http) {

  var jsonObj = {};

  var getFoodInfo = function(jsonStuff) {
    jsonObj.food = jsonStuff;
    console.log(jsonObj);
  }

  var getMovieInfo = function(jsonStuff) {
    jsonObj.movie = jsonStuff;
    console.log('Factory received movie info');
  }

  var sendJSON = function() {
    console.log('Factory sending JSON to another controller');
    return jsonObj;
  }

  return {
      getFoodInfo: getFoodInfo,
      getMovieInfo: getMovieInfo,
      sendJSON: sendJSON
  }

});
