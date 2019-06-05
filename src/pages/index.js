import React from "react";

import Section from "../components/Layout/Section";
import BackgroundSection from "../components/Layout/BackgroundImageSection";
import "./../components/layout.scss";

const IndexPage = () => (
  <>
    <BackgroundSection>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </BackgroundSection>
    <Section>
      <h1>Yeah Nice</h1>
    </Section>
 
  </>
);

export default IndexPage;
