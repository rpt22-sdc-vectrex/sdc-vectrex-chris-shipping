/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const Shipping = require('../../models/shipping');

const router = express.Router();

// CREATE
router.post('/create', (req, res) => {
  const record = req.body;
  Shipping.create(record)
    .then(() => {
      console.log('Record added!');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error adding record: ', err);
      res.sendStatus(500);
    });
});

// READ
router.get('/all', (req, res) => {
  console.log('Returning all items');
  Shipping.find()
    .sort({ product_id: 1 })
    .then((items) => res.json(items));
});

router.get('/:productId', (req, res) => {
  console.log(`Returning item ${req.params.productId}`);
  Shipping.findOne({ product_id: req.params.productId })
    .then((item) => res.json(item));
});

// UPDATE
router.post('/:productId/update/', (req, res) => {
  const { productId } = req.params;
  const filter = { product_id: productId };
  const record = req.body;
  Shipping.findOneAndUpdate(
    filter,
    record,
    { new: true },
  )
    .then((data) => {
      console.log('Record updated: ', data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error updating record: ', err);
      res.sendStatus(404);
    });
});

// DESTROY
router.post('/:productId/delete/', (req, res) => {
  const { productId } = req.params;
  const filter = { product_id: productId };
  Shipping.deleteOne(filter)
    .then((data) => {
      console.log('Record deleted: ', data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error deleting record: ', err);
      res.sendStatus(404);
    });
});

module.exports = router;
