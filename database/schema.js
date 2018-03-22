const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/geospatial_db', function(err) {
        if (err) throw err;

        // do something...
});

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
console.log('hey im listening ok ');


const user = mongoose.model('user', userSchema);
const vendor = mongoose.model('vendor', vendorSchema);


 module.exports = user;
 module.exports = vendor;
