/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const port = process.env.PORT || 7100;

const app = express();

dotenv.config({ path: path.join(__dirname, './.env') });

//  connect to mongo
mongoose
  .connect(
    process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }, // per deprecation warnings
  )
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.log(err));

//  Begin Middleware
app.use(cors());
app.use(bodyParser.json());

//  serve static files
app.use(express.static('client'));

//  use routes
app.use('/shipping-api/', items);

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
});
