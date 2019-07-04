import React from 'react';
import styled from 'styled-components';

import {FiGithub} from 'react-icons/fi';
import {IconContext} from 'react-icons';

const GitHubButton = ({className, children, githubLink}) => {
  return (
    <IconContext.Provider value={{className: 'react-icons'}}>
      <a className={className} href={githubLink}>
        <FiGithub /> GitHub
      </a>
    </IconContext.Provider>
  );
};

const StyledGitHubButton = styled(GitHubButton)`
  font-size: 1.8em;
  font-family: 'Fira Sans';
  text-transform: uppercase;
  border: 1px solid #915fee;
  padding: 5px 10px;
  margin: 0 5px 0 0;
  letter-spacing: 3px;
`;

export default StyledGitHubButton;
