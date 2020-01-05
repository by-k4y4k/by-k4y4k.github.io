import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from '../Section'
import NoMarginParagraph from '../../Typography/Utility/NoMarginParagraph'
// eslint-disable-next-line
import BlinkingTerminalCursor from '../../Typography/Decoration/BlinkingTerminalCursor'

const BlogPostFooter = ({ className }) => {
  return (
    <Section className={className}>
      <NoMarginParagraph>
        All done?
        {'  '}
        <code>
          <Link to='/#blog'>
            <kbd>$ cd ../ && ls </kbd>
            <BlinkingTerminalCursor />
          </Link>
        </code>
      </NoMarginParagraph>
    </Section>
  )
}

const StyledBlogPostFooter = styled(BlogPostFooter)`
  text-align: right;
  color: red;
`

export default StyledBlogPostFooter
