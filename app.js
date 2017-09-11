/*
Require
Express, BodyParser, InstagramPosts, InstagramAnalytics.
*/
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  instagramPosts = require("instagram-posts"),
  instagramAnalytics = require("instagram-analytics");



//CONFIGURATION
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



instagramAnalytics('wingchhun').then(stats => {
  console.log(stats);
});
app.get("/", function(req, res) {


  instagramPosts('wingchhun', {
    count: 3
  }).then(posts => {

    res.render("index", {
      posts: posts
    });
  });


});



//START SERVER
app.listen(3000, function() {
  console.log("server has started!");
});
