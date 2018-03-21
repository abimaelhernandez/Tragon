const mongoose = require('mongoose');
//connection






/*up there pending connection to test db, here is
to see if connection is or if there´s error´s
*/
const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'Connection error:'));
 db.once('open', function(){
  console.log('Mongodb coonection created!°°°°');
 });
module.exports = db;
