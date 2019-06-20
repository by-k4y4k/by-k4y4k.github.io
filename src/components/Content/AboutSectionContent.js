import React from 'react';
import styled from 'styled-components';

const AboutSectionContent = ({className, children}) => {
  return <p className={className}>content</p>;
};

const StyledAboutSectionContent = styled(AboutSectionContent)``;

export default StyledAboutSectionContent;
