import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/LOGO_CRIS.svg';
import Contact from '../../pages/Contact/Contact';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import * as route from '../../routes/routes';

import './Navbar.scss';

const Navbar = () => {

  const [openModalContact, setOpenModalContact] = useState(false);
  const handleOpenContact = () => setOpenModalContact(!openModalContact);
  const handleCloseContact = (e) => {
    const { className: el } = e.target;
    if (el !== "backdrop" && el !== "fas fa-times")
      return;
    setOpenModalContact(!openModalContact);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">       
        <Link to={route.HOME} className="navbar-logo-container">
          <Logo className="navbar-logo" />
        </Link>
        <Link to={route.HOME} className="navbar-logo-p">Cristina Picatoste</Link>
      </div>
      <div className="navbar-options">
        <Link to={route.HOME} className="navbar-option">HOME</Link>
        <Link to={route.PORTFOLIO} className="navbar-option">PORTFOLIO</Link>
        <Link to={route.ABOUT} className="navbar-option">ABOUT</Link>
        <Button onClick={handleOpenContact} variant="pink-or" size="110px">
          CONTACT
        </Button>
      </div>

      {openModalContact && (
        <Modal handleClose={handleCloseContact}>
          <Contact
            handleCloseContact={handleCloseContact}
          />
        </Modal>
      )}
    </nav>
  )
}

export default Navbar
