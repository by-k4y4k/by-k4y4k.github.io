import styled from 'styled-components'
import React from 'react'

import StyledGitHubButton from '../../Typography/Decoration/GitHubButton'
import StyledDemoButton from '../../Typography/Decoration/DemoButton'

const IteratedCardButtons = ({className, children, github, demo}) => {
  if (!github || !demo) return null

  const githubLink = github.replace(/[<>]/g, '')
  const demoLink = demo.replace(/[<>]/g, '')

  return (
    <div className={className}>
      <StyledGitHubButton githubLink={githubLink} />
      <StyledDemoButton demoLink={demoLink} />
    </div>
  )
}

const StyledIteratedCardButtons = styled(IteratedCardButtons)`
  margin: 15px 0;
`

export default StyledIteratedCardButtons
