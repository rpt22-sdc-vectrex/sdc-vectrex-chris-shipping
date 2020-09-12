import React from 'react';

function Policies(props) {
  return (
    <div>
      <h1 data-test="policiesComponent">Policies</h1>
      <h3>
        {props.policies}
      </h3>
    </div>
  );
}

export default Policies;
