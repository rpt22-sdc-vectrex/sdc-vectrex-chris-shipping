import React from 'react';

function CostToShip(props) {
  return (
    <div>
      <h1 data-test="costComponent">Cost to ship</h1>
      <h3>
        {props.shippingCost}
      </h3>
    </div>
  );
}

export default CostToShip;
