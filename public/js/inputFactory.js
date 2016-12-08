var app = angular.module('dateNightMod');

app.factory('apiFactory', function($http) {


 function randomString(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
  }

  var jsonObj = {};
  var yelpObj = {};

  return {

    getMovieInfo: function(jsonStuff) {
      jsonObj.movie = jsonStuff;
      console.log('Factory received movie info');
    },

    sendJSON: function() {
      console.log('Factory sending JSON to another controller');
      return jsonObj;
    },

    sendYelp: function(searchterm, searchlocation) {
      yelpObj.term = searchterm;
      yelpObj.location = searchlocation;
      console.log(yelpObj);
      return yelpObj;
    },

    retrieveYelp: function(name, callback) {
         var method = 'GET';
         var url = 'https://api.yelp.com/v2/search';
         var params = {
           callback: 'angular.callbacks._0',
           location: yelpObj.location,
           oauth_consumer_key: 'Gf_5Zit2VdKjs4trQHkFAA', //Consumer Key
           oauth_token: '0hdeY89sEUBPuJcXsT6QsLqPpIC4dtnk', //Token
           oauth_signature_method: "HMAC-SHA1",
           oauth_timestamp: new Date().getTime(),
           oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
           term: yelpObj.term
         };
         var consumerSecret = '4VIZvfeZrtZFFbHgzf97y2NsnIk'; //Consumer Secret
         var tokenSecret = 'KCCjJtS_NyG1u8WKdryBKUmQ6ms'; //Token Secret
         var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {
           encodeSignature: false
         });
         params.oauth_signature = signature;
         $http.jsonp(url, {
           params: params
         }).then(function successCallback(callback) {
           console.log(callback);
         });
       }
    };

});
