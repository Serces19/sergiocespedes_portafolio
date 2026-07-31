import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Projects />
      <Expertise />
      <Experience />
      <About />
      <Certifications />
      <Contact />
    </>
  );
}