import React from 'react';
import styled from 'styled-components';

const CardImage = ({className, children}) => {
  if (!children) return <div className={className} />;

  return <div className={className}>{children}</div>;
};

const StyledCardImage = styled(CardImage)`
  display: block;
  max-width: 100%;
  min-width: 33%;
  min-height: 150px;
`;

export default StyledCardImage;
