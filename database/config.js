const mongoose = require('mongoose');

//const MongoClient = require('mongodb').MongoClient;

//connection to heroku
var url = mongoose.connect('mongodb://127.0.0.1:27017/yoooooo')


// "mongodb://localhost:27017/TestForTragon";

//const uri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise

/*up there ,connection to create db, here is
to see if connection is or if there´s error´s
remember to run ... node "folderName tha houses configuration" + / + " filename where
connection is been made"
*/
//mongoose.connect(uri);

const db = mongoose.connection

db.once('open', function(){
  console.log('Mongodb coonection created!°°°°');
}).on('error', function(error){
  console.log('Connection error:',error);
});



module.exports = db;
