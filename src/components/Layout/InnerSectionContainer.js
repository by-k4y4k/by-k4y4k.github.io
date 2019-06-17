import React from 'react';
import styled from 'styled-components';

const InnerSection = ({className, children}) => {
  return <div className={className}>{children}</div>;
};

const StyledInnerSection = styled(InnerSection)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  color: white;
  padding: 1rem;
`;

export default StyledInnerSection;
