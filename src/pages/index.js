import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Section from "../components/Layout/Section";

const IndexPage = () => (
  <>
    <Section>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <Image />
    </Section>
    <Section>
      <h1>Yeah Nice</h1>
    </Section>
  </>
);

export default IndexPage;
