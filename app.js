const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 7100;
const db = mongoose.connection;

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/fecShipping',
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => console.log(`Connected to fecShipping`)
);

app.use('/static', express(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('This is a test response message');
})

app.get('/shipping-api/:productId', (req, res) => {

})

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
})
