import React from 'react';

// Hero Links
import {Link} from 'gatsby';

// Layout imports
import Section from '../components/Layout/Section';
import BackgroundSection from '../components/Layout/Hero Section/BackgroundImageSection';
import HeroContainer from '../components/Layout/Hero Section/HeroContainer';
import CardContainer from '../components/Layout/Masonry Grid/CardContainer';

// Typography imports
import HeroType from '../components/Typography/Hero/HeroType';

// Content imports
import AboutSectionContent from '../components/Content/AboutSectionContent';
import HireSectionContent from '../components/Content/HireSectionContent';

import './../components/layout.scss';
import styled from 'styled-components';

const IndexPage = ({className}) => (
  <main className={className}>
    <BackgroundSection>
      <HeroContainer>
        <HeroType>{'<kayak />'}</HeroType>
        <div className='flex-sideways'>
          <Link to='#work' className='hero-link'>
            work
          </Link>
          <Link to='#about' className='hero-link'>
            about
          </Link>
          <Link to='#hire' className='hero-link'>
            hire
          </Link>
          <Link to='#blog' className='hero-link'>
            blog
          </Link>
        </div>
      </HeroContainer>
    </BackgroundSection>
    <Section>
      <h1 id='work'>Work</h1>
      <div className='work__card-container'>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
      </div>
    </Section>
    <Section>
      <h1 id='about'>About</h1>
      <AboutSectionContent></AboutSectionContent>
    </Section>
    <Section>
      <h1 id='hire'>Hire</h1>
      <HireSectionContent></HireSectionContent>
    </Section>
    <Section>
      <h1 id='blog'>Blog</h1>
    </Section>
  </main>
);

const StyledIndexPage = styled(IndexPage)`
  background-color: #050509;
`;

export default StyledIndexPage;
