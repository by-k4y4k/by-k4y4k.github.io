import React from "react";

// Layout imports
import Section from "../components/Layout/Section";
import BackgroundSection from "../components/Layout/BackgroundImageSection";
import HeroContainer from "../components/Layout/HeroContainer";

// Typography imports
import HeroType from "../components/Typography/Hero/HeroType";
import HeroLink from "../components/Typography/Hero/HeroLink";

import "./../components/layout.scss";
import styled from "styled-components";

const IndexPage = ({ className }) => (
  <main className={className}>
    <BackgroundSection>
      <HeroContainer>
        <HeroType>{"<kayak />"}</HeroType>
        <div className='flex-sideways'>
          <HeroLink>work</HeroLink>
          <HeroLink>about</HeroLink>
          <HeroLink>hire</HeroLink>
          <HeroLink>blog</HeroLink>
        </div>
      </HeroContainer>
    </BackgroundSection>
    <Section>
      <h1>Work</h1>
    </Section>
    <Section>
      <h1>About</h1>
    </Section>
    <Section>
      <h1>Hire</h1>
    </Section>
    <Section>
      <h1>Blog</h1>
    </Section>
  </main>
);

const StyledIndexPage = styled(IndexPage)`
  background-color: #2d2d2d;
`;

export default StyledIndexPage;
