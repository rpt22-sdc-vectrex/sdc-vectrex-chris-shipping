const express = require('express');
const router = express.Router();
const Shipping = require('../../models/Shipping');

router.get('/all', (req, res) => {
  console.log(`Returning all items`);
  Shipping.find()
    .sort({ product_id: 1 })
    .then(items => res.json(items));
});

router.get('/:productId', (req, res) => {
  console.log(`Returning item ${req.params.productId}`);
  Shipping.findOne({product_id: req.params.productId})
    .then(item => res.json(item))
});


//module.exports = router;