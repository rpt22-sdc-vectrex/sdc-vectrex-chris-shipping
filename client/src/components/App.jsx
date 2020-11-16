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

const axios = require('axios');

const SERVER = process.env.API || '54.151.125.123';
const PORT = process.env.PORT || 7100;

const SERVER_URL = `http://${SERVER}:${PORT}/`;

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
    this.getShippingCost = this.getShippingCost.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    const parsedUrl = new URL(window.location.href);
    const productId = parsedUrl.searchParams.get('productId') || 1;
    this.getProduct(productId);
  }

  getShippingCost(data) {
    if (data.is_free_shipping) {
      return 'Free';
    }
    const cost = `$${data.shipping_cost}`;
    return cost;
  }

  getProduct(id) {
    console.log(SERVER_URL)
    const url = `${SERVER_URL}product/${id}`;
    console.log(url);
    axios(url)
      .then((response) => {
        const costToShip = this.getShippingCost(response.data);
        const shipping = response.data;
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
      })
      .catch((error) => console.log(error));
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
