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

const FromStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959;
  font-weight: 300;
  line-height: 18px;
`;

const FromDataStyle = styled.div`
  color: #222222;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 26px;
  line-height: 32px;
  font-family: "GuardianEgypt","Guardian-EgypTT","Merriweather",serif;
  -webkit-font-smoothing: antialiased;
  margin: 6px 0px 0px;
`;

function From(props) {
  return (
    <ShippingContainerRow>
      <FromStyle data-test="fromComponent">Ships from</FromStyle>
      <FromDataStyle>
        {props.city}
        ,
        {' '}
        {props.state}
      </FromDataStyle>
    </ShippingContainerRow>
  );
}

export default From;
