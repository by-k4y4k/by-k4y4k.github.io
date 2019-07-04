import React from 'react';
import styled from 'styled-components';

import { FiGlobe } from 'react-icons/fi';

const DemoButton = ({className, children, demoLink}) => {
  return (
    <a className={className} href={demoLink}>
      <FiGlobe /> Demo
    </a>
  );
};

const StyledDemoButton = styled(DemoButton)``;

export default StyledDemoButton;
