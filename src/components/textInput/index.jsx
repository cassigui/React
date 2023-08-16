import "./styles.css"
import P from "prop-types"
import React from 'react';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      placeholder='Pesquisar:'
      className='text-input'
      type="search"
      value={searchValue}
      onChange={handleChange}
    />
  );
}

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}
