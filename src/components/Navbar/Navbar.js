import React from 'react';
import styles from './navbar.module.css';
import scrollToElement from 'scroll-to-element';
import Link from '../Link';

const Navbar = () => {
  let location;
  if(typeof window !== 'undefined') location = window.location.origin;

  const handleClick = ( e, target ) => {
    if(typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -75,
          duration: 1000,
        })
      }
    }
  }
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li><Link
              to={`${location}/#about`}
              onClick={e => handleClick(e, '#about')}>About
            </Link>
        </li>
        <li><Link
              to={`${location}/#projects`}
              onClick={e => handleClick(e, '#projects')}>Projects
            </Link>
        </li>
        <li><Link
              to={`${location}/#contact`}
              onClick={e => handleClick(e, '#contact')}>Contact
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
