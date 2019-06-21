import React from 'react';
import styled from 'styled-components';

const CardTech = ({className, children}) => {
  return <p className={className}>{children}</p>;
};

const StyledCardTech = styled(CardTech)`
  color: #915fee;
  margin-bottom: 0;
`;

export default StyledCardTech;
