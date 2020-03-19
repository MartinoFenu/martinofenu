import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {
        frontmatter: {
          title: {eq: "About" }
        }
      }) {
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
      id="about"
      className="block-wrapper, clipped-background">
      <div className="content-wrapper">
        <h2>About</h2>
        <div
          dangerouslySetInnerHTML={
            {
              __html: data.allMarkdownRemark.edges[0].node.html
            }
          }>
        </div>
      </div>
    </div>
  )
}

export default About;
