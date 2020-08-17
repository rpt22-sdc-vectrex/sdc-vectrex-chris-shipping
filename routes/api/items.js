const express = require('express');
const router = express.Router();
const Shipping = require('../../models/Shipping');

router.get('/all', (req, res) => {
  Shipping.find()
    .sort({ product_id: 1 })
    .then(items => res.json(items));
});


module.exports = router;