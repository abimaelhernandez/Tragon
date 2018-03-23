const mongoose = require('mongoose');

//const MongoClient = require('mongodb').MongoClient;

//connection to heroku
//const uri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise
//mongoose.createConnection('mongodb://user:pass@localhost:port/database');
mongoose.connect('mongodb://127.0.0.1:27017/tragon')
/*up there pending connection to test db, here is
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
/*
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function(){
  console.log('Mongodb coonection created!');
});

*/
