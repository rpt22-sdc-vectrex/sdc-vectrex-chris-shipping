import React from 'react';
import styled from 'styled-components';

const CountryStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959
`;

const CountryDataStyle = styled.div`
  color: #222222
  font-family: "Guardian-EgypTT",serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 20px;
  line-height: 32px;
`;

function DeliverTo(props) {
  return (
    <div>
      <CountryStyle data-test="deliverComponent">Deliver to</CountryStyle>
      <CountryDataStyle>
        {props.deliverTo}
      </CountryDataStyle>
    </div>
  );
}

export default DeliverTo;
