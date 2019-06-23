import React from 'react';
import styled from 'styled-components';

const IteratedBlogTextContainer = ({className, children}) => {
  return <div className={className}>{children}</div>;
};

const StyledIteratedBlogTextContainer = styled(IteratedBlogTextContainer)`
  flex-grow: 2;
`;

export default StyledIteratedBlogTextContainer;
