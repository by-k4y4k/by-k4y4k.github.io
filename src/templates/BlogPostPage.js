import React from 'react';
import {Link, graphql} from 'gatsby';
import styled from 'styled-components';

import Section from '../components/Layout/Section';
import BlogPostHeader from '../components/Layout/Blog Posts/BlogPostHeader';

const BlogPostPage = ({className, data}) => {
  const post = data.markdownRemark;
  return (
    <main className={`${className} blog`}>
      <BlogPostHeader data={data}/>
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
        date
      }
      timeToRead
      wordCount {
        words
      }
      parent {
        ... on File {
          prettySize
          name
        }
      }
 
 
    }
  }
`;

const StyledBlogPostPage = styled(BlogPostPage)``;

export default StyledBlogPostPage;
