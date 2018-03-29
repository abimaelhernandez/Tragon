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
    coordinates:[Number,Number],
  },
  picture: String,
  expenses: Number,
  review : [{
    body: String,
    ObjectId: String,
    }]
})

exports.User = mongoose.model('user', userSchema);
exports.Vendor = mongoose.model('vendor', vendorSchema);
//=== tragon Config Vars
//MONGODB_URI: mongodb://heroku_f2zv1xhd:adnlio6rd3b86vbsnprh2fg3j0@ds121099.mlab.com:21099/heroku_f2zv1xhd
//mongoimport -h ds121099.mlab.com:21099 -d heroku_f2zv1xhd -c users -u heroku_f2zv1xhd -p adnlio6rd3b86vbsnprh2fg3j0 --file users.json
