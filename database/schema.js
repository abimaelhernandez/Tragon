const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  password: String
})

const vendorSchema = mongoose.Schema({
  name: String,
  category: String,
  location: {
    type:{type:String},
    coordinates:[Number,Number]
  },
  picture: String,
  expenses: Number,
  review : [{
    body: String,
    ObjectId: String,
    }]
})

exports.Users = mongoose.model('user', userSchema);
exports.Vendors = mongoose.model('vendor', vendorSchema);
