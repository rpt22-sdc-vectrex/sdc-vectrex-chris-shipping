import React from 'react';
import styled from 'styled-components';

const FromStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959
`;

const FromDataStyle = styled.div`
  color: #222222
  font-family: "Guardian-EgypTT",serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 20px;
  line-height: 32px;
`;

function From(props) {
  return (
    <div>
      <FromStyle data-test="fromComponent">Ships from</FromStyle>
      <FromDataStyle>
        {props.city}
        ,
        {' '}
        {props.state}
      </FromDataStyle>
    </div>
  );
}

export default From;
