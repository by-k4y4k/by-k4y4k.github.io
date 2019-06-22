import React from 'react';
import styled from 'styled-components';

const BlogContentList = ({className, children}) => {
  return (
    <div className={className}>
      <p>Blog Content Will Go Here</p>
    </div>
  );
};

const StyledBlogContentList = styled(BlogContentList)``;

export default StyledBlogContentList;
