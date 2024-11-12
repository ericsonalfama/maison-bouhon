// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
const App = () => {
  return (
    <div>
      <Header />
      <Products />
      <About />
      <Footer />
    </div>
  );
};

export default App;
