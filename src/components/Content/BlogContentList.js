import React from 'react';
import styled from 'styled-components';
import {Link, useStaticQuery, graphql} from 'gatsby';

import IteratedBlogContainer from '../Layout/Blogroll/IteratedBlogContainer';
// eslint-disable-next-line
import IteratedBlogTextContainer from '../Layout/Blogroll/IteratedBlogTextContainer';
import IteratedBlogImageContainer from '../Layout/Blogroll/IteratedBlogImage';
import NoMarginParagraph from '../Typography/Utility/NoMarginParagraph';
import NoMarginHeader from '../Typography/Utility/NoMarginHeader';

const BlogContentList = ({className}) => {
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
              excerpt(format: PLAIN, pruneLength: 150, truncate: true)
              id
              fields {
                slug
              }
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
            <NoMarginHeader>
              {node.childMarkdownRemark.frontmatter.title}
            </NoMarginHeader>
            <NoMarginParagraph>
              {node.childMarkdownRemark.excerpt}
            </NoMarginParagraph>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <NoMarginParagraph accent='true'>
                Posted on {node.childMarkdownRemark.frontmatter.date}
              </NoMarginParagraph>
              <NoMarginParagraph>
                <Link to={node.childMarkdownRemark.fields.slug}>
                  {'Read More >>'}
                </Link>
              </NoMarginParagraph>
            </div>
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
