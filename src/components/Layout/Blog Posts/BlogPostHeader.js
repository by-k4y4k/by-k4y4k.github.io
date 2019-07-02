import React from "react";
import { Link } from "gatsby";

import Section from "../Section";
import NoMarginParagraph from "../../Typography/Utility/NoMarginParagraph";
// eslint-disable-next-line
import BlinkingTerminalCursor from "../../Typography/Decoration/BlinkingTerminalCursor";

const BlogPostHeader = ({ data, location }) => {
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
          <CDandLS location={location}>
            <kbd>$ cd ../ && ls </kbd>
            <BlinkingTerminalCursor />
          </CDandLS>
        </code>
      </NoMarginParagraph>
    </Section>
  );
};

// FIXME: pop out

const CDandLS = ({ children, location }) => {
  if (location.state.fromWork) {
    return <Link to='/#work'> {children}</Link>;
  } else if (location.state.fromBlog) {
    return <Link to='/#blog'>{children}</Link>;
  } else {
    return <Link to='/'>{children}</Link>;
  }
};

export default BlogPostHeader;
