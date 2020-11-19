"use strict";

/* eslint-disable no-unused-vars */

/* eslint-disable no-console */
var express = require('express');

var Shipping = require('../db-mongo/models/shipping');

var router = express.Router(); // CREATE

router.post('/create', function (req, res) {
  var record = req.body;
  Shipping.create(record).then(function (data) {
    console.log('Record added!');
    res.status(200);
    res.json(data);
  })["catch"](function (err) {
    console.log('Error creating record: ', err);
    res.sendStatus(400);
  });
}); // READ

router.get('/all', function (req, res) {
  console.log('Returning all items');
  Shipping.find().sort({
    product_id: 1
  }).then(function (items) {
    res.status(200);
    res.json(items);
  })["catch"](function (err) {
    console.log('Record not found: ', err);
    res.sendStatus(404);
  });
});
router.get('/product/:productId', function (req, res) {
  // console.log(`Returning item ${req.params.productId}`);
  Shipping.findOne({
    product_id: req.params.productId
  }).then(function (item) {
    res.status(200);
    res.json(item);
  })["catch"](function (err) {
    console.log('Record not found: ', err);
    res.sendStatus(404);
  });
}); // UPDATE

router.put('/:productId/update/', function (req, res) {
  var productId = req.params.productId;
  var filter = {
    product_id: productId
  };
  var record = req.body;
  Shipping.findOneAndUpdate(filter, record, {
    "new": true
  }).then(function (data) {
    res.status(200);
    res.json(data);
  })["catch"](function (err) {
    console.log('Error updating record: ', err);
    res.sendStatus(404);
  });
}); // DESTROY

router.post('/:productId/delete/', function (req, res) {
  var productId = req.params.productId;
  var filter = {
    product_id: productId
  };
  Shipping.deleteOne(filter).then(function (data) {
    console.log('Record deleted: ', data);
    res.status(200);
    res.json(data);
  })["catch"](function (err) {
    console.log('Error deleting record: ', err);
    res.sendStatus(404);
  });
});
module.exports = router;