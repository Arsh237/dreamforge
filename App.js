import React from 'react';
import Header from './components/header';
import Login from './pages/Login';
import About from './pages/About';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import View from './pages/View';

function App() {
  return (
  <>
    <Router>
    <Header/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="Cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="View" element={<View />} />
        

      </Routes>

    </Router>
    </>
    ); 
}

export default App;
