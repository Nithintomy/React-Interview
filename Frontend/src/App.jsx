import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import SinglePageView from './components/SinglePageView';


function App() {
  return (
    <Router>
      <div className='bg-gray-100'>
        <Navbar />
        <Hero />
        <Routes> 
          <Route path="/" element={<div className="flex flex-row text-black p-2  m-5"><ProductList /></div>} /> 
          <Route path="/products/:id" element={<SinglePageView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
