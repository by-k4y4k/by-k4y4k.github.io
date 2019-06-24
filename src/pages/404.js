import React from 'react';
import SEO from '../components/seo';

import Section from '../components/Layout/Section';
import './../components/layout.scss';
import {Link} from 'gatsby';

const NotFoundPage = () => (
  <Section>
    <SEO title='404: Not found' />
    <h1>WHUH OH</h1>
    <p>Yeah, nah, that page isn&apos;t here.</p>
    <p>
      <Link to='/'>{'<< go back'}</Link>
    </p>
  </Section>
);

export default NotFoundPage;
