"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _utils = require("../../../Test/utils");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});

var setUp = function setUp() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var component = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_App["default"], props));
  return component;
};

describe('Testing the App Component', function () {
  var component;
  beforeEach(function () {
    component = setUp();
  });
  test('Should render the App component without errors', function () {
    var wrapper = (0, _utils.findByTestAttr)(component, 'appComponent');
    expect(wrapper.length).toBe(1);
  });
});
describe('Testing App Methods', function () {
  var data = {
    "countries_shipped_to": "United States",
    "estimated_delivery": "2020-02-23T06:55:31Z",
    "is_free_shipping": false,
    "product_id": 55,
    "ready_to_ship": "nunc nisl duis",
    "return_policy": "donec posuere metus vitae ipsum aliquam non",
    "returns": "Accepted",
    "ship_from_city": "Yakima",
    "ship_from_state": "WA",
    "shipping_cost": "3.97",
    "__v": 0,
    "_id": "5f61ac389f0c151f3805a02e"
  };
  test('setProductId', function () {
    var testApp = new _App["default"]();
    var result = testApp.setProductId(); //in package.json "testURL": "http://myetsytest.com/5",

    expect(result).toBe(5);
  });
  test('setProductLocation', function () {
    var testApp = new _App["default"]();
    var result = testApp.setProductLocation();
    expect(result).toBe('http://myetsytest.com');
  });
  test('getShippingCost', function () {
    var testApp = new _App["default"]();
    var result = testApp.getShippingCost(data);
    expect(result).toBe('$3.97');
  });
});