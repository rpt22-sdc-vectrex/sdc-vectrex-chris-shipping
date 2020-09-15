import React from 'react';
import styled from 'styled-components';

const PoliciesStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959;
  font-weight: 300;
  line-height: 18px;
`;

const PoliciesDataStyle = styled.div`
  color: #222222;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 26px;
  line-height: 32px;
  margin: 6px 0px 0px;
  font-family: "GuardianEgypt","Guardian-EgypTT","Merriweather",serif;
  -webkit-font-smoothing: antialiased;
  margin 6px 0px 0px;
`;

function Policies(props) {
  return (
    <div>
      <PoliciesStyle data-test="policiesComponent">Returns and Exchanges</PoliciesStyle>
      <PoliciesDataStyle>
        {props.returns}
      </PoliciesDataStyle>
      <PoliciesStyle>
        {props.policies}
      </PoliciesStyle>
    </div>
  );
}

export default Policies;
