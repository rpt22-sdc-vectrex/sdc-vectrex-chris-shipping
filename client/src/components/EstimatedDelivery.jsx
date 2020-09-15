import React from 'react';
import styled from 'styled-components';

const DeliveryStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959
`;

const DeliveryDataStyle = styled.div`
  color: #222222
  font-family: "Guardian-EgypTT",serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 20px;
  line-height: 32px;
`;

function EstimatedDelivery(props) {
  return (
    <div>
      <DeliveryStyle data-test="deliveryDateComponent">
        <div>Estimated delivery</div>
      </DeliveryStyle>

      <DeliveryDataStyle>
        <div>
          {props.estimatedDelivery}
        </div>
      </DeliveryDataStyle>

      <DeliveryStyle>
        <div>Need it by a specific date? Contact Seller</div>
      </DeliveryStyle>

    </div>
  );
}
export default EstimatedDelivery;
