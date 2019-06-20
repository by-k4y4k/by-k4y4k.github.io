import React from 'react';
import styled from 'styled-components';

const CardText = ({className, children}) => {
  return <h4 className={className}>{children}</h4>;
};

const StyledCardText = styled(CardText)`
  margin-bottom: 0;
`;

export default StyledCardText;
