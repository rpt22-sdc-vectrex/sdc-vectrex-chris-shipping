"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _utils = require("../../../Test/utils");

var _From = _interopRequireDefault(require("./From"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});

var setUp = function setUp() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var component = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_From["default"], props));
  return component;
};

describe('Testing the From Component', function () {
  var component;
  beforeEach(function () {
    component = setUp();
  });
  test('Should render the From component without errors', function () {
    var wrapper = (0, _utils.findByTestAttr)(component, 'fromComponent');
    expect(wrapper.length).toBe(1);
  });
});