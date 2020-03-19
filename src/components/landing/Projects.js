import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './projects.module.css';

const Projects = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {
        frontmatter: {
          type: {eq: "project" }
        }
      }) {
        edges {
          node {
            frontmatter {
              title
              livePreview
              sourceCode
            }
            html
          }
        }
      }
    }
  `);
  return (
    <div
      className="block-wrapper content-wrapper"
      id="projects">
      <h2>Projects</h2>
      <div className={styles.projectsWrapper}>
        {data.allMarkdownRemark.edges.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              html={project.node.html}
              title={project.node.frontmatter.title}
              sourceCode={project.node.frontmatter.sourceCode}
              livePreview={project.node.frontmatter.livePreview}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;
