import React from 'react'
import styled from 'styled-components'

const NoMarginHeader = ({className, children}) => {
  return <h4 className={className}>{children}</h4>
}

const StyledNoMarginHeader = styled(NoMarginHeader)`
  margin-bottom: 0;
`

export default StyledNoMarginHeader
