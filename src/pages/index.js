import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'gatsby';
import styled from 'styled-components';

import './../components/layout.scss';

// Layout imports
import Section from '../components/Layout/Section';
// eslint-disable-next-line
import BackgroundSection from '../components/Layout/Hero Section/BackgroundImageSection';
import HeroContainer from '../components/Layout/Hero Section/HeroContainer';

// Typography imports
import HeroType from '../components/Typography/Hero/HeroType';

// Content imports
import AboutSectionContent from '../components/Content/AboutSectionContent';
import BlogContentList from '../components/Content/BlogContentList';
import WorkContentList from '../components/Content/WorkContentList';

const IndexPage = ({className}) => (
  <main className={className}>
    <Helmet>
      <html lang='en-au' />
      <meta charSet='utf-8' />
      <title>{'<kayak /> | Web Developer & Designer'}</title>
      <meta
        name='description'
        // eslint-disable-next-line
        content='Aussie web developer and designer availiable for hire. Committed to good code and a good Vegemite sandwich.'
      />
    </Helmet>
    <BackgroundSection>
      <HeroContainer>
        <HeroType>{'<kayak />'}</HeroType>
        <div className='flex-sideways'>
          <Link to='#about' className='hero-link'>
            about
          </Link>
          <Link to='#work' className='hero-link'>
            work
          </Link>
          <Link to='#blog' className='hero-link'>
            blog
          </Link>
        </div>
      </HeroContainer>
    </BackgroundSection>

    <Section>
      <div id='about' />
      <AboutSectionContent />
    </Section>

    <Section>
      <div id='work' />
      <div className='work__card-container'>
        <WorkContentList />
      </div>
    </Section>

    <Section>
      <div id='blog' />
      <BlogContentList />
    </Section>
  </main>
);

const StyledIndexPage = styled(IndexPage)``;

export default StyledIndexPage;
