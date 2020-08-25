import React, { Component } from 'react';
import CostToShip from './CostToShip.jsx';
import DeliverTo from './DeliverTo.jsx';
import EstimatedDelivery from './EstimatedDelivery.jsx';
import From from './From.jsx';
import Policies from './Policies.jsx';
import ReadyToShip from './ReadyToShip.jsx';

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