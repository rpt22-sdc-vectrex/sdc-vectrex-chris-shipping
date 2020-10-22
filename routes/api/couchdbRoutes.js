/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const express = require('express');
const couchDB = require('../../couchDB');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
  const record = req.body;
  const key = `key::${req.body.product_id}`;
  const result = await couchDB.collection.insert(key, record);
  res.status(200);
  res.json(result);
});

// READ
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  const key = `key::${productId}`;
  const result = await couchDB.collection.get(key);
  res.status(200);
  res.json(result.value);
});

// UPDATE
router.put('/:productId/update/', async (req, res) => {
  const record = req.body;
  const key = `key::${req.params.productId}`;
  const result = await couchDB.collection.upsert(key, record);
  res.status(200);
  res.json(result);
});
// DESTROY

router.post('/:productId/delete/', async (req, res) => {
  const key = `key::${req.params.productId}`;
  const result = await couchDB.collection.remove(key);
  res.status(200);
  res.json(result);
});

module.exports = router;
