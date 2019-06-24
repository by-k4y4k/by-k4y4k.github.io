import React from 'react';
import styled from 'styled-components';

const CardImage = ({className}) => {
  return (
    <img className={className} src='https://placedog.net/500?random'></img>
  );
};

const StyledCardImage = styled(CardImage)`
  max-width: 100%;
  min-width: 33%;
  display: block;
`;

export default StyledCardImage;
