// Request API access: http://www.yelp.com/developers/getting_started/api_access
var express = require('express');
var app = express();

var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'Gf_5Zit2VdKjs4trQHkFAA',
  consumer_secret: '4VIZvfeZrtZFFbHgzf97y2NsnIk',
  token: '0hdeY89sEUBPuJcXsT6QsLqPpIC4dtnk',
  token_secret: 'KCCjJtS_NyG1u8WKdryBKUmQ6ms'
});

var ourData;

yelp.search({ term: 'taco', location: 'Detroit' })
.then(function (data) {
  // console.log(data);
  
  ourData = data;
})
.catch(function (err) {
  console.error(err);
});
// See http://www.yelp.com/developers/documentation/v2/search_api
app.get('/food', function(req, res){
  res.send(ourData);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
});

app.use(express.static(__dirname + '/public'));
