import React from 'react';
import "./Button.scss";

export const Button = ({ onClick, variant, size, children,...otherProps}) => {
  return (
    <button
      onClick={onClick}
      className={variant}
      style={{ width: size }}
      {...otherProps}
    >
      {children}
    </button>
  )
}

