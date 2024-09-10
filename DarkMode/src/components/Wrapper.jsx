// Wrapper.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './../App.css';

const Wrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`wrapper ${theme}`}>
      {children}
    </div>
  );
};

export default Wrapper;
