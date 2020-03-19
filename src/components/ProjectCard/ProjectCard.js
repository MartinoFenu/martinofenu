import React from 'react';
import Link from '../Link';
import ExternalLinkIcon from '../../assets/icons/link.inline.svg';
import GithubIcon from '../../assets/icons/github.inline.svg';
import styles from './projectCard.module.css';

const ProjectCard = ({ title, html, sourceCode, livePreview }) => {
  return(
    <div className={styles.card}>
      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={
        {
          __html: html
        }
      } />
      <div className={styles.cardLinks}>
        <Link to={sourceCode}>
          <GithubIcon className="icons" alt="github" />
          Source
        </Link>
        <Link to={livePreview}>
          <ExternalLinkIcon className="icons" alt="external link icon" />
          Live demo
        </Link>
      </div>
    </div>
  )
};

export default ProjectCard;
