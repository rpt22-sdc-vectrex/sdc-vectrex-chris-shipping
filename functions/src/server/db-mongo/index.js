"use strict";

/* eslint-disable no-undef */

/* eslint-disable no-console */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sdcShipping', {
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