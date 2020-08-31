import React from 'react';

interface AppMain {
  children: React.ReactNode
}

const AppMain: React.FC<AppMain> = ({
  children
}) => {

  return (
    <main className='app-main'>
      {children}
    </main>
  );
};

export default AppMain;
