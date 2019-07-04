import styled from 'styled-components';
import React from 'react';

const IteratedCardButtons = ({className, children, github, demo}) => {
  if (!github || !demo) return null;

  const githubLink = github.replace(/[<>]/g, '');
  const demoLink = demo.replace(/[<>]/g, '');

  return (
    <>
      <p>{githubLink}</p>
      <p>{demoLink}</p>
    </>
  );
};

const StyledIteratedCardButtons = styled(IteratedCardButtons)``;

export default StyledIteratedCardButtons;
