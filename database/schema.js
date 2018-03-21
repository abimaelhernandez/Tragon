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
    coordinates:[Number,Number]
  },
  Picture: String,
  Expenses: Number
})


const user = mongoose.model('user', userSchema);
const vendor = mongoose.model('vendor', vendorSchema);


 module.exports = user;
 module.exports = vendor;
