import React from 'react'
import styled from 'styled-components'

const HeroType = ({className, children}) => {
  return <h1 className={className}>{children}</h1>
}

const StyledHeroType = styled(HeroType)`
  color: white;
  text-align: center;
  align-self: center;
  justify-content: center;
  font-size: 12.5vw;
  /* account for POTENTIALLY GIANT TYPE */
  margin-bottom: 7.5vw;
`

export default StyledHeroType
