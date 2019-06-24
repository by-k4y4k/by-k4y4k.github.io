import React from 'react';
import styled from 'styled-components';

const IteratedBlogImage = ({className, children}) => {
  return (
    <img className={className} src='https://placedog.net/711/400?random'></img>
  );
};

const StyledIteratedBlogImage = styled(IteratedBlogImage)`
  max-width: 33%;
  height: 100%;
  align-self: center;
  margin-right: 20px;
`;

export default StyledIteratedBlogImage;
