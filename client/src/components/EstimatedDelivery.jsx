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

const DeliveryStyle = styled.div`
  font-size: 14px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959;
`;

const DeliveryStyleDash = styled.div`
  font-size: 14px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959;
  text-decoration: underline;
  text-decoration-style: dashed;
`;

const DeliveryDataStyle = styled.div`
  color: #222222;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 26px;
  line-height: 32px;
  font-family: "GuardianEgypt","Guardian-EgypTT","Merriweather",serif;
  -webkit-font-smoothing: antialiased;
  margin: 6px 0px 0px;
`;

function EstimatedDelivery(props) {
  return (
    <ShippingContainerRow>
      <DeliveryStyleDash data-test="deliveryDateComponent">
        <div>Estimated delivery</div>
      </DeliveryStyleDash>

      <DeliveryDataStyle>
        <div>
          {props.estimatedDelivery}
        </div>
      </DeliveryDataStyle>

      <DeliveryStyle>
        <div>Need it by a specific date? Contact Seller</div>
      </DeliveryStyle>

    </ShippingContainerRow>
  );
}
export default EstimatedDelivery;
