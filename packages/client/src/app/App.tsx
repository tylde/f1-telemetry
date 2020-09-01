import React from 'react';

import './App.scss';

import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppContent from './AppContent';
import AppRoutes from './AppRoutes';
import AppFooter from './AppFooter';

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <AppMain>
        <AppContent>
          <AppRoutes />
        </AppContent>
        <AppFooter />
      </AppMain>
    </div>
  );
}

export default App;
