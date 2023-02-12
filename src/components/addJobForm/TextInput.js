import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function TextInput({ value, label, name, disabled, onChange }) {
  return (
    <TextField
      value={value}
      id={label}
      label={label}
      placeholder={label}
      required={name === 'jobTitle' || name === 'company'}
      variant="outlined"
      size="normal"
      name={name}
      fullWidth
      disabled={disabled}
      onChange={(e) => onChange(e)}
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
export default TextInput;
