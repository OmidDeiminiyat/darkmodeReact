import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setColor] = useState('light');

  const ChangeTheme = () => {
    setColor((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, ChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
