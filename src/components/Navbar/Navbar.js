import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/LOGO_CRIS.svg';
import Contact from '../../pages/Contact/Contact';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import * as route from '../../routes/routes';

import './Navbar.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [openModalContact, setOpenModalContact] = useState(false);
  const handleOpenContact = () => setOpenModalContact(!openModalContact);
  const handleCloseContact = (e) => {
    const { className: el } = e.target;
    if (el !== "backdrop" && el !== "fas fa-times")
      return;
    setOpenModalContact(!openModalContact);
  };

  const handleShowHideMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={route.HOME} className="navbar-logo-container">
          <Logo className="navbar-logo" />
        </Link>
        <Link to={route.HOME} className="navbar-logo-p">Cristina Picatoste</Link>
        <div className="navbar-icons-mobile">
          {!showMenu && <ExpandMoreIcon onClick={handleShowHideMenu} />}
          {showMenu && <ExpandLessIcon onClick={handleShowHideMenu} />}
        </div>
      </div>
      <div className="navbar-options">
        <Link to={route.HOME} className="navbar-option">HOME</Link>
        <Link to={route.PORTFOLIO} className="navbar-option">PORTFOLIO</Link>
        <Link to={route.ABOUT} className="navbar-option">ABOUT</Link>
        <Button onClick={handleOpenContact} variant="blue-sky" size="130px">
          CONTACT
        </Button>
      </div>

      {
        showMenu &&
        <div className="navbarMobile-options">
          <Link to={route.HOME} className="navbarMobile-option" onClick={handleShowHideMenu} >HOME</Link>
          <Link to={route.PORTFOLIO} className="navbarMobile-option" onClick={handleShowHideMenu} >PORTFOLIO</Link>
          <Link to={route.ABOUT} className="navbarMobile-option" onClick={handleShowHideMenu} >ABOUT</Link>
          <Link to={route.CONTACT} className="navbarMobile-option" onClick={handleShowHideMenu} >CONTACT</Link>
        </div>
      }

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
