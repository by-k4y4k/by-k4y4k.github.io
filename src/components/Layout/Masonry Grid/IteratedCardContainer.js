import React from 'react';
import styled from 'styled-components';

import CardImage from './IteratedCardImage.js';
import NoMarginHeader from '../../Typography/Utility/NoMarginHeader';
import NoMarginParagraph from '../../Typography/Utility/NoMarginParagraph';

const CardContainer = ({className}) => {
  return (
    <div className={className}>
      <CardImage />
      <NoMarginHeader>Card Header</NoMarginHeader>
      <NoMarginParagraph>
        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
        yardarm.
      </NoMarginParagraph>
      <NoMarginParagraph accent='true'>HTML, CSS, JavaScript</NoMarginParagraph>
    </div>
  );
};

const StyledCardContainer = styled(CardContainer)`
  box-sizing: border-box;
  height: auto;
  width: 30%;
  border: 1px solid #915fee;
  margin: 1%;
  padding: 1rem;

  @media (max-width: 425px) {
    width: 100%;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export default StyledCardContainer;
