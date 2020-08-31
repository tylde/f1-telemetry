import React from 'react';



export interface UserContextInterface {
  isLogged: boolean;
  username: string | null;
  permissions: string[];
  onLogOut: () => void;
}

const UserContext = React.createContext<UserContextInterface>({
  isLogged: false,
  username: null,
  permissions: [],
  onLogOut: () => {}
});

export default UserContext;
