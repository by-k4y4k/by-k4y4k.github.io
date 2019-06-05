import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = (props, { className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "cover.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage Tag='section' className={className} fluid={imageData}>
          {props.children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StyledBackgroundSection;
