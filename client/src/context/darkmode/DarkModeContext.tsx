import React from 'react';

export interface DarkModeContextInterface {
  darkMode: boolean;
  setDarkMode(mode: boolean): void;
}

const DarkModeContext = React.createContext<DarkModeContextInterface>({
  darkMode: false,
  setDarkMode: () => {}
});

export default DarkModeContext;
