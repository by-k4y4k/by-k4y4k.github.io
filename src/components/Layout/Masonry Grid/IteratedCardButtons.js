import styled from 'styled-components';
import React from 'react';

import StyledGitHubButton from '../../Typography/Decoration/GitHubButton';
import StyledDemoButton from '../../Typography/Decoration/DemoButton';

const IteratedCardButtons = ({className, children, github, demo}) => {
  if (!github || !demo) return null;

  const githubLink = github.replace(/[<>]/g, '');
  const demoLink = demo.replace(/[<>]/g, '');

  return (
    <>
      <StyledGitHubButton githubLink={githubLink} />
      <StyledDemoButton demoLink={demoLink} />
    </>
  );
};

const StyledIteratedCardButtons = styled(IteratedCardButtons)``;

export default StyledIteratedCardButtons;
