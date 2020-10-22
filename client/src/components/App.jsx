/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import CostToShip from './CostToShip.jsx';
import DeliverTo from './DeliverTo.jsx';
import EstimatedDelivery from './EstimatedDelivery.jsx';
import From from './From.jsx';
import Policies from './Policies.jsx';
import ReadyToShip from './ReadyToShip.jsx';

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
    console.log(productId);
    productId = productId.slice(1);
    this.id = productId || 1;
    this.id = parseInt(this.id, 10);
    return this.id;
  }

  setProductLocation() {
    const productLocation = window.location.origin;
    // console.log(productLocation);
    this.location = productLocation;
    return this.location;
  }

  getShippingCost(data) {
    if (data.is_free_shipping) {
      return 'Free';
    }
    const cost = `$${data.shipping_cost}`;
    return cost;
  }

  async getProduct() {
    const id = this.setProductId();
    const location = this.setProductLocation();
    try {
      const response = await axios.get(`${location}/shipping-api/${id}`);
      const shipping = response.data;
      const costToShip = this.getShippingCost(shipping);
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
    const {
      estimatedDelivery,
      readyToShip,
      city,
      state,
      shippingCost,
      returns,
      policies,
      deliverTo,
    } = this.state;
    return (

      <div className="shippingBox" data-test="appComponent">

        <ShippingContainer>

          <EstimatedDelivery
            estimatedDelivery={estimatedDelivery}
          />

          <ReadyToShip
            readyToShip={readyToShip}
          />

        </ShippingContainer>

        <ShippingContainer>
          <From
            city={city}
            state={state}
          />

          <CostToShip
            shippingCost={shippingCost}
          />

        </ShippingContainer>

        <ShippingContainer>
          <Policies
            returns={returns}
            policies={policies}
          />
        </ShippingContainer>

        <DeliverTo
          deliverTo={deliverTo}
        />

      </div>
    );
  }
}

export default App;
