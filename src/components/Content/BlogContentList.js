import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';

import IteratedBlogContainer from '../Layout/Blogroll/IteratedBlogContainer';
// eslint-disable-next-line
import IteratedBlogTextContainer from '../Layout/Blogroll/IteratedBlogTextContainer';
import IteratedBlogImageContainer from '../Layout/Blogroll/IteratedBlogImage';

const BlogContentList = ({className, children}) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { glob: "*/blog/*" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                date
              }
              excerpt(format: PLAIN, pruneLength: 33, truncate: true)
              id
            }
          }
        }
        totalCount
      }
    }
  `);

  return (
    <>
      {data.allFile.edges.map(({node}) => (
        <IteratedBlogContainer
          className={className}
          key={node.childMarkdownRemark.id}
        >
          <IteratedBlogImageContainer></IteratedBlogImageContainer>
          <IteratedBlogTextContainer>
            <h4>{node.childMarkdownRemark.frontmatter.title}</h4>
            <p>{node.childMarkdownRemark.excerpt}</p>
            <p>Posted on {node.childMarkdownRemark.frontmatter.date}</p>
          </IteratedBlogTextContainer>
        </IteratedBlogContainer>
      ))}
    </>
  );
};

const StyledBlogContentList = styled(BlogContentList)`
  border-bottom: 3px solid #915fee;
`;

export default StyledBlogContentList;
