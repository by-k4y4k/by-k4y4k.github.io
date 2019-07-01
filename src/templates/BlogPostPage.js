import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

import Section from '../components/Layout/Section';
import BlogPostHeader from '../components/Layout/Blog Posts/BlogPostHeader';
import BlogPostFooter from '../components/Layout/Blog Posts/BlogPostFooter';

const BlogPostPage = ({className, data}) => {
  const post = data.markdownRemark;
  return (
    <main className={`${className} blog`}>
      <Helmet>
        <html lang='en-au' />
        <meta charSet='utf-8' />
        <title>
          {`${post.frontmatter.title} | <kayak /> | Web Developer & Designer`}
        </title>
        <meta name='description' content={data.markdownRemark.excerpt} />
      </Helmet>
      <BlogPostHeader data={data} />
      <Section>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </Section>
      <BlogPostFooter />
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
      excerpt
    }
  }
`;

const StyledBlogPostPage = styled(BlogPostPage)``;

export default StyledBlogPostPage;
