import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/LOGO_CRIS.svg';
import Contact from '../../pages/Contact/Contact';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import * as route from '../../routes/routes';

import './NavbarMobile.scss';

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [openModalContact, setOpenModalContact] = useState(false);
  const handleOpenContact = () => setOpenModalContact(!openModalContact);
  const handleCloseContact = (e) => {
    const { className: el } = e.target;
    if (el !== "backdrop" && el !== "fas fa-times")
      return;
    setOpenModalContact(!openModalContact);
    setShowMenu(!showMenu);

  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleCloseMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbarMobile">
      <div className="navbarMobile-logo">
        <Link to={route.HOME} className="navbarMobile-logo-container">
          <Logo />
        </Link>
      </div>
      <Link to={route.HOME} className="navbarMobile-logo-p">Cristina Picatoste</Link>
      {!showMenu && <ExpandMoreIcon onClick={handleShowMenu} />}
      {showMenu && <ExpandLessIcon onClick={handleCloseMenu} />}
      {
        showMenu &&
        <div className="navbarMobile-options">
          <Link to={route.HOME} className="navbarMobile-option" onClick={handleCloseMenu} >HOME</Link>
          <Link to={route.PORTFOLIO} className="navbarMobile-option" onClick={handleCloseMenu} >PORTFOLIO</Link>
          <Link to={route.ABOUT} className="navbarMobile-option" onClick={handleCloseMenu} >ABOUT</Link>
          <Button onClick={handleOpenContact} variant="blue-sky" size="130px">
            CONTACT
          </Button>
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

export default NavbarMobile
