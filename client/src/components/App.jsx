import React, { Component } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import moment from 'moment';
import CostToShip from './CostToShip.jsx';
import DeliverTo from './DeliverTo.jsx';
import EstimatedDelivery from './EstimatedDelivery.jsx';
import From from './From.jsx';
import Policies from './Policies.jsx';
import ReadyToShip from './ReadyToShip.jsx';
import styled from 'styled-components';

const axios = require('axios').default;

const ShippingContainer = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      estimatedDelivery: '',
      returns: '',
      shippingCost: '',
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
      const costResponse = await axios.get(`${location}/productInfo-api/`);
      const itemShippingCostData = this.getShippingCostData(costResponse.data, id);
      const costToShip = this.getShippingCost(itemShippingCostData);
      let delivery = shipping.estimated_delivery;
      delivery = moment(delivery).format('MMM Do YYYY');

      this.setState({
        city: shipping.ship_from_city,
        state: shipping.ship_from_state,
        estimatedDelivery: delivery,
        shippingCost: costToShip,
        deliverTo: shipping.countries_shipped_to,
        policies: shipping.return_policy,
        returns: shipping.returns,
        readyToShip: shipping.ready_to_ship,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (

      <div className="shippingBox" data-test="appComponent">

        <ShippingContainer>

        <EstimatedDelivery
          estimatedDelivery={this.state.estimatedDelivery}
        />

        <ReadyToShip
          readyToShip={this.state.readyToShip}
        />

        </ShippingContainer>

        <ShippingContainer>
        <From
          city={this.state.city}
          state={this.state.state}
        />

        <CostToShip
          shippingCost={this.state.shippingCost}
        />


        </ShippingContainer>

        <ShippingContainer>
        <Policies
          returns={this.state.returns}
          policies={this.state.policies}
        />
        </ShippingContainer>

        <DeliverTo
          deliverTo={this.state.deliverTo}
        />



      </div>
    );
  }
}

export default App;
