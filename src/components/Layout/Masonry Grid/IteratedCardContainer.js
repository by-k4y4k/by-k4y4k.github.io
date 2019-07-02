import React from 'react';
import styled from 'styled-components';

const CardContainer = ({className, children}) => {
  return <div className={className}>{children}</div>;
};

const StyledCardContainer = styled(CardContainer)`
  box-sizing: border-box;
  height: auto;
  width: 30%;
  border: 1px solid #915fee;
  margin: 1%;
  padding: 1rem;

  @media (max-width: 599px) {
    width: 100%;
  }
  @media (min-width: 600px) and (max-width: 1023px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export default StyledCardContainer;
