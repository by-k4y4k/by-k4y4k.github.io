import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import Section from '../Section';

const BlogPostHeader = ({className, children, data}) => {
  return (
    <Section>
      <p>
        <Link to='/#blog'>{'<< go back '}</Link>
      </p>
    </Section>
  );
};

const StyledBlogPostHeader = styled(BlogPostHeader)``;

export default StyledBlogPostHeader;
