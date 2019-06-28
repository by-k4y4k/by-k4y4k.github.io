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
  max-width: 100%; 
  width:90%;
  min-height: auto;
  padding: 2em 0;
  margin: 0 auto;
`;

export default StyledSection;
