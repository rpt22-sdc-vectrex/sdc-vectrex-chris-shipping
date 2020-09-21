/* eslint-disable no-console */

const express = require('express');
const axios = require('axios').default;

const router = express.Router();

router.get('/', (req, res) => {
  axios.get('https://valeriia-ten-inventory.s3.us-east-2.amazonaws.com/100inventory.json')
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
