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
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-family: \"Graphik Webfont\",-apple-system,BlinkMacSystemFont,\"Roboto\",\"Droid Sans\",\"Segoe UI\",\"Helvetica\",Arial,sans-serif;\n  color: #595959;\n  font-weight: 300;\n  line-height: 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nflex-grow: 1;\nflex-basis: 50%;\nmax-width: 50%;\nmargin-bottom: 18px;\npadding-right: 12px;\nbox-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ShippingContainerRow = _styledComponents["default"].div(_templateObject());

var CostStyle = _styledComponents["default"].div(_templateObject2());

var CostDataStyle = _styledComponents["default"].div(_templateObject3());

function CostToShip(props) {
  return /*#__PURE__*/_react["default"].createElement(ShippingContainerRow, null, /*#__PURE__*/_react["default"].createElement(CostStyle, {
    "data-test": "costComponent"
  }, "Cost to ship"), /*#__PURE__*/_react["default"].createElement(CostDataStyle, null, props.shippingCost));
}

var _default = CostToShip;
exports["default"] = _default;