import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeroLink = ({ className, children }) => {
  return <Link className={className}>{children}</Link>;
};

const StyledHeroLink = styled(HeroLink)`
  color: white;
  text-transform: uppercase;
  font-family: "Fira Sans", sans-serif !important;
  align-self: flex-start; /* make links be width of themselves, not container */
  text-decoration: none;
`;

export default StyledHeroLink;
