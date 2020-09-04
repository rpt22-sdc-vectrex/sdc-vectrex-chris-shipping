import React, { Component } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import CostToShip from './CostToShip.jsx';
import DeliverTo from './DeliverTo.jsx';
import EstimatedDelivery from './EstimatedDelivery.jsx';
import From from './From.jsx';
import Policies from './Policies.jsx';
import ReadyToShip from './ReadyToShip.jsx';

const axios = require('axios').default;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  setProductId() {
    let productId = window.location.pathname;
    console.log('window', window.location.pathname);
    productId = productId.slice(1);
    console.log('productID: ', productId);
    this.id = productId || 1;
    console.log('this.id', this.id);
    this.id = parseInt(this.id, 10);
    console.log('typeOf', typeof this.id);
    return this.id;
  }

  async getProduct() {
    const id = this.setProductId();
    try {
      const response = await axios.get(`http://localhost:7100/shipping-api/${id}`);
      const shipping = response.data;
      this.setState({
        city: shipping.ship_from_city,
        state: shipping.ship_from_state,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="shippingBox" data-test="appComponent">
        <CostToShip />
        <DeliverTo />
        <EstimatedDelivery />
        <From
          city={this.state.city}
          state={this.state.state}
        />
        <Policies />
        <ReadyToShip />
      </div>
    );
  }
}

export default App;
