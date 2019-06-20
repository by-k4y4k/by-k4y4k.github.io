import React from 'react';
import styled from 'styled-components';

const CardText = ({className, children}) => {
  return <p className={className}>{children}</p>;
};

const StyledCardText = styled(CardText)`
  margin-bottom: 0;
`;

export default StyledCardText;
