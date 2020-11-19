"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #222222;\n  font-weight: 300;\n  letter-spacing: 0.35px;\n  font-size: 26px;\n  line-height: 32px;\n  font-family: \"GuardianEgypt\",\"Guardian-EgypTT\",\"Merriweather\",serif;\n  -webkit-font-smoothing: antialiased;\n  margin: 6px 0px 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-family: \"Graphik Webfont\",-apple-system,BlinkMacSystemFont,\"Roboto\",\"Droid Sans\",\"Segoe UI\",\"Helvetica\",Arial,sans-serif;\n  color: #595959;\n  text-decoration: underline;\n  text-decoration-style: dashed;\n  font-weight: 300;\n  line-height: 18px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-family: \"Graphik Webfont\",-apple-system,BlinkMacSystemFont,\"Roboto\",\"Droid Sans\",\"Segoe UI\",\"Helvetica\",Arial,sans-serif;\n  color: #595959;\n  font-weight: 300;\n  line-height: 18px;\n"]);

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

var DeliveryStyle = _styledComponents["default"].div(_templateObject2());

var DeliveryStyleDash = _styledComponents["default"].div(_templateObject3());

var DeliveryDataStyle = _styledComponents["default"].div(_templateObject4());

function EstimatedDelivery(props) {
  return /*#__PURE__*/_react["default"].createElement(ShippingContainerRow, null, /*#__PURE__*/_react["default"].createElement(DeliveryStyleDash, {
    "data-test": "deliveryDateComponent"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Estimated delivery")), /*#__PURE__*/_react["default"].createElement(DeliveryDataStyle, null, /*#__PURE__*/_react["default"].createElement("div", null, props.estimatedDelivery)), /*#__PURE__*/_react["default"].createElement(DeliveryStyle, null, /*#__PURE__*/_react["default"].createElement("div", null, "Need it by a specific date? Contact Seller")));
}

var _default = EstimatedDelivery;
exports["default"] = _default;