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
  border-radius: 10px;
  box-shadow: 5px 5px #915fee;
  border: 3px solid #050509;
  border-left: 0;
  border-top: 0;
`;

export default StyledIteratedBlogImage;
