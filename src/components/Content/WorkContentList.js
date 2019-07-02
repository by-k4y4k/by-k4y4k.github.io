import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import StyledCardContainer from '../Layout/Masonry Grid/IteratedCardContainer';
import StyledNoMarginHeader from '../Typography/Utility/NoMarginHeader';
import StyledNoMarginParagraph from '../Typography/Utility/NoMarginParagraph';
import StyledCardImage from '../Layout/Masonry Grid/IteratedCardImage';

const WorkContentList = ({className, children}) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { glob: "*/cards/*" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                date
                title
                github
                demo
              }
              excerpt(format: PLAIN, pruneLength: 50)
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allFile.edges.map(({node}) => (
        <StyledCardContainer>
          <StyledCardImage />
          <StyledNoMarginHeader>
            {node.childMarkdownRemark.frontmatter.title}
          </StyledNoMarginHeader>
          <StyledNoMarginParagraph>
            {node.childMarkdownRemark.excerpt}
          </StyledNoMarginParagraph>
          <StyledNoMarginParagraph accent='true'>
            {'HTML, CSS, JavaScript'}
          </StyledNoMarginParagraph>
        </StyledCardContainer>
      ))}
    </>
  );
};

const StyledWorkContentList = styled(WorkContentList)``;

export default StyledWorkContentList;
