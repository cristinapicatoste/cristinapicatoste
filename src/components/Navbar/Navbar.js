import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/LOGO_CRIS.svg';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">        
        <Link to="/" className="navbar-logo-container">
          <Logo className="navbar-logo" />
        </Link>
        <p>Cristina Picatoste</p>
      </div>
      <div className="navbar-options">
        <Link to="/portfolio" className="navbar-option">PORTFOLIO</Link>
        <Link to="/about" className="navbar-option">ABOUT</Link>
        <Link to="/contact" className="navbar-option">CONTACT</Link>
        {/* {
          currentUser
          ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link to="/signin" className="option">SIGN IN</Link>
        } */}
      </div>
    </nav>
  )
}

export default Navbar
