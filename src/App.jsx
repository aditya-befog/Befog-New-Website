import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './compoment/Navbar/navbar';
import Home from './pages/Home/Home'
import Service from './pages/Services/services'
import About from './pages/About Us/about'
import Contact from './pages/Contact Us/contact'
import { Routes, Route } from 'react-router-dom';
import Footer from './compoment/footer/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Service/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
