import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import Section from '../Section';
import NoMarginParagraph from '../../Typography/Utility/NoMarginParagraph';

const BlogPostHeader = ({className, children, data}) => {
  console.log(data);
  return (
    <Section>
      <p>
        <code>{data.markdownRemark.parent.name}.md</code>
        {` - `}
        <code>{data.markdownRemark.timeToRead} minute read</code>
        {` - `}
        <code>{data.markdownRemark.frontmatter.date}</code>
        {` - `}
        <code>{data.markdownRemark.parent.prettySize}</code>
      </p>
      <NoMarginParagraph>
        <kbd>$ cd ../</kbd>
      </NoMarginParagraph>
    </Section>
  );
};

const StyledBlogPostHeader = styled(BlogPostHeader)``;

export default StyledBlogPostHeader;
