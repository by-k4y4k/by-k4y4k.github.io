import React from 'react'
import styled from 'styled-components'

import {FiGlobe} from 'react-icons/fi'
import {IconContext} from 'react-icons'

const DemoButton = ({className, children, demoLink}) => {
  return (
    <IconContext.Provider value={{className: 'react-icons'}}>
      <a className={className} href={demoLink}>
        <FiGlobe /> Demo
      </a>
    </IconContext.Provider>
  )
}

const StyledDemoButton = styled(DemoButton)`
  font-size: 1.8em;
  font-family: 'Fira Sans';
  text-transform: uppercase;
  border: 1px solid #915fee;
  padding: 5px 10px;
  margin: 0 5px;
  letter-spacing: 3px;
`

export default StyledDemoButton
