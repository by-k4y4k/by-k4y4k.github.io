import React from 'react'
import styled from 'styled-components'

const InnerSection = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

const StyledInnerSection = styled(InnerSection)`
  max-width: 960px;
  margin: 0 auto;
  color: white;
  padding: 1rem;
`

export default StyledInnerSection
