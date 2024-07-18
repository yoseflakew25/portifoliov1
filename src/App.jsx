import { BrowserRouter as Router } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/theme';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import MainProjects from './components/MainProjects/MainProjects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import UiProjects from './components/UiProjects/UiProjects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FeatureSection from './components/Feature/FeatureSection';
import Experiance from './components/Experiance/Experiance';

import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  
  

  
  return (
    <Router> {/* Wrap your App component with Router */}
      <div id='top' className={`${themeName} app`}>
        <NavBar />

        <main>
          <Hero />
          <FeatureSection />
          <Skills />
          <Experiance />
          <MainProjects />
          <UiProjects/>
          <Projects />
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
