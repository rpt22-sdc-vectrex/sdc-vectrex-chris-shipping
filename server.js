/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const newrelic = require('newrelic');
const cluster = require('cluster');

const numCPUs = 6;
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
app.use(express.static(path.join(__dirname, '/client')));

//  use routes
app.use('/', items);

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
} else {
  app.listen(port, () => {
    console.log(`Shipping server is up and running on port ${port}`);
  });
}
