import React, { useEffect } from 'react';
import './styles.css';
import initAnimations from './animations.js';
import ScrollEffects from "./components/ScrollEffects";
import GlobalEffects from './components/GlobalEffects.jsx';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import IntroSections from './components/IntroSections.jsx';
import TreatmentSections from './components/TreatmentSections.jsx';
import Approach from './components/Approach.jsx';
import Services from './components/Services.jsx';
import Technology from './components/Technology.jsx';
import Industries from './components/Industries.jsx';
import Projects from './components/Projects.jsx';
import Impact from './components/Impact.jsx';
import ReuseSections from './components/ReuseSections.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <>
      <ScrollEffects />
      <GlobalEffects />
      <Navigation />
      <Hero />
      <IntroSections />
      <TreatmentSections />
      <Approach />
      <Services />
      <Technology />
      <Industries />
      <Projects />
      <Impact />
      <ReuseSections />
      <Contact />
      <Footer />
    </>
  );
}