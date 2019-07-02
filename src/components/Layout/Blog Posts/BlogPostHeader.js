import React from 'react';
import {Link} from 'gatsby';

import Section from '../Section';
import NoMarginParagraph from '../../Typography/Utility/NoMarginParagraph';
// eslint-disable-next-line
import BlinkingTerminalCursor from "../../Typography/Decoration/BlinkingTerminalCursor";

const BlogPostHeader = ({data, location}) => {
  return (
    <Section>
      <NoMarginParagraph>
        <code>{data.markdownRemark.parent.name}.md</code>
        {` - `}
        <code>{data.markdownRemark.timeToRead} minute read</code>
        {` - `}
        <code>{data.markdownRemark.frontmatter.date}</code>
        {` - `}
        <code>{data.markdownRemark.parent.prettySize}</code>
        {` - `}
        <code>
          <Link to="/#work">
            <kbd>$ cd ../ && ls </kbd>
            <BlinkingTerminalCursor />
          </Link>
        </code>
      </NoMarginParagraph>
    </Section>
  );
};


export default BlogPostHeader;
