import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
