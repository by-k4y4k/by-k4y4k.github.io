import React from "react";
import styled from "styled-components";

const HeroContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledHeroContainer = styled(HeroContainer)`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

export default StyledHeroContainer;
