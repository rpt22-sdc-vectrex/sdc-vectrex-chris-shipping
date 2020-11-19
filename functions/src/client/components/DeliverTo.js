"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-family: \"Graphik Webfont\",-apple-system,BlinkMacSystemFont,\"Roboto\",\"Droid Sans\",\"Segoe UI\",\"Helvetica\",Arial,sans-serif;\n  color: #222222;\n  font-weight: bold;\n  margin: 18px 0px 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CountryStyle = _styledComponents["default"].div(_templateObject());

function DeliverTo(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(CountryStyle, {
    "data-test": "deliverComponent"
  }, "Deliver to ", props.deliverTo));
}

var _default = DeliverTo;
exports["default"] = _default;