import './App.css';
import Home from './components/Home';
import View from './components/View';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Api from './context/Api';
import { useSelector } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


function App() {

  const count = useSelector((state) => state.counter.count)

  const stylingComp = {
    textDecoration: "none",
    color: "aqua",
}
  const stylingCart = {
    textDecoration: "none",
    color: "white",
}


  return (
    <BrowserRouter>
      <Api>
        <div className='navMain'>
          <Link to="/" style={stylingComp}><h3 id='navTitle'>Youssouf's Store</h3></Link>
          <div>
            <ul className='navChild'>
              <li><Link to='/home' style={stylingComp}>Home</Link></li>
              <li><Link to='/contact' style={stylingComp}>Contact</Link></li>
              <li><Link to='/about' style={stylingComp}>About</Link></li>
              <li><Link to='/cart' style={stylingCart}>🛒{count}</Link></li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/home' element={<Home />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </Api>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;



