import React, { Component } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import CostToShip from './CostToShip.jsx';
import DeliverTo from './DeliverTo.jsx';
import EstimatedDelivery from './EstimatedDelivery.jsx';
import From from './From.jsx';
import Policies from './Policies.jsx';
import ReadyToShip from './ReadyToShip.jsx';
const path = require('path');

const axios = require('axios').default;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      estimatedDelivery: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  setProductId() {
    let productId = window.location.pathname;
    productId = productId.slice(1);
    this.id = productId || 1;
    this.id = parseInt(this.id, 10);
    return this.id;
  }

  setProductLocation() {
    const productLocation = window.location.origin;
    this.location = productLocation;
    return this.location;
  }

  getShippingCostData(costArray, id) {
    for (let i = 0; i < costArray.length; i++) {
      if (id === costArray[i].product_id) {
        return costArray[i];
      }
    }
  }

  getShippingCost(data) {
    if (data.isFreeShipping) {
      return 'Free';
    } else {
      let cost = '$' + data.costOfDelivery.toString();
      return cost;
    }
  }

  async getProduct() {
    const id = this.setProductId();
    const location = this.setProductLocation();
    try {
      const response = await axios.get(`${location}/shipping-api/${id}`);
      const shipping = response.data;
      const costResponse = await axios.get('https://valeriia-ten-inventory.s3.us-east-2.amazonaws.com/100inventory.json');
      const itemShippingCostData = this.getShippingCostData(costResponse.data, id);
      const costToShip = this.getShippingCost(itemShippingCostData);

      this.setState({
        city: shipping.ship_from_city,
        state: shipping.ship_from_state,
        estimatedDelivery: shipping.estimated_delivery,
        shippingCost: costToShip,
        deliverTo: shipping.countries_shipped_to,
        policies: shipping.return_policy,
        readyToShip: shipping.ready_to_ship,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="shippingBox" data-test="appComponent">
        <CostToShip
          shippingCost={this.state.shippingCost}
        />
        <DeliverTo
          deliverTo={this.state.deliverTo}
        />
        <EstimatedDelivery
          estimatedDelivery={this.state.estimatedDelivery}
        />
        <From
          city={this.state.city}
          state={this.state.state}
        />
        <Policies
          policies={this.state.policies}
        />
        <ReadyToShip
          readyToShip={this.state.readyToShip}
        />
      </div>
    );
  }
}

export default App;
