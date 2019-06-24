import React from 'react';
import styled from 'styled-components';

const IteratedBlogTextContainer = ({className, children}) => {
  return <div className={className}>{children}</div>;
};

const StyledIteratedBlogTextContainer = styled(IteratedBlogTextContainer)`
  text-align: left;
`;

export default StyledIteratedBlogTextContainer;
