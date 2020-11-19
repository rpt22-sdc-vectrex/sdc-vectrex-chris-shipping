"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #222222;\n  font-weight: 300;\n  letter-spacing: 0.35px;\n  font-size: 26px;\n  line-height: 32px;\n  font-family: \"GuardianEgypt\",\"Guardian-EgypTT\",\"Merriweather\",serif;\n  -webkit-font-smoothing: antialiased;\n  margin: 6px 0px 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-family: \"Graphik Webfont\",-apple-system,BlinkMacSystemFont,\"Roboto\",\"Droid Sans\",\"Segoe UI\",\"Helvetica\",Arial,sans-serif;\n  color: #595959;\n  line-height: 18px;\n  font-weight: 300;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  flex-basis: 50%;\n  max-width: 50%;\n  margin-bottom: 18px;\n  padding-right: 12px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ShippingContainerRow = _styledComponents["default"].div(_templateObject());

var ReadyStyle = _styledComponents["default"].div(_templateObject2());

var ReadyDataStyle = _styledComponents["default"].div(_templateObject3());

function ReadyToShip(props) {
  var readyToShip = props.readyToShip;
  return /*#__PURE__*/_react["default"].createElement(ShippingContainerRow, null, /*#__PURE__*/_react["default"].createElement(ReadyStyle, {
    "data-test": "readyComponent"
  }, "Ready to ship in"), /*#__PURE__*/_react["default"].createElement(ReadyDataStyle, null, readyToShip));
}

var _default = ReadyToShip;
exports["default"] = _default;