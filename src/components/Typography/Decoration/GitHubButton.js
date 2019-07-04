import React from 'react';
import styled from 'styled-components';

import {FiGithub} from 'react-icons/fi';

const GitHubButton = ({className, children, githubLink}) => {
  return (
    <a className={className} href={githubLink}>
      <FiGithub /> GitHub
    </a>
  );
};

const StyledGitHubButton = styled(GitHubButton)``;

export default StyledGitHubButton;
