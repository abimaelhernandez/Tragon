const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const route = require("./routes");
const mongoose = require('mongoose');

const mongo = require('../database/config');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here
//catch-all
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//make your profile
app.post('/ProfilePage', route.createProfile);
//post a review
app.post('/reviews', route.postReview);
//get reviews
app.get('/userReviews', route.getReviews);
//get Locations
app.get('/location', route.getLocations);


module.exports = app;
