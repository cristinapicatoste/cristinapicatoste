import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/LOGO_CRIS.svg';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-container">
        <Logo className="navbar-logo" />
      </Link>
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
