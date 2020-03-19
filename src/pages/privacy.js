import React from 'react';
import Helmet from "react-helmet";
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
