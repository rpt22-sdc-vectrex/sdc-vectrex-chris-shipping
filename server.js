const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const items = require('./routes/api/items');
const routes = require('./routes/general/routes');

//  const bodyParser = require('body-parser');
const port = process.env.PORT || 7100;

const app = express();

//  connect to mongo
mongoose
  .connect(
    'mongodb://localhost:27017/fecShipping',
    { useNewUrlParser: true, useUnifiedTopology: true }, // per deprecation warnings
  )
  .then(() => console.log('Connected to fecShipping DB'))
  .catch((err) => console.log(err));

//  serve static files
app.use('/static', express(path.join(__dirname, 'client')));

//  use routes
app.use('/shipping-api/', items);
app.use('/', routes);

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
});
