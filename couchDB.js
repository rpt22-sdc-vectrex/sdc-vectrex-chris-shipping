/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const couchbase = require('couchbase');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const couchdbRoutes = require('./routes/api/couchdbRoutes.js');

const port = process.env.PORT || 7100;

const app = express();

dotenv.config({ path: path.join(__dirname, './.env') });

// connect to couchbase
const cluster = new couchbase.Cluster(process.env.CB_HOST, {
  username: process.env.CB_USER,
  password: process.env.CB_PW,
});

const bucket = cluster.bucket('shipping-bucket');
const collection = bucket.defaultCollection();
module.exports.collection = collection;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client'));

// routes
app.use('/', couchdbRoutes);

app.listen(port, () => {
  console.log(`Shipping server is up and running on port ${port}`);
});
