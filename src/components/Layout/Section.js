import React from 'react';
import styled from 'styled-components';

import InnerSection from './InnerSectionContainer';

const Section = ({className, children}) => {
  return (
    <section className={className}>
      <InnerSection>{children}</InnerSection>
    </section>
  );
};

const StyledSection = styled(Section)`
  width: 100vw;
  min-height: 100vh;
`;

export default StyledSection;
