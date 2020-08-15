const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 7100;
const db = mongoose.connection;

const app = express();

app.use('/static', express(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('This is a test response message');
})

app.get('/shipping-api/:productId', (req, res) => {
  mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {

  })
})

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
})
