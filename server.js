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
    },
  )
  .then(() => console.log('MongoDb Connected!'))
  .catch((err) => console.log(err));

// middleware
app.use(cors());
app.use(bodyParser.json());

//  serve static files
app.use(express.static(path.join(__dirname, '/client')));

//  use routes
app.use('/', items);

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
});
