import React from 'react';
import NavBar      from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import EmailLink   from './components/EmailLink';
import Hero        from './components/Hero';
import About       from './components/About';
import Experience  from './components/Experience';
import Work        from './components/Work';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SocialLinks />
      <EmailLink />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
