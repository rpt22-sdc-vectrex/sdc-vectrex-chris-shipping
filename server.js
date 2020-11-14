/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const newrelic = require('newrelic');

const express = require('express');
const cors = require('cors');

const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const items = require('./routes/items.js');

const port = process.env.PORT || 7100;

const app = express();

dotenv.config({ path: path.join(__dirname, './.env') });

// middleware
app.use(cors());
app.use(bodyParser.json());

//  serve static files
app.use(express.static(path.join(__dirname, '/client/dist')));

//  use routes
app.use('/', items);

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
});
