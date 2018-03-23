const User = require("../database/schema.js").User;
const Vendor = require("../database/schema.js").Vendor;

const url = require('url');
const path = require('path');

//Query to post a profile
exports.createProfile = (req, res) => {
  User.create({
    Name: req.body.Name
  }, (err, user) => {
        if (err) {
          res.send(err);
        }
        res.json(user);
  })
}

//Query to post a Review
exports.postReview = (req, res) => {
    review.create ({
      expenses: req.body.expenses,
      body: String
    })
}

//Query to database for userReviews
exports.getReviews = (req, res) => {
  userReviews.find(function(err, review){
    if(err){
      throw(err)
    }
    res.status(200).json(review)
  })
}

//Query to database for the saved location´s
 exports.getLocations = (req, res) => {
   getLocations.find(function(err, location){
     if(err){
       throw (err);
     }
     res(location);
   })
 }
