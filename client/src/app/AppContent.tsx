import React from 'react';

interface AppContent {
  children: React.ReactNode
}

const AppContent: React.FC<AppContent> = ({
  children
}) => {

  return (
    <div className='app-content'>
      {children}
    </div>
  );
};

export default AppContent;
