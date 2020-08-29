import React from 'react';

function From(props) {
  return (
    <div>
      <h1 data-test="fromComponent">From</h1>
      <h3>
        {props.city}
        ,
        {' '}
        {props.state}
      </h3>
    </div>
  );
}

export default From;
