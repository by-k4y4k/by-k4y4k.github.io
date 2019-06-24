import React from 'react';
import styled from 'styled-components';

import CardImage from './CardImage.js';
import NoMarginHeader from '../../Typography/Utility/NoMarginHeader';
import NoMarginParagraph from '../../Typography/Utility/NoMarginParagraph';

const CardContainer = ({className}) => {
  return (
    <div className={className}>
      <CardImage></CardImage>
      <NoMarginHeader>Card Header</NoMarginHeader>
      <NoMarginParagraph>
        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
        yardarm.
      </NoMarginParagraph>
      <NoMarginParagraph>HTML, CSS, JavaScript</NoMarginParagraph>
    </div>
  );
};

const StyledCardContainer = styled(CardContainer)`
  box-sizing: border-box;
  height: auto;
  width: 30%;
  border: 1px solid #915fee;
  margin: 10px;
  padding: 1rem;
`;

export default StyledCardContainer;
