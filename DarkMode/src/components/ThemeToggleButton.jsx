// ThemeToggleButton.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { ChangeTheme } = useContext(ThemeContext);
  return (
    <button onClick={ChangeTheme} >
       Change color
    </button>
  );
};

export default ThemeToggleButton;
