import React from "react";
import SEO from "../components/Seo";
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Hero from '../components/landing/Hero';
import Projects from '../components/landing/Projects';
import '../styles/styles.css';

const Home = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default Home;
