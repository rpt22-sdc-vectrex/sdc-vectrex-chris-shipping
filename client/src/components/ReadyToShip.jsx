import React from 'react';

function ReadyToShip(props) {
  return (
    <div>
      <h1 data-test="readyComponent">Ready to ship in</h1>
      <h3>
          {props.readyToShip}
      </h3>
    </div>
  );
}

export default ReadyToShip;
