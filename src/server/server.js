/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';

const newrelic = require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const template = require('./template');
const items = require('./routes/items.js');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

//  serve static files
app.use(express.static(path.join(__dirname, '../../public')));

//  use routes
app.use('/', items);

app.get('**', (req, res) => {
  // IF you have a theme, import it here as theme={theme}
  const application = renderToString(
    <App />,
  );
  const renderedData = template(application);
  return res.send(renderedData);
});

app.listen(PORT, () => {
  console.log(`Shipping server is up and running on port ${PORT}`);
});
