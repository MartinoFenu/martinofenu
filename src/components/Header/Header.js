import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from '../Navbar/Navbar';
import Link from '../Link';
import styles from './header.module.css';
import Logo from '../../assets/icons/logo.inline.svg';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          owner
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerBranding}>
          <Link to="/" className={styles.logoLink}>
            <Logo className={styles.logoHeader} alt="logo" />
            {data.site.siteMetadata.owner}
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header;
