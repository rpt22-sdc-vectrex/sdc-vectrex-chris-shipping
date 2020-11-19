"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #222222;\n  font-weight: 300;\n  letter-spacing: 0.35px;\n  font-size: 26px;\n  line-height: 32px;\n  margin: 6px 0px 0px;\n  font-family: \"GuardianEgypt\",\"Guardian-EgypTT\",\"Merriweather\",serif;\n  -webkit-font-smoothing: antialiased;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  font-family: \"Graphik Webfont\",-apple-system,BlinkMacSystemFont,\"Roboto\",\"Droid Sans\",\"Segoe UI\",\"Helvetica\",Arial,sans-serif;\n  color: #595959;\n  font-weight: 300;\n  line-height: 18px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PoliciesStyle = _styledComponents["default"].div(_templateObject());

var PoliciesDataStyle = _styledComponents["default"].div(_templateObject2());

function Policies(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(PoliciesStyle, {
    "data-test": "policiesComponent"
  }, "Returns and Exchanges"), /*#__PURE__*/_react["default"].createElement(PoliciesDataStyle, null, props.returns), /*#__PURE__*/_react["default"].createElement(PoliciesStyle, null, props.policies));
}

var _default = Policies;
exports["default"] = _default;