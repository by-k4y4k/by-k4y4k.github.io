import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Image from 'gatsby-image';

import CardContainer from '../Layout/Masonry Grid/IteratedCardContainer';
import NoMarginHeader from '../Typography/Utility/NoMarginHeader';
import NoMarginParagraph from '../Typography/Utility/NoMarginParagraph';
import CardImage from '../Layout/Masonry Grid/IteratedCardImage';
// eslint-disable-next-line
import StyledIteratedCardButtons from '../Layout/Masonry Grid/IteratedCardButtons';

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
        <CardContainer key={node.id}>
          <Link
            to={node.childMarkdownRemark.fields.slug}
            state={{fromWork: true}}
          >
            <CardImage>
              <Image
                fluid={
                  node.childMarkdownRemark.frontmatter.image.childImageSharp
                      .fluid
                }
                alt=''
              />
            </CardImage>
          </Link>
          <NoMarginHeader>
            {node.childMarkdownRemark.frontmatter.title}
          </NoMarginHeader>
          <NoMarginParagraph>
            {node.childMarkdownRemark.excerpt}
          </NoMarginParagraph>
          <StyledIteratedCardButtons
            github={node.childMarkdownRemark.frontmatter.github}
            demo={node.childMarkdownRemark.frontmatter.demo}
          />
        </CardContainer>
      ))}
    </>
  );
};

const StyledWorkContentList = styled(WorkContentList)``;

export default StyledWorkContentList;
