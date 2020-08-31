import React from 'react';

import UserContext from './UserContext';
import useLocalStorage from '../../hooks/useLocalStorage';

interface UserProvider {
  children?: React.ReactNode;
}

const UserProvider: React.FC<UserProvider> = ({
  children
}) => {
  const [isLogged, setIsLogged] = useLocalStorage<boolean>('isLogged', false);
  const [username, setUsername] = useLocalStorage<string | null>('username', null);
  const [permissions, setPermissions] = useLocalStorage<string[]>('permissions', []);

  const onLogOut = () => {
    setIsLogged(false);
  };

  // TODO ASK FOR PERMISSIONS ON APP LOAD

  return (
    <UserContext.Provider value={{
      isLogged,
      username,
      permissions,
      onLogOut
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
