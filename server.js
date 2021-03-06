/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const newrelic = require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const React = require('react');
const { renderToString } = require('react-dom');
const items = require('./routes/items.js');

const app = express();

const PORT = process.env.PORT || 7100;

// middleware
app.use(cors());
app.use(bodyParser.json());

//  serve static files
app.use(express.static(path.join(__dirname, '/client/dist')));

//  use routes
app.use('/', items);

app.get('/serverbundle', (req, res) => {
  const application = renderToString(

  );
  return res.send(application);
});

app.listen(PORT, () => {
  console.log(`Shipping server is up and running on port ${PORT}`);
});
