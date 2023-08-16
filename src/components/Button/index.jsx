import P from "prop-types";
import "./style.css"
import React from 'react';

export const Button = ({ text, onclick, disabled = false }) => (
  <button className="btn" onClick={onclick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  text: P.string.isRequired,
  onclick: P.func.isRequired,
  disabled: P.bool
}
