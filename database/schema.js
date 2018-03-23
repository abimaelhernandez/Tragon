const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  Name: String,
  Password: String
})

const vendorSchema = mongoose.Schema({
  Name: String,
  category: String,
  location: {
    type:{type:String},
    coordinates:[Number,Number],
  },
  Picture: String,
  Expenses: Number,
  Review : [{
    body: String,
    ObjectId: String,
    }] /// object rememeber
})

const User = mongoose.model('user', userSchema);
const Vendor = mongoose.model('vendor', vendorSchema);

module.exports = {
  User,
  Vendor
}
