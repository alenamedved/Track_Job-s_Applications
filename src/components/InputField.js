import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function InputField({ name, label, onChange, value }) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={name === 'password' ? 'password' : 'text'}
      id={name}
      autoFocus={name !== 'password'}
    />
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputField;
