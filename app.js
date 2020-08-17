const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
//const bodyParser = require('body-parser');
const port = process.env.PORT || 7100;

const app = express();

mongoose
  .connect(
    'mongodb://localhost:27017/fecShipping',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log(`Connected to fecShipping DB`))
  .catch(err => console.log(err));

app.use('/static', express(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('This is a test response message');
})

app.get('/shipping-api/:productId', (req, res) => {

})

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
})
