import React from 'react';
import HomePage from './pages/HomePage';
import ScrollBrands from './components/ScrollBrands';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ScrollBrands />
      <Footer />
    </div>
  );
}

export default App;
