import React from 'react';
import styled from 'styled-components';

import CardImage from './CardImage.js';
import CardHeader from '../../Typography/Masonry Grid/CardHeader';
import CardText from '../../Typography/Masonry Grid/CardText';
import CardTech from '../../Typography/Masonry Grid/CardTech';

const CardContainer = ({className}) => {
  return (
    <div className={className}>
      <CardImage></CardImage>
      <CardHeader>Card Header</CardHeader>
      <CardText>
        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
        yardarm.
      </CardText>
      <CardTech>HTML, CSS, JavaScript</CardTech>
    </div>
  );
};

const StyledCardContainer = styled(CardContainer)`
  box-sizing: border-box;
  height: auto;
  width: 30%;
  border: 1px solid #22d07f;
  margin: 10px;
  padding: 1rem;
`;

export default StyledCardContainer;
