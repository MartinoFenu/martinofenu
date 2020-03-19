import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Link from './Link';
import CookieConsent from "react-cookie-consent";
import styles from './layout.module.css';

const Layout = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.midWrapper}>
        <Header />
        <main className={styles.main}>
          {props.children}
        </main>
      </div>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#ffffff", color: "#000000", borderTop: "0.01em solid #cccccc" }}
        buttonStyle={{ background: "#000000", fontSize: "0.8rem", color: "#ffffff" }}
        expires={30} >
        This website uses cookies to enhance the user experience.{" "} No personal information is stored. For more information read the <Link to="/privacy">Privacy Policy</Link>
      </CookieConsent>
    </div>
  )
}

export default Layout;
