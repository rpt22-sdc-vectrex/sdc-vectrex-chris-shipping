import React, { Component } from 'react';
import CostToShip from './CostToShip';
import DeliverTo from './DeliverTo';
import EstimatedDelivery from './EstimatedDelivery';
import From from './From';
import Policies from './Policies';
import ReadyToShip from './ReadyToShip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div classname='shippingBox'>
        <CostToShip />
        <DeliverTo />
        <EstimatedDelivery />
        <From />
        <Policies />
        <ReadyToShip />
      </div>
    );
  }
}


export default App;