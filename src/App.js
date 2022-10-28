import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import View from './components/View';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer'

import { useEffect, useState } from 'react';

function App() {


  const count = useSelector((state) => state.counter.count)




  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;



