import React, { useState } from 'react';
import './App.css';

import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderFinish = () => {
    setShowLoader(false);
  };

  return (
    <div className="App">
      {showLoader ? (
        <Loader onFinish={handleLoaderFinish} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
