const mongoose = require('mongoose');
//connection to heroku
const uri = process.env.MONGODB_URI:

mongoose.Promise = global.Promise
 mongoose.createConnection('mongodb://user:pass@localhost:port/database'
mongoose.connect(uri)
/*up there pending connection to test db, here is
to see if connection is or if there´s error´s
*/
const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'Connection error:'));
   console.log('hey yo are here');
 db.once('open', function(){
  console.log('Mongodb coonection created!°°°°');
 });
module.exports = db;
