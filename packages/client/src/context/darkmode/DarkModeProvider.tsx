import React, {useEffect} from 'react';

import DarkModeContext from './DarkModeContext';
import useLocalStorage from '../../hooks/useLocalStorage';

interface DarkModeProvider {
  children?: React.ReactNode;
  localStorageKey?: string;
}

const CLASSES = {
  DARK: 'dark-mode',
  LIGHT: 'light-mode'
};

const DarkModeProvider: React.FC<DarkModeProvider> = ({
  children,
  localStorageKey = 'darkMode'
}) => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>(localStorageKey, true);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.remove(CLASSES.LIGHT);
      root.classList.add(CLASSES.DARK);
    } else {
      root.classList.remove(CLASSES.DARK);
      root.classList.add(CLASSES.LIGHT);
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
