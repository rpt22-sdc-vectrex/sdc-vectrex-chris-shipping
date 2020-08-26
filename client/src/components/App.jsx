import React, { Component } from 'react';
import CostToShip from './CostToShip.jsx';
import DeliverTo from './DeliverTo.jsx';
import EstimatedDelivery from './EstimatedDelivery.jsx';
import From from './From.jsx';
import Policies from './Policies.jsx';
import ReadyToShip from './ReadyToShip.jsx';
import id1 from '../../../mongo-mockdata/id1.json';
import id2 from '../../../mongo-mockdata/id2.json';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="shippingBox" data-test="appComponent">
        <CostToShip />
        <DeliverTo />
        <EstimatedDelivery />
        <From city={id2.ship_from_city} state={id2.ship_from_state} />
        <Policies />
        <ReadyToShip />
      </div>
    );
  }
}

export default App;
