const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require("../database/schema.js");
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

module.exports = app;
