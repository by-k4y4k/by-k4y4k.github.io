import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';

const AboutSectionContent = ({className}) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "about" } } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
  );
};

const StyledAboutSectionContent = styled(AboutSectionContent)``;

export default StyledAboutSectionContent;
