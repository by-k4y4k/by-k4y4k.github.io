import React from 'react';
import styled from 'styled-components';

const IteratedBlogContainer = ({className, children}) => {
  return <article className={className}>{children}</article>;
};

const StyledIteratedBlogContainer = styled(IteratedBlogContainer)`
  display: flex;
  margin-bottom: 2em;
  padding-bottom: 2em;
`;

export default StyledIteratedBlogContainer;
