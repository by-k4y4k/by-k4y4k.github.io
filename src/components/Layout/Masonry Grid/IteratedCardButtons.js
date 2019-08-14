import styled from 'styled-components'
import React from 'react'

import GitHubButton from '../../Typography/Decoration/GitHubButton'
import DemoButton from '../../Typography/Decoration/DemoButton'


const IteratedCardButtons = ({className, children, github, demo}) => {
  if ((!github && !demo) || (github === null && demo === null)) return null

  const githubLink = github.replace(/[<>]/g, '')
  const demoLink = demo.replace(/[<>]/g, '')

  // TODO: refactor this
  if (!githubLink || githubLink === null) {
    return (<div className={className}>
      <DemoButton demoLink={demoLink}></DemoButton>
    </div>)
  }

  if (!demoLink || demoLink === null) {
    return (<div className={className}>
      <GitHubButton githubLink={githubLink}></GitHubButton>
    </div>)
  }

  return (
    <div className={className}>
      <GitHubButton githubLink={githubLink} />
      <DemoButton demoLink={demoLink} />
    </div>
  )
}

const StyledIteratedCardButtons = styled(IteratedCardButtons)`
  margin: 15px 0;
`

export default StyledIteratedCardButtons
