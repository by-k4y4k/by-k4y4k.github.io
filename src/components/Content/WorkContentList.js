import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Image from 'gatsby-image';

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
                image {
                  childImageSharp {
                    fluid(maxWidth: 960, background: "#050509") {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              excerpt(format: PLAIN, pruneLength: 50)
              fields {
                slug
              }
            }
            id
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allFile.edges.map(({node}) => (
        <StyledCardContainer key={node.id}>
          <Link to={node.childMarkdownRemark.fields.slug}>
            <StyledCardImage>
              <Image
                fluid={
                  node.childMarkdownRemark.frontmatter.image.childImageSharp
                      .fluid
                }
                alt=''
              />
            </StyledCardImage>
          </Link>
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
