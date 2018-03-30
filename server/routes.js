const Users = require("../database/schema.js").Users;
const Vendors = require("../database/schema.js").Vendors;

const url = require('url');
const path = require('path');

//Search for vendors by category
exports.Search = (req, res) => {
  let query = req.query.query;

  Vendors.find({category: query}).exec((err, vendors) => {
    if (err) {
      console.error(err)
    } else {
      res.json(vendors)
    }
  })
}

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

//Query to profile for data look up
exports.getProfile = (req, res) => {
  let id = req.query.id;

  Vendors.findOne({_id : id}).exec((err, vendor) => {
    if (err) {
      console.error(err)
    } else {
      res.json(vendor)
    }
  })
}
