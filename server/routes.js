const {Vendors} = require('../database/schema.js');

// Search for vendors by category
exports.Search = (req, res) => {
  const {query} = req.query;
  Vendors.find({category: query}).exec((err, vendors) => {
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
