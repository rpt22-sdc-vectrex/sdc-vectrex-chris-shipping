"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CostToShip = _interopRequireDefault(require("./CostToShip"));

var _DeliverTo = _interopRequireDefault(require("./DeliverTo"));

var _EstimatedDelivery = _interopRequireDefault(require("./EstimatedDelivery"));

var _From = _interopRequireDefault(require("./From"));

var _Policies = _interopRequireDefault(require("./Policies"));

var _ReadyToShip = _interopRequireDefault(require("./ReadyToShip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var axios = require('axios');

var ShippingContainer = _styledComponents["default"].div(_templateObject());

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      city: '',
      state: '',
      estimatedDelivery: '',
      returns: '',
      shippingCost: ''
    };
    _this.getShippingCost = _this.getShippingCost.bind(_assertThisInitialized(_this));
    _this.getProduct = _this.getProduct.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var parsedUrl = new URL(window.location.href);
      var productId = parsedUrl.searchParams.get('productId') || 1;
      this.getProduct(productId);
    }
  }, {
    key: "getShippingCost",
    value: function getShippingCost(data) {
      if (data.is_free_shipping) {
        return 'Free';
      }

      var cost = "$".concat(data.shipping_cost);
      return cost;
    }
  }, {
    key: "getProduct",
    value: function getProduct(id) {
      var _this2 = this;

      var url = "http://".concat('localhost', ":").concat(7100, "/product/").concat(id);
      console.log(url);
      axios(url).then(function (response) {
        var costToShip = _this2.getShippingCost(response.data);

        var shipping = response.data;
        var delivery = shipping.estimated_delivery;
        delivery = (0, _moment["default"])(delivery).format('MMM Do YYYY');

        _this2.setState({
          city: shipping.ship_from_city,
          state: shipping.ship_from_state,
          estimatedDelivery: delivery,
          shippingCost: costToShip,
          deliverTo: shipping.countries_shipped_to,
          policies: shipping.return_policy,
          returns: shipping.returns,
          readyToShip: shipping.ready_to_ship
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          estimatedDelivery = _this$state.estimatedDelivery,
          readyToShip = _this$state.readyToShip,
          city = _this$state.city,
          state = _this$state.state,
          shippingCost = _this$state.shippingCost,
          returns = _this$state.returns,
          policies = _this$state.policies,
          deliverTo = _this$state.deliverTo;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "shippingBox",
        "data-test": "appComponent"
      }, /*#__PURE__*/_react["default"].createElement(ShippingContainer, null, /*#__PURE__*/_react["default"].createElement(_EstimatedDelivery["default"], {
        estimatedDelivery: estimatedDelivery
      }), /*#__PURE__*/_react["default"].createElement(_ReadyToShip["default"], {
        readyToShip: readyToShip
      })), /*#__PURE__*/_react["default"].createElement(ShippingContainer, null, /*#__PURE__*/_react["default"].createElement(_From["default"], {
        city: city,
        state: state
      }), /*#__PURE__*/_react["default"].createElement(_CostToShip["default"], {
        shippingCost: shippingCost
      })), /*#__PURE__*/_react["default"].createElement(ShippingContainer, null, /*#__PURE__*/_react["default"].createElement(_Policies["default"], {
        returns: returns,
        policies: policies
      })), /*#__PURE__*/_react["default"].createElement(_DeliverTo["default"], {
        deliverTo: deliverTo
      }));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports["default"] = _default;