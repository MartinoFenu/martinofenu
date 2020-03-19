import React from 'react';
import Link from '../Link';
import { graphql, useStaticQuery } from 'gatsby';
import TwitterIcon from '../../assets/icons/twitter.inline.svg';
import GithubIcon from '../../assets/icons/github.inline.svg';
import styles from './footer.module.css';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            twitterLink
            github
            telegram
          }
        }
      }
    }
  `)
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <span>
          &copy;{` `}
          <Link to="/">{data.site.siteMetadata.author}</Link>
        </span>
        <div className={styles.socialLinks}>
          <Link to={data.site.siteMetadata.social.github}>
            <GithubIcon className="icons" alt="github" />
          </Link>
          <Link to={data.site.siteMetadata.social.twitterLink}>
            <TwitterIcon className="icons" alt="twitter" />
          </Link>
        </div>
        <span>
          <Link to="/privacy">Privacy Policy</Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer;
