const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require("../database/schema.js");
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here


//make your profile
app.post('/ProfilePage', route.createProfile);
//post a review
app.post('/reviews', route.postReview);
//get reviews
app.get('/userReviews', route.getReviews);
//get Locations
app.get('/location', route.getLocations);


module.exports = app;
