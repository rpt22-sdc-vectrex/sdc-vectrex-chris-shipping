"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("../client/components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable no-unused-vars */

/* eslint-disable no-console */
var newrelic = require('newrelic');

var express = require('express');

var cors = require('cors');

var path = require('path');

var bodyParser = require('body-parser');

var template = require('./template');

var items = require('./routes/items.js');

var app = express(); // middleware

app.use(cors());
app.use(bodyParser.json()); //  serve static files

app.use(express["static"](path.join(__dirname, '../../public'))); //  use routes

app.use('/', items);
app.get('**', function (req, res) {
  // IF you have a theme, import it here as theme={theme}
  var application = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_App["default"], null));
  var renderedData = template(application);
  return res.send(renderedData);
});
app.listen(7100, function () {
  console.log("Shipping server is up and running on port ".concat(7100));
});