const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const items = require('./routes/api/items');
const routes = require('./routes/general/routes');

//  const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const app = express();

//  connect to mongo
dotenv.config({ path: path.join(__dirname, './.env') });
mongoose
  .connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, // per deprecation warnings
  )
  .then(() => console.log('Connected to fecShipping DB on Atlas'))
  .catch((err) => console.log(err));

//  Begin Middleware
app.use(cors());

//  serve static files
app.use(express.static('client'));

//  use routes
app.use('/shipping-api/', items);
app.use('/', routes);


app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
});
