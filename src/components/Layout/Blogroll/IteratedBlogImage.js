import React from 'react';
import styled from 'styled-components';

const IteratedBlogImage = ({className, children}) => {
  return (
    <img className={className} src='https://placedog.net/711/400?random'></img>
  );
};

const StyledIteratedBlogImage = styled(IteratedBlogImage)``;

export default StyledIteratedBlogImage;
