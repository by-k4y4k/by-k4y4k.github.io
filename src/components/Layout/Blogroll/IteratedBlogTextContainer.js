import React from 'react';
import styled from 'styled-components';

const IteratedBlogTextContainer = ({className, children}) => {
  return <div className={className}>{children}</div>;
};

const StyledIteratedBlogTextContainer = styled(IteratedBlogTextContainer)`
  display: flex;
  flex-direction: column;
`;

export default StyledIteratedBlogTextContainer;
