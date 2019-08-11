import React from 'react'
import styled, {keyframes} from 'styled-components'

const BlinkingTerminalCursor = ({className, children}) => {
  return <span className={className}>▎</span>
}

// Create the keyframes
const blinkKeyframes = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: inherit;
  }
`

const StyledBlinkingTerminalCursor = styled(BlinkingTerminalCursor)`
  display: inline-block;
  animation: ${blinkKeyframes} 1.5s infinite;
`

export default StyledBlinkingTerminalCursor
