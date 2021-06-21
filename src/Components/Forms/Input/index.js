import React from 'react';
import './index.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="erro">{error}</p>}
    </div>
  );
};

export default Input;
