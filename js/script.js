var restaurant = "";

$.get("/food", function(data) {
  restaurant = data;
  $('#randomRestaurant').text(restaurant);
});
