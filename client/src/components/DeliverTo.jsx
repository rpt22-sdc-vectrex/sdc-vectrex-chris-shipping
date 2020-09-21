import React from 'react';
import styled from 'styled-components';

const CountryStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #222222;
  font-weight: bold;
  margin: 18px 0px 0px;
`;

function DeliverTo(props) {
  return (
    <div>
      <CountryStyle data-test="deliverComponent">Deliver to {props.deliverTo}
      </CountryStyle>

    </div>
  );
}

export default DeliverTo;
