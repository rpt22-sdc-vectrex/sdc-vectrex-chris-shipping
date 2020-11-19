"use strict";

/* eslint-disable no-console */
var mongoose = require('mongoose');

var dotenv = require('dotenv');

var path = require('path');

var DB_CONNECTION = process.env.DB_CONNECTION || 'mongodb://localhost/sdcShipping';
mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function () {
  return console.log('MongoDb Connected!');
})["catch"](function (err) {
  return console.log(err);
});
var db = mongoose.connection;
module.exports = db;