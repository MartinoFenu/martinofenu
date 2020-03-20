import React from 'react';
import Helmet from "react-helmet";
import SEO from "../components/Seo";
import { useStaticQuery, graphql } from "gatsby";

const Privacy = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {
          frontmatter: {
            title: {eq: "Privacy Policy" }
          }
        }) {
          edges {
            node {
              html
            }
          }
        }
      }
    `
  )
  return (
    <>
      <SEO title="Privacy policy"/>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="block-wrapper, content-wrapper">
        <div
          dangerouslySetInnerHTML={
            {
              __html: data.allMarkdownRemark.edges[0].node.html
            }
          }>
        </div>
      </div>
    </>
  )
};

export default Privacy;
