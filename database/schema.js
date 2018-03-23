const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  Name: String,
  Password: String
})

const vendorSchema = mongoose.Schema({
  Name: String,
  category: String,
  location: {
    type:{type:String},
    coordinates:[Number,Number]
  },
  Picture: String,
  Expenses: Number,
  Review : [{
    body: String,
    ObjectId: String,
    }] /// object rememeber
})

exports.User = mongoose.model('user', userSchema);
exports.Vendor = mongoose.model('vendor', vendorSchema);
