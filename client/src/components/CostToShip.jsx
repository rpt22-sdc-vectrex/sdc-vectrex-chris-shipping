import React from 'react';
import styled from 'styled-components';

const ShippingContainerRow = styled.div`
flex-grow: 1;
flex-basis: 50%;
max-width: 50%;
margin-bottom: 18px;
padding-right: 12px;
box-sizing: border-box;
`;

const CostStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959;
  font-weight: 300;
  line-height: 18px;
`;

const CostDataStyle = styled.div`
  color: #222222;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 26px;
  line-height: 32px;
  font-family: "GuardianEgypt","Guardian-EgypTT","Merriweather",serif;
  -webkit-font-smoothing: antialiased;
  margin: 6px 0px 0px;
`;

function CostToShip(props) {
  return (
    <ShippingContainerRow>
      <CostStyle data-test="costComponent">Cost to ship</CostStyle>
      <CostDataStyle>
        {props.shippingCost}
      </CostDataStyle>
    </ShippingContainerRow>
  );
}

export default CostToShip;
