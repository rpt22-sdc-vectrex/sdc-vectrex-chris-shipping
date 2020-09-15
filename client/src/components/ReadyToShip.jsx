import React from 'react';
import styled from 'styled-components';

const ReadyStyle = styled.div`
  font-size: 13px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  color: #595959
`;

const ReadyDataStyle = styled.div`
  color: #222222
  font-family: "Guardian-EgypTT",serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 20px;
  line-height: 32px;
`;

function ReadyToShip(props) {
  return (
    <div>
      <ReadyStyle data-test="readyComponent">Ready to ship in</ReadyStyle>
      <ReadyDataStyle>
          {props.readyToShip}
      </ReadyDataStyle>
    </div>
  );
}

export default ReadyToShip;
