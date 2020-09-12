import React from 'react';

function DeliverTo(props) {
  return (
    <div>
      <h1 data-test="deliverComponent">Deliver to</h1>
      <h3>
        {props.deliverTo}
      </h3>
    </div>
  );
}

export default DeliverTo;
