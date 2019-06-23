import React from 'react';
import styled from 'styled-components';

const IteratedBlogContainer = ({className, children}) => {
  return <article className={className}>{children}</article>;
};

const StyledIteratedBlogContainer = styled(IteratedBlogContainer)`
  display: flex;
`;

export default StyledIteratedBlogContainer;
