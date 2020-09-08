import React from 'react';

import './App.scss';

import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppContent from './AppContent';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <AppMain>
        <AppContent>
          <AppRoutes />
        </AppContent>
      </AppMain>
    </div>
  );
}

export default App;
