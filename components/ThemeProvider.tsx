import React, { createContext, useContext } from 'react';
import theme from '@/constants/theme';

// Create a context for the theme
export const ThemeContext = createContext(theme);

// Create a hook to use the theme
export const useTheme = () => useContext(ThemeContext);

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};