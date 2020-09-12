import React from 'react';

function EstimatedDelivery(props) {
  return (
    <div>
      <h1 data-test="deliveryDateComponent">Estimated delivery</h1>
      <h3>
        {props.estimatedDelivery}
      </h3>
    </div>
  );
}
export default EstimatedDelivery;
