import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Challenges from './components/Challenges';
import Problems from './components/Problems';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Challenges />
      <Problems />
      <Footer />
    </>
  );
};

export default App;
