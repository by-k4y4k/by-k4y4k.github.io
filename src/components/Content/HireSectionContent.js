import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';

const HireSectionContent = ({className}) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "hire" } } }) {
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

const StyledHireSectionContent = styled(HireSectionContent)``;

export default StyledHireSectionContent;
