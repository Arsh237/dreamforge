import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const userData = useSelector((state) => state.auth);
  const  basketData = useSelector((state) => state.basket.basket  ) 

  return (
    <header className="header bg-black text-cyan-300 p-4 text-2xl fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-9 h-9">
            <img
              src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689665.jpg?t=st=1720761671~exp=1720765271~hmac=58254623b12712361b991339dbaa1be3cd5e8de6246fe9de78e58ebe0b0a2ebd&w=740"
              alt="Logo"
              className="w-full h-full"
            />
          </div>
          <Link
            to="/"
            className="logo text-cyan-300 text-4xl hover:bg-slate-600 transition duration-1000 px-4"
          >
            Dream Forge
          </Link>
        </div>
        <nav className="nav">
          <ul className="flex space-x-4">
            <li>
              <Link to="/Signup" className="hover:underline hover:bg-slate-600">
                Sign-up
              </Link>
            </li>
            <li>
              <Link to="/Login" className="hover:underline hover:bg-slate-600">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline hover:bg-slate-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:underline hover:bg-slate-600">
                About
              </Link>
            </li>
            <li className="relative flex justify-center items-center">
              <Link to="/Cart" className="hover:underline hover:bg-slate-600">
                Cart
              </Link>
              <div className="absolute bg-slate-500 h-5 w-5 rounded-full flex justify-center items-center top-[-9px] right-[-15px]">
                <span className="text-cyan-300 text-xl">{basketData.length}</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
