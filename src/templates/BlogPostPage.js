import React from 'react';
import {Link, graphql} from 'gatsby';
import styled from 'styled-components';

import Section from '../components/Layout/Section';

const BlogPostPage = ({className, data}) => {
  const post = data.markdownRemark;
  return (
    <main className={`${className} blog`}>
      <Section>
        <p>
          <Link to='/#blog'>{'<< go back'}</Link>
        </p>
      </Section>

      <Section>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </Section>
    </main>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;


const StyledBlogPostPage = styled(BlogPostPage
)``;

export default StyledBlogPostPage;
