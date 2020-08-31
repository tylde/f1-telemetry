import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import useDarkMode from '../hooks/useDarkMode';
import LinkButton from '../components/LinkButton/LinkButton';
import {Button} from '@emblem-ui/core';
import {headerText} from '../config/branding';

interface DarkModeButton {}

const DarkModeButton: React.FC<DarkModeButton> = () => {
  const {darkMode, setDarkMode} = useDarkMode();

  const icon = darkMode
    ? <FontAwesomeIcon icon={['fas', 'moon']} color='#E0B500' />
    : <FontAwesomeIcon icon={['far', 'sun']} />;

    return (
      <Button onClick={() => setDarkMode(!darkMode)} elementStyle='subtle' elementColor='dark'>
        {icon}
      </Button>
    );
};

interface AppHeader {}

const AppHeader: React.FC<AppHeader> = () => {
  return (
    <header className='app-header'>
      <div className='app-header__left'>
        <div className='app-header__logo'>
          {headerText}
        </div>
      </div>
      <div className='app-header__right'>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default AppHeader;
