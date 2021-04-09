import React from 'react'
import './Modal.scss';

export const Modal = ({ handleClose, children }) => {

  return (
    <div className="backdrop" onClick={handleClose}>
      <div className="modal-div">
        <i className="fas fa-times" />
        <div className="child">
          {children}
        </div>
      </div>
    </div>

  )
}