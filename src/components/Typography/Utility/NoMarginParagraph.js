import React from 'react'
import styled from 'styled-components'

const NoMarginParagraph = ({ className, children }) => {
  return <p className={className}>{children}</p>
}

const StyledNoMarginParagraph = styled(NoMarginParagraph)`
  margin-bottom: 0;
  color: ${props => (props.accent ? '#915fee' : null)};
`

export default StyledNoMarginParagraph
