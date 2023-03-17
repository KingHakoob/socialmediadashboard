import React from 'react';
import './switch.css';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span 
        style={{ background: isOn && 'hsl(0, 0%, 100%)' }}
        className={`react-switch-button`} 
        />
      </label>
    </>
  );
};

export default Switch;