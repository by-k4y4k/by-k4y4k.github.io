import React from "react";
import styled from "styled-components";

const Section = ({ className, children }) => {
  return (
    <section style={{ width: "100vw", minHeight: "100vh" }}>
      {props.children}
    </section>
  );
};

const StyledSection = styled(Section)`
  width: 100vw;
  min-height: 100vh;
`;

export default StyledSection;
