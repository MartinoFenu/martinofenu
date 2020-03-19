import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {
        frontmatter: {
          title: {eq: "Hero" }
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
      className="block-wrapper, content-wrapper"
      id="hero"
      dangerouslySetInnerHTML={
        {
          __html: data.allMarkdownRemark.edges[0].node.html
        }
      }>
    </div>
  )
}

export default Hero;
