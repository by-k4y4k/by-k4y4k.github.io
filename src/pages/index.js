import React from "react";

// Layout imports
import Section from "../components/Layout/Section";
import BackgroundSection from "../components/Layout/BackgroundImageSection";
import HeroContainer from "../components/Layout/HeroContainer";

// Typography imports
import HeroType from "../components/Typography/Hero/HeroType";
import HeroContainer from "../components/Layout/HeroContainer";

import "./../components/layout.scss";
import styled from "styled-components";

const IndexPage = ({ className }) => (
  <main className={className}>
    <BackgroundSection>
      <HeroContainer>
        <HeroType>{"<kayak />"}</HeroType>
      </HeroContainer>
    </BackgroundSection>
    <Section>
      <h1>Yeah Nice</h1>
    </Section>
  </main>
);

const StyledIndexPage = styled(IndexPage)`
  background-color: #2d2d2d;
`;

export default StyledIndexPage;
