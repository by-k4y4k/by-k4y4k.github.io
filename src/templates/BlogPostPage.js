import React from 'react';
import {Link, graphql} from 'gatsby';

import Section from '../components/Layout/Section';

const BlogPostPage = ({data}) => {
  const post = data.markdownRemark;
  return (
    <main>
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

export default BlogPostPage;
