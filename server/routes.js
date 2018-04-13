const {Vendors} = require('../database/schema.js');

const url = require('url');

// Search for vendors by category
exports.Search = (req, res) => {
  const {query} = req.query;
  Vendors.find({category: query})
    .exec((err, vendors) => {
      if (err) {
        console.error(err);
      } else {
        res.json(vendors);
      }
    });
};

exports.AddVendor = (req, res) => {
  const {name, category, location} = req.body;
  Vendors.create(
    {name, category, location},
    (err, vendor) => {
      if (err) {
        console.error(err);
      } else {
        res.send(vendor);
      }
    },
  );
};
// //Query to post a Review
// exports.postReview = (req, res) => {
//     review.create ({
//       expenses: req.body.expenses,
//       body: String
//     })
// }
//
// //Query to database for userReviews
// exports.getReviews = (req, res) => {
//   userReviews.find(function(err, review){
//     if(err){
//       throw(err)
//     }
//      res.status(200).json(review)
//   })
// }
