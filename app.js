const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const port = process.env.PORT || 7100;

const app = express();

app.use('/static', express(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('This is a test response message');
})

app.get('/shipping-api/:productId')

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
})
